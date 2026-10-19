const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context=vm.createContext({});
for(const file of ['profile-details.js','chat-personalities.js','chat-engine.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
const data=fs.readFileSync('app.js','utf8').split('let saved;try')[0];vm.runInContext(data,context);
const profiles=vm.runInContext('profiles',context),engine=vm.runInContext('SpudChat',context);
function send(profile,history,text){history.push({sender:'me',text});const result=engine.reply(profile,history,text);history.push({sender:'potato',text:result});return result;}
test('all personalities handle supported topics with complete replies',()=>{
 assert.equal(profiles.length,34);
 for(const p of profiles){const h=[];for(const text of ['hello','Do you have pets?','What is your job?','What music do you like?','What are your hobbies?','What are you looking for?','Coffee date?','Favorite dinner?','You are cute','I had a rough day','yeah','something unexpected','goodnight']){
  const answer=send(p,h,text);assert.equal(typeof answer,'string',p.name);assert(answer.length>0,p.name);assert(!answer.includes('undefined'),p.name);
 }}
});
test('facts come from the specific profile and questions take priority over greetings',()=>{
 assert.match(send(profiles[0],[],'Hey, do you have a cat?'),/Marmalade/);
 assert.match(send(profiles[15],[],'What is your job?'),/Software tester/);
 assert.match(send(profiles[8],[],'What are your relationship intentions?'),/co-parent|Long-term/);
});
test('repeated topic questions use alternatives and a short follow-up stays on topic',()=>{
 const h=[];const first=send(profiles[0],h,'Tell me about your pets');const second=send(profiles[0],h,'Tell me more');assert.notEqual(first,second);assert.match(second,/Marmalade|animals|people|cat/i);
});
test('memory is grounded in each conversation and survives serialization',()=>{
 const h=[];send(profiles[0],h,'Call me Alex');send(profiles[0],h,'My favorite food is pizza');
 assert.match(send(profiles[0],h,'What is my name?'),/Alex/);
 const restored=JSON.parse(JSON.stringify(h));assert.match(send(profiles[0],restored,'Do you remember my favorite food?'),/pizza/);
 assert.match(send(profiles[1],[],'What do you remember about me?'),/haven’t told me/);
 assert.equal(engine.memory([]).name,undefined);
 assert(!engine.memory([{sender:'me',text:"I'm sad"}]).name);
});
test('boundaries override flirting and bad-day replies acknowledge the mood',()=>{
 assert.match(send(profiles[0],[],'Stop flirting, even if you think I am cute'),/stop flirting/);
 assert.match(send(profiles[0],[],'I am sad today'),/rough|pressure|sorry/);
});
test('personality differences remain visible for the same topics',()=>{
 const answers=profiles.map(p=>send(p,[],'Tell me about your job'));assert.equal(new Set(answers).size,34);
 assert(send(profiles[6],[],'hello').length<send(profiles[11],[],'hello').length);
});
test('fallbacks vary, and poll choice is grounded in the selected option',()=>{
 const h=[];const answers=Array.from({length:7},()=>send(profiles[0],h,'something unexpected'));
 assert(new Set(answers).size>=5);
 const p=profiles[0],used=p.conversation.replies.concat(p.chat.replies,p.conversation.question).map(text=>({sender:'potato',text}));
 const reply=engine.reply(p,used,'something unexpected',1);assert(reply.includes(p.poll.options[1]));
});
