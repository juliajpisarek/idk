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

test('only new arrivals show, including after reload and wraparound',()=>{
 const app=boot({index:0,matches:[0,1],passed:[2],chats:{0:[{sender:'me',text:'Keep this'}]}});assert.equal(app.ctx.currentDiscoverId(),18);
 for(let i=18;i<24;i++){assert.equal(app.ctx.currentDiscoverId(),i);app.ctx.swipe(false);}
 assert.equal(app.ctx.currentDiscoverId(),null);const reload=boot(app.state());assert.equal(reload.ctx.currentDiscoverId(),null);assert.equal(reload.state().chats[0][0].text,'Keep this');reload.ctx.openProfile(0);assert.equal(reload.nodes.get('full-profile-name').textContent,'Goldie, 24');
});
test('new likes and passes skip profiles and undo restores the latest choice',()=>{
 const app=boot({index:18,matches:[19],passed:[20]});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),21);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),18);app.ctx.swipe(false);assert.equal(app.ctx.currentDiscoverId(),21);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),18);
});
test('Secret Admirer filters saved old candidates and uses only fresh eligible profiles',()=>{
 const app=boot({admirer:{choices:[0,1,2,3],selected:0},matches:[18],passed:[19]});app.ctx.openAdmirer();assert(app.state().admirer.choices.every(id=>id>=20));app.nodes.get('admirer-choices').children[0].onclick();const id=app.state().admirer.selected;app.ctx.finishAdmirer(false);assert(app.state().passed.includes(id));
});
test('exhausting the new batch never falls back to old profiles; undo still works',()=>{
 const app=boot({index:23,matches:[18,19,20],passed:[21,22]});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),null);assert(app.nodes.get('like').disabled);assert(!app.nodes.get('discovery-empty').classList.contains('hidden'));app.ctx.swipe(false);assert.equal(app.ctx.currentDiscoverId(),null);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),23);
});
test('new profile galleries use three different columns of the fresh photo sheet',()=>{
 const app=boot();app.ctx.openProfile(18);assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'0% 0%');app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'50% 0%');app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'100% 0%');app.ctx.openProfile(23);assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'0% 100%');
});
