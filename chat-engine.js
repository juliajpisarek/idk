/* Free, local conversation rules. No network requests or model inference. */
const SpudChat = (() => {
  function topic(text) {
    const t=text.toLowerCase();
    const rules=[['boundary',/\b(stop|leave me alone|not interested|don.t flirt|uncomfortable)\b/],['bye',/\b(bye|goodnight|good night|goodbye)\b/],['memory',/\b(remember|my name|about me|favorite|favourite)\b.*\?|\bwhat.*\b(my name|told you)\b/],['mood',/\b(sad|lonely|upset|bad day|rough day|stressed|anxious|tired|exhausted)\b/],['pets',/\b(pet|pets|dog|dogs|cat|cats|rabbit|tortoise|animal|animals|gravy|marmalade|pixel)\b/],['intentions',/\b(looking for|relationship|dating intentions|serious|commitment|children|kids|family)\b/],['work',/\b(work|job|career|living|teacher|founder|startup)\b/],['music',/\b(music|song|songs|band|playlist|listen|listening|gig)\b/],['hobby',/\b(hobby|hobbies|weekend|sunday|fun|free time|travel|game|games|book|books|read|reading)\b/],['date',/\b(date|meet|walk|coffee|hang out)\b/],['food',/\b(fries|chips|mash|baked|roast|food|dinner|cook|cooking|pizza|eat|baking)\b/],['flirt',/\b(cute|hot|beautiful|handsome|pretty|kiss|flirt|crush|love you|like you|sexy)\b/],['greeting',/^(hi|hey|hello|heyyy|hiya|howdy)[!.\s]*$/],['followup',/^(yes|yeah|yep|no|nope|sure|okay|ok|maybe|why|really|tell me more)[?!.\s]*$/]];
    return rules.find(([,pattern])=>pattern.test(t))?.[0]||'other';
  }
  function memory(messages) {
    const result={};
    for(const m of messages.filter(m=>m.sender==='me')){
      const name=m.text.match(/\b(?:my name is|call me)\s+([\p{L}][\p{L}'’-]*(?:\s+[\p{L}][\p{L}'’-]*)?)(?=[.!?,]|$)/iu);
      if(name)result.name=name[1];
      const favorite=m.text.match(/\bmy favou?rite\s+([\p{L} ]{1,25}?)\s+is\s+([^.!?\n]{1,80})/iu);
      if(favorite)result.favorite={kind:favorite[1].trim(),value:favorite[2].trim()};
    }
    return result;
  }
  function choose(options,messages){
    const used=new Set(messages.filter(m=>m.sender==='potato').slice(-12).map(m=>m.text));
    return options.find(text=>!used.has(text))||options[messages.filter(m=>m.sender==='me').length%options.length];
  }
  function reply(profile,messages,text,pollVote){
    const voice=profile.conversation, facts=profile.facts, known=memory(messages);
    const previousUsers=messages.filter(m=>m.sender==='me');
    let intent=topic(text);
    if(intent==='boundary')return 'Understood. I’ll stop flirting. You can close this chat whenever you like.';
    if(intent==='memory'){
      const details=[];if(known.name)details.push(`You asked me to call you ${known.name}.`);
      if(known.favorite)details.push(`Your favorite ${known.favorite.kind} is ${known.favorite.value}.`);
      return details.length?details.join(' '):'You haven’t told me a name or a favorite yet. Try “Call me Alex” or “My favorite food is pizza.”';
    }
    if(/\b(?:my name is|call me)\b/i.test(text)&&known.name)return `${voice.hello} Nice to meet you, ${known.name}. ${voice.question}`;
    if(/\bmy favou?rite\b/i.test(text)&&known.favorite)return `Noted: ${known.favorite.value}. ${voice.favorite}`;
    if(intent==='bye')return profile.chat.bye;
    if(intent==='greeting')return choose([profile.chat.greeting,`${voice.hello} ${voice.question}`,voice.replies[0]],messages);
    if(intent==='followup'){
      const previous=previousUsers.slice(0,-1).reverse().find(m=>!['followup','greeting','other'].includes(topic(m.text)));
      if(previous)intent=topic(previous.text);
    }
    const options={
      pets:[`${facts.Pets}. ${voice.pets}`,profile.photos[2].caption+' '+voice.petQuestion],
      work:[`${facts.Work}. ${voice.work}`,voice.workStory],
      intentions:[`${facts['Looking for']}. ${voice.intentions}`,`${facts['Relationship style']}. ${facts['Family plans']}. ${voice.values}`],
      music:[`${facts['On repeat']}. ${voice.music}`,voice.musicStory],
      hobby:[voice.hobby,profile.prompts[0].answer+' '+voice.question],
      mood:[voice.support,'We can keep this low-pressure. Would you prefer a distraction or space to talk?'],
      flirt:[voice.flirt,voice.flirtMore],
      date:[profile.chat.date,voice.dateMore],
      food:[profile.chat.food,voice.foodMore],
      other:[...voice.replies,...profile.chat.replies,voice.question]
    };
    if(intent==='other'&&Number.isInteger(pollVote)&&profile.poll.options[pollVote]){
      options.other.push(`You picked “${profile.poll.options[pollVote]}” on my poll. ${voice.poll}`);
    }
    if(intent==='other'&&known.name)options.other.push(`${known.name}, ${voice.question.charAt(0).toLowerCase()+voice.question.slice(1)}`);
    return choose(options[intent]||options.other,messages);
  }
  function starters(profile){return ['Tell me about your pets','What are you looking for?',`What music do you like?`];}
  return {reply,memory,topic,starters};
})();
