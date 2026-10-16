const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function boot(saved={}){
 const nodes=new Map();let stored=JSON.stringify(saved);
 function element(){const classes=new Set();return {querySelector(){return null;},style:{},value:'',children:[],classList:{add(...v){v.forEach(x=>classes.add(x));},remove(...v){v.forEach(x=>classes.delete(x));},contains(v){return classes.has(v);},toggle(v,on){if(on)classes.add(v);else classes.delete(v);}},setAttribute(){},replaceChildren(...children){this.children=children;},append(...children){this.children.push(...children);},addEventListener(event,fn){this[event]=fn;},focus(){},showModal(){this.open=true;},close(){this.open=false;}};}
 const ctx=vm.createContext({document:{getElementById(id){if(!nodes.has(id))nodes.set(id,element());return nodes.get(id);},createElement:element,addEventListener(){}},localStorage:{getItem(){return stored;},setItem(k,v){stored=v;}}});
 for(const file of ['profile-details.js','chat-personalities.js','chat-engine.js','swipe.js','app.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
 return {ctx,nodes,state:()=>JSON.parse(stored)};
}

test('new visitors start independently with zero matches and all 24 cards available',()=>{
 const first=boot();assert.equal(first.ctx.currentDiscoverId(),0);assert.equal(first.nodes.get('count').textContent,0);first.ctx.swipe(true);
 const second=boot();assert.equal(second.nodes.get('count').textContent,0);assert.equal(second.ctx.currentDiscoverId(),0);
 const seen=new Set();for(let i=0;i<24;i++){seen.add(second.ctx.currentDiscoverId());second.ctx.swipe(false);}assert.equal(seen.size,24);assert.equal(second.ctx.currentDiscoverId(),null);assert.deepEqual(first.state().matches,[0]);
});
test('returning visitors retain their own matches, passes and chats',()=>{
 const app=boot({index:0,matches:[0,1],passed:[2],chats:{0:[{sender:'me',text:'Keep this'}]}});assert.equal(app.ctx.currentDiscoverId(),3);
 const reload=boot(app.state());assert.equal(reload.ctx.currentDiscoverId(),3);assert.equal(reload.state().chats[0][0].text,'Keep this');reload.ctx.openProfile(0);assert.equal(reload.nodes.get('full-profile-name').textContent,'Goldie, 24');
});
test('new likes and passes skip profiles and undo restores the latest choice',()=>{
 const app=boot({index:18,matches:[19],passed:[20]});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),21);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),18);app.ctx.swipe(false);assert.equal(app.ctx.currentDiscoverId(),21);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),18);
});
test('admirers can include any unmatched, unpassed profile',()=>{
 const app=boot({admirer:{choices:[0,1,2,3],selected:0},matches:[1],passed:[2]});app.ctx.openAdmirer();assert.deepEqual(app.state().admirer.choices,[0,3]);
});
test('exhausting all profiles shows an empty state and undo works',()=>{
 const app=boot({index:23,matches:Array.from({length:23},(_,id)=>id)});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),null);assert(app.nodes.get('like').disabled);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),23);
});
test('start fresh requires confirmation and clears only this browser experience',()=>{
 const app=boot({matches:[0],passed:[1],chats:{0:[{sender:'me',text:'Hi'}]},pollVotes:{0:1}});app.nodes.get('reset-open').onclick();app.nodes.get('reset-cancel').onclick();assert.deepEqual(app.state().matches,[0]);app.nodes.get('reset-open').onclick();app.nodes.get('reset-confirm').onclick();assert.deepEqual(app.state().matches,[]);assert.deepEqual(app.state().passed,[]);assert.deepEqual(app.state().chats,{});assert.deepEqual(app.state().pollVotes,{});assert.equal(app.ctx.currentDiscoverId(),0);assert.equal(boot(app.state()).ctx.currentDiscoverId(),0);
});
test('new profile galleries use three different columns of the fresh photo sheet',()=>{
 const app=boot();app.ctx.openProfile(18);assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'0% 0%');app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'50% 0%');app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'100% 0%');app.ctx.openProfile(23);assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'0% 100%');
});
