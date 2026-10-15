const profiles = [
  {name:'Goldie',age:24,place:'Idaho · 2 fields away',bio:'A golden soul with a crispy sense of humor. Looking for someone to share slow Sundays and a side of fries.',tags:['Sunday roasts','Sunshine','Big spoon energy'],color:0},
  {name:'Chip',age:27,place:'The next patch · 3 fields away',bio:'A little salty, mostly sweet. Great at movie nights and terrible at sharing the last fry. Let’s ketchup.',tags:['Movie nights','Dad jokes','Extra crispy'],color:12},
  {name:'Violet',age:25,place:'Purple Valley · 1 field away',bio:'An old soul with colorful roots. Into farmers markets, rainy afternoons, and growing something real.',tags:['Art lover','Farm to table','Deep roots'],color:280},
  {name:'Russ',age:29,place:'Idaho · 5 fields away',bio:'Rugged on the outside, fluffy on the inside. My ideal date? A long walk followed by absolutely no peeling.',tags:['Outdoorsy','Comfort food','Soft heart'],color:350},
  {name:'Sweet Pea',age:26,place:'Sunny Acres · 4 fields away',bio:'Technically a sweet potato. Emotionally available. Bringing warm energy and cinnamon to the relationship.',tags:['Baking','Cozy evenings','Sweet tooth'],color:335},
  {name:'Finn',age:23,place:'Little Garden · 2 fields away',bio:'Small potato, big plans. Let’s take the scenic root and see where we end up.',tags:['Adventures','Live music','Little spoon'],color:20}
];
let saved;try{saved=JSON.parse(localStorage.getItem('spud-v1'));}catch{}
let index=Number.isInteger(saved?.index)&&saved.index>=0?saved.index:0;
let matches=Array.isArray(saved?.matches)?saved.matches.filter(i=>Number.isInteger(i)&&i>=0&&i<profiles.length):[];
let history=[];
const $=id=>document.getElementById(id);
function persist(){try{localStorage.setItem('spud-v1',JSON.stringify({index,matches}));}catch{}}
function render(){const p=profiles[index%profiles.length];$('name').textContent=`${p.name}, ${p.age}`;$('location').textContent='⌁ '+p.place;$('bio').textContent=p.bio;$('potato').style.filter=`hue-rotate(${p.color}deg)`;$('tags').replaceChildren(...p.tags.map(t=>{const s=document.createElement('span');s.textContent=t;return s;}));$('count').textContent=matches.length;$('undo').disabled=!history.length;}
function renderMatches(){$('empty').hidden=matches.length>0;$('match-list').replaceChildren(...matches.map(i=>{const p=profiles[i],el=document.createElement('article');el.className='match-item';const icon=document.createElement('div');icon.textContent='🥔';icon.style.fontSize='40px';const name=document.createElement('h3');name.textContent=`${p.name}, ${p.age}`;const info=document.createElement('p');info.textContent='You both found each other a-peeling.';el.append(icon,name,info);return el;}));}
function swipe(liked){const id=index%profiles.length;history.push({index,matches:[...matches]});if(liked&&!matches.includes(id)){matches.push(id);$('match-message').textContent=`${profiles[id].name} likes you too. Looks like something good is growing.`;$('match-dialog').showModal();}index++;persist();render();$('status').textContent=liked?'A little love planted.':'On to the next spud.';}
$('pass').onclick=()=>swipe(false);$('like').onclick=()=>swipe(true);$('undo').onclick=()=>{const last=history.pop();if(!last)return;index=last.index;matches=last.matches;persist();render();$('status').textContent='Last swipe undone.';};
$('keep').onclick=()=>$('match-dialog').close();
function tab(discover){$('discover').classList.toggle('hidden',!discover);$('matches').classList.toggle('hidden',discover);$('discover-tab').classList.toggle('active',discover);$('matches-tab').classList.toggle('active',!discover);if(!discover)renderMatches();}
$('discover-tab').onclick=()=>tab(true);$('matches-tab').onclick=()=>tab(false);
document.addEventListener('keydown',e=>{if($('match-dialog').open||$('discover').classList.contains('hidden')||e.target.tagName==='BUTTON')return;if(e.key==='ArrowLeft')swipe(false);if(e.key==='ArrowRight')swipe(true);});
let touchX=null;$('card').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});$('card').addEventListener('touchend',e=>{if(touchX===null)return;const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>65)swipe(dx>0);touchX=null;},{passive:true});render();
