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
let chats={};
for(const id of matches){
 const messages=saved?.chats?.[id];
 if(Array.isArray(messages))chats[id]=messages.filter(m=>m&&['me','potato'].includes(m.sender)&&typeof m.text==='string');
}
let activeChat=null;
const $=id=>document.getElementById(id);
function persist(){try{localStorage.setItem('spud-v1',JSON.stringify({index,matches,chats}));}catch{}}
function render(){const p=profiles[index%profiles.length];$('name').textContent=`${p.name}, ${p.age}`;$('location').textContent='⌁ '+p.place;$('bio').textContent=p.bio;$('potato').style.filter=`hue-rotate(${p.color}deg)`;$('tags').replaceChildren(...p.tags.map(t=>{const s=document.createElement('span');s.textContent=t;return s;}));$('count').textContent=matches.length;$('undo').disabled=!history.length;}
function renderMatches(){$('empty').hidden=matches.length>0;$('match-list').replaceChildren(...matches.map(i=>{const p=profiles[i],el=document.createElement('article');el.className='match-item';const icon=document.createElement('div');icon.textContent='🥔';icon.style.fontSize='40px';const name=document.createElement('h3');name.textContent=`${p.name}, ${p.age}`;const info=document.createElement('p');info.textContent='You both found each other a-peeling.';const chat=document.createElement('button');chat.className='chat-button';chat.textContent='Say hello 💬';chat.setAttribute('aria-label',`Chat with ${p.name}`);chat.onclick=()=>openChat(i);el.append(icon,name,info,chat);return el;}));}
function swipe(liked){const id=index%profiles.length;history.push({index,matches:[...matches]});if(liked&&!matches.includes(id)){matches.push(id);$('match-message').textContent=`${profiles[id].name} likes you too. Looks like something good is growing.`;$('match-dialog').showModal();}index++;persist();render();$('status').textContent=liked?'A little love planted.':'On to the next spud.';}
$('pass').onclick=()=>swipe(false);$('like').onclick=()=>swipe(true);$('undo').onclick=()=>{const last=history.pop();if(!last)return;index=last.index;matches=last.matches;persist();render();$('status').textContent='Last swipe undone.';};
$('keep').onclick=()=>$('match-dialog').close();
function tab(discover){$('discover').classList.toggle('hidden',!discover);$('matches').classList.toggle('hidden',discover);$('discover-tab').classList.toggle('active',discover);$('matches-tab').classList.toggle('active',!discover);if(!discover)renderMatches();}
$('discover-tab').onclick=()=>tab(true);$('matches-tab').onclick=()=>tab(false);
document.addEventListener('keydown',e=>{if($('match-dialog').open||$('discover').classList.contains('hidden')||e.target.tagName==='BUTTON')return;if(e.key==='ArrowLeft')swipe(false);if(e.key==='ArrowRight')swipe(true);});
let touchX=null;$('card').addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});$('card').addEventListener('touchend',e=>{if(touchX===null)return;const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>65)swipe(dx>0);touchX=null;},{passive:true});render();

const greetings=[
 'Hey sunshine! What would your perfect Sunday look like? ☀️',
 'Hey there! Important question: fries or chips? 🥔',
 'Hello, lovely soul. What has made you smile today? 🌱',
 'Hey! Fancy a scenic walk through the patch? 🌳',
 'Hi sweet thing! What’s your favorite cozy treat? 🍪',
 'Hey adventurer! Where should we take the scenic root? 🗺️'
];
function openChat(id){
 if(!matches.includes(id))return;
 activeChat=id;
 if(!chats[id]?.length){chats[id]=[{sender:'potato',text:greetings[id]}];persist();}
 $('chat-title').textContent=`🥔 ${profiles[id].name}`;
 renderChat();$('chat-dialog').showModal();$('chat-input').focus();
}
function renderChat(){
 $('chat-messages').replaceChildren(...chats[activeChat].map(m=>{
  const bubble=document.createElement('p');bubble.className=`bubble ${m.sender}`;
  bubble.textContent=m.text;return bubble;
 }));
 $('chat-messages').scrollTop=$('chat-messages').scrollHeight;
}
function reply(id,text){
 const t=text.toLowerCase();
 if(/\b(hi|hey|hello)\b/.test(t))return `Hey! ${greetings[id]}`;
 if(/\b(fries|chips|mash|baked|roast)\b/.test(t))return 'Excellent taste! We’re already a perfect mash. What’s your favorite topping? 🥔';
 if(/\b(date|meet|walk|coffee)\b/.test(t))return ['A sunny picnic in the patch sounds dreamy. What would you bring? ☀️','Movie night with a mountain of fries? Pick the film! 🎬','A farmers market stroll would be lovely. Flowers or fresh bread first? 🌸','A long trail and a cozy picnic? That’s my kind of day. 🌳','Let’s imagine a baking date! Cinnamon rolls or cookies? 🍪','An imaginary road trip! Mountains or seaside? 🗺️'][id];
 if(/\b(bye|goodnight|night)\b/.test(t))return 'Rest those roots! I’ll be here in the patch when you’re back. 🌙';
 const options=[
  ['You’ve made my day a little more golden. What’s your favorite way to unwind? ☀️','I love a slow Sunday. Would you rather cook together or head out for brunch?'],
  ['You’re a-peeling! Got a joke that can top that one? 😄','I’m all ears… well, eyes. What’s your go-to comfort movie? 🎬'],
  ['That’s lovely. I’m happiest wandering a market. What little things make you happy? 🌱','I’d paint us a sunset over the fields. What colors would you choose? 🎨'],
  ['Soft heart, strong roots. What’s your favorite outdoor adventure? 🌳','A good walk always clears my head. Forest trail or mountain view?'],
  ['You bring such sweet energy. What would you bake on a rainy afternoon? 🍪','Cozy blankets and cinnamon: my happy place. What’s yours?'],
  ['Life’s better taking the scenic root! What’s on your adventure list? 🗺️','I’d bring the snacks. You pick the destination! Where are we heading?']
 ];
 return options[id][Math.floor(chats[id].filter(m=>m.sender==='me').length-1)%2];
}
$('chat-form').addEventListener('submit',e=>{
 e.preventDefault();const text=$('chat-input').value.trim();
 if(!text||activeChat===null)return;
 chats[activeChat].push({sender:'me',text:text.slice(0,1000)});
 chats[activeChat].push({sender:'potato',text:reply(activeChat,text)});
 $('chat-input').value='';persist();renderChat();$('chat-input').focus();
});
$('chat-close').onclick=()=>$('chat-dialog').close();
