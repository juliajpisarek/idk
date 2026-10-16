const {test}=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
function setup(animate){const handlers={},stamps={'.swipe-like':{style:{}},'.swipe-pass':{style:{}}},calls=[];const card={style:{},classList:{add(){},remove(){}},querySelector:s=>stamps[s],setPointerCapture(){},getBoundingClientRect:()=>({width:360}),addEventListener(k,fn){handlers[k]=fn;},animate};const ctx=vm.createContext({innerWidth:390});vm.runInContext(fs.readFileSync('swipe.js','utf8'),ctx);const api=vm.runInContext('SpudSwipe',ctx);const controller=api.attach(card,{onSwipe:v=>calls.push(v),canStart:()=>true});function event(type,x,y,time=0,extra={}){handlers[type]({pointerId:1,isPrimary:true,button:0,clientX:x,clientY:y,timeStamp:time,target:{closest:()=>false},...extra});}return {event,calls,stamps,card,controller,api};}
test('horizontal drags track finger, show stamps and commit right/left',()=>{
 for(const [dx,liked,stamp] of [[130,true,'.swipe-like'],[-130,false,'.swipe-pass']]){const s=setup();s.event('pointerdown',100,100);s.event('pointermove',100+dx,105,150);assert(s.card.style.transform.includes(`${dx}px`));assert.equal(s.stamps[stamp].style.opacity,'1');s.event('pointerup',100+dx,105,180);assert.deepEqual(s.calls,[liked]);}
});
test('short drags snap back; vertical scrolling and cancelled gestures never swipe',()=>{
 for(const mode of ['short','vertical','cancel']){const s=setup();s.event('pointerdown',0,0);s.event('pointermove',mode==='short'?20:130,mode==='vertical'?200:0,200);s.event(mode==='cancel'?'pointercancel':'pointerup',mode==='short'?20:130,mode==='vertical'?200:0,500);assert.equal(s.calls.length,0);assert.equal(s.card.style.transform,mode==='vertical'?undefined:'translate(0px, 0px) rotate(0deg)');}
});
test('a quick horizontal flick can commit below the distance threshold',()=>{const s=setup();s.event('pointerdown',0,0);s.event('pointermove',50,0,40);s.event('pointerup',55,0,50);assert.deepEqual(s.calls,[true]);});
test('interactive controls do not start drags',()=>{const s=setup();s.event('pointerdown',0,0,0,{target:{closest:()=>true}});s.event('pointermove',200,0,100);s.event('pointerup',200,0,150);assert.equal(s.calls.length,0);});
test('reset during a dismissal cancels stale commits and blocks duplicate actions',async()=>{
 let finish,cancelled=false;const s=setup(()=>({finished:new Promise(r=>finish=r),cancel(){cancelled=true;}}));s.event('pointerdown',0,0);s.event('pointermove',150,0,100);s.event('pointerup',150,0,130);assert(s.controller.busy);s.controller.reset();finish();await Promise.resolve();assert(cancelled);assert.equal(s.calls.length,0);assert(!s.controller.busy);
});
test('drag clicks are suppressed and animation commits once',async()=>{
 let finish;const s=setup(()=>({finished:new Promise(r=>finish=r),cancel(){}}));s.event('pointerdown',0,0);s.event('pointermove',130,0,100);s.event('pointerup',130,0,150);s.event('pointerdown',0,0);assert.equal(s.calls.length,0);finish();await Promise.resolve();assert.deepEqual(s.calls,[true]);let prevented=false;s.event('click',0,0,0,{preventDefault(){prevented=true;},stopPropagation(){}});assert(prevented);
});
