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

test('new visitors start independently with zero matches and all 34 cards available',()=>{
 const first=boot();assert.equal(first.ctx.currentDiscoverId(),0);assert.equal(first.nodes.get('count').textContent,0);first.ctx.swipe(true);
 const second=boot();assert.equal(second.nodes.get('count').textContent,0);assert.equal(second.ctx.currentDiscoverId(),0);
 const seen=new Set();for(let i=0;i<34;i++){seen.add(second.ctx.currentDiscoverId());second.ctx.swipe(false);}assert.equal(seen.size,34);assert.equal(second.ctx.currentDiscoverId(),null);assert.deepEqual(first.state().matches,[0]);
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
 const app=boot({index:33,matches:Array.from({length:33},(_,id)=>id)});app.ctx.swipe(true);assert.equal(app.ctx.currentDiscoverId(),null);assert(app.nodes.get('like').disabled);app.nodes.get('undo').onclick();assert.equal(app.ctx.currentDiscoverId(),33);
});
test('start fresh requires confirmation and clears only this browser experience',()=>{
 const app=boot({matches:[0],passed:[1],chats:{0:[{sender:'me',text:'Hi'}]},pollVotes:{0:1}});app.nodes.get('reset-open').onclick();app.nodes.get('reset-cancel').onclick();assert.deepEqual(app.state().matches,[0]);app.nodes.get('reset-open').onclick();app.nodes.get('reset-confirm').onclick();assert.deepEqual(app.state().matches,[]);assert.deepEqual(app.state().passed,[]);assert.deepEqual(app.state().chats,{});assert.deepEqual(app.state().pollVotes,{});assert.equal(app.ctx.currentDiscoverId(),0);assert.equal(boot(app.state()).ctx.currentDiscoverId(),0);
});
test('new profile galleries use three different columns of the fresh photo sheet',()=>{
 const app=boot();app.ctx.openProfile(18);assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'0% 0%');app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'50% 0%');app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'100% 0%');app.ctx.openProfile(23);assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,'0% 100%');
});

test('tapping the discovery photo opens the current full profile without matching',()=>{
 const app=boot({matches:[0],passed:[1]});app.nodes.get('potato').onclick();assert.equal(app.nodes.get('full-profile-name').textContent,'Violet, 25');assert.equal(app.nodes.get('profile-dialog').open,true);assert.deepEqual(app.state().matches,[0]);
});

test('ten additional profiles have complete unique details, chats, and three distinct photos',()=>{
 const app=boot();const names=new Set();for(let id=24;id<34;id++){
  app.ctx.openProfile(id);names.add(app.nodes.get('full-profile-name').textContent);assert.equal(app.nodes.get('photo-thumbs').children.length,3);assert.equal(app.nodes.get('profile-facts').children.length,8);assert.equal(app.nodes.get('profile-prompts').children.length,2);assert.equal(app.nodes.get('poll-options').children.length,3);
  assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,`0% ${((id-24)%5)*25}%`);app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,`50% ${((id-24)%5)*25}%`);app.nodes.get('photo-next').onclick();assert.equal(app.nodes.get('full-profile-photo').style.backgroundPosition,`100% ${((id-24)%5)*25}%`);
 }assert.equal(names.size,10);
});
test('returning users who finished the previous lineup get the new profiles',()=>{
 const app=boot({index:24,matches:Array.from({length:12},(_,id)=>id),passed:Array.from({length:12},(_,id)=>id+12),chats:{0:[{sender:'me',text:'Still here'}]}});assert.equal(app.ctx.currentDiscoverId(),24);assert.equal(app.state().chats[0][0].text,'Still here');
});

test('discovery photo swipes cycle each gallery, preserve decisions, and reset for the next potato',()=>{
 for(const id of [0,18,24,29,33]){
  const app=boot({index:id});app.ctx.showDiscoveryPhoto(1);assert.match(app.nodes.get('discovery-photo-caption').textContent,/2 \/ 3/);assert(app.nodes.get('potato').classList.contains('photo-friends'));app.ctx.showDiscoveryPhoto(1);assert(app.nodes.get('potato').classList.contains('photo-life'));app.ctx.showDiscoveryPhoto(1);assert.match(app.nodes.get('discovery-photo-caption').textContent,/1 \/ 3/);app.ctx.showDiscoveryPhoto(-1);assert.match(app.nodes.get('discovery-photo-caption').textContent,/3 \/ 3/);app.ctx.swipe(false);assert.match(app.nodes.get('discovery-photo-caption').textContent,/1 \/ 3/);assert.deepEqual(app.state().matches,[]);assert.deepEqual(app.state().passed,[id]);
 }
});
