const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function boot(saved={}){
 const nodes=new Map();let stored=JSON.stringify(saved);
 function element(){const classes=new Set();return {style:{},value:'',children:[],classList:{add(...v){v.forEach(x=>classes.add(x));},remove(...v){v.forEach(x=>classes.delete(x));},contains(v){return classes.has(v);},toggle(v,on){if(on)classes.add(v);else classes.delete(v);}},setAttribute(){},replaceChildren(...children){this.children=children;},append(...children){this.children.push(...children);},addEventListener(event,fn){this[event]=fn;},focus(){},showModal(){this.open=true;},close(){this.open=false;}};}
 const ctx=vm.createContext({document:{getElementById(id){if(!nodes.has(id))nodes.set(id,element());return nodes.get(id);},createElement:element,addEventListener(){}},localStorage:{getItem(){return stored;},setItem(k,v){stored=v;}}});
 for(const file of ['profile-details.js','chat-personalities.js','chat-engine.js','app.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
 return {ctx,nodes,state:()=>JSON.parse(stored)};
}
test('saved matches are skipped on startup and remain skipped after wrapping',()=>{
 const app=boot({index:0,matches:[0,1,2]});assert.equal(app.ctx.currentDiscoverId(),3);
 for(let i=0;i<40;i++){assert(![0,1,2].includes(app.ctx.currentDiscoverId()));app.ctx.swipe(false);}
 const reload=boot(app.state());assert(![0,1,2].includes(reload.ctx.currentDiscoverId()));
});
test('matching from Discover advances to an unmatched potato; undo reverses the match',()=>{
 const app=boot({index:0,matches:[1,2]});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),3);assert(app.state().matches.includes(0));app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),0);assert(!app.state().matches.includes(0));
});
test('profile and Secret Admirer matches skip the current potato too',()=>{
 const app=boot({index:0,matches:[]});app.ctx.openProfile(0);app.nodes.get('profile-chat').onclick();assert.equal(app.ctx.currentDiscoverId(),1);
 vm.runInContext('admirer.selected=1;',app.ctx);app.ctx.finishAdmirer(true);assert.equal(app.ctx.currentDiscoverId(),2);
});
test('when everyone is matched, Discover is empty and all swipe paths are safe',()=>{
 const matches=Array.from({length:18},(_,i)=>i);const app=boot({index:0,matches});assert.equal(app.ctx.currentDiscoverId(),null);assert(app.nodes.get('card').classList.contains('hidden'));assert(!app.nodes.get('discovery-empty').classList.contains('hidden'));assert(app.nodes.get('like').disabled);assert(app.nodes.get('pass').disabled);app.ctx.swipe(true);app.ctx.swipe(false);app.nodes.get('discover-profile').onclick();assert.equal(app.ctx.currentDiscoverId(),null);app.nodes.get('discovery-matches').onclick();assert(app.nodes.get('discover').classList.contains('hidden'));
});
test('matching the final potato shows the empty state; undo restores that profile',()=>{
 const app=boot({index:17,matches:Array.from({length:17},(_,i)=>i)});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),null);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),17);assert(!app.nodes.get('card').classList.contains('hidden'));
});
test('passes stay excluded through wraparound and reload; undo restores the last pass',()=>{
 const app=boot({index:17,matches:[1],passed:[0]});app.ctx.swipe(false);assert(app.state().passed.includes(17));assert.equal(app.ctx.currentDiscoverId(),2);
 const reload=boot(app.state());assert.equal(reload.ctx.currentDiscoverId(),2);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),17);assert(!app.state().passed.includes(17));assert(app.state().passed.includes(0));
});
test('passing everyone exhausts Discover without repeating any profiles',()=>{
 const app=boot();const seen=new Set();for(let i=0;i<18;i++){const id=app.ctx.currentDiscoverId();assert(!seen.has(id));seen.add(id);app.ctx.swipe(false);}assert.equal(app.ctx.currentDiscoverId(),null);assert.equal(app.state().passed.length,18);assert(!app.nodes.get('discovery-empty').classList.contains('hidden'));assert.equal(boot(app.state()).ctx.currentDiscoverId(),null);
});
test('admirer choices exclude passed cards and an admirer rejection excludes Discover too',()=>{
 const app=boot({passed:[0,1,2]});app.ctx.openAdmirer();assert(app.state().admirer.choices.every(id=>![0,1,2].includes(id)));const id=app.state().admirer.choices[0];vm.runInContext(`admirer.selected=${id};index=${id};`,app.ctx);app.ctx.finishAdmirer(false);assert(app.state().passed.includes(id));assert.notEqual(app.ctx.currentDiscoverId(),id);
});
test('old saved data still works and old admirer rejections are retained',()=>{
 const app=boot({index:0,matches:[1],admirer:{seen:[0,1]}});assert.equal(app.ctx.currentDiscoverId(),2);assert.equal(app.nodes.get('count').textContent,1);
});
