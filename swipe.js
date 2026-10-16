/* Pointer gestures keep vertical scrolling native and commit only horizontal drags. */
const SpudSwipe=(()=>{
 function decision(dx,dy,width,velocity){
  if(Math.abs(dx)<=Math.abs(dy))return null;
  const distance=Math.min(110,Math.max(65,width*.28));
  return Math.abs(dx)>=distance||(Math.abs(dx)>=35&&Math.abs(velocity)>=.55)?dx>0:null;
 }
 function attach(card,{onSwipe,canStart}){
  let drag=null,busy=false,generation=0,animation=null,suppressClick=false;
  const stamps={like:card.querySelector('.swipe-like'),pass:card.querySelector('.swipe-pass')};
  function paint(dx=0,dy=0){
   card.style.transform=`translate(${dx}px, ${dy*.12}px) rotate(${Math.max(-18,Math.min(18,dx/18))}deg)`;
   if(stamps.like)stamps.like.style.opacity=String(Math.max(0,Math.min(1,dx/90)));
   if(stamps.pass)stamps.pass.style.opacity=String(Math.max(0,Math.min(1,-dx/90)));
  }
  function reset(){
   generation++;animation?.cancel();animation=null;drag=null;busy=false;
   card.classList.remove('dragging');paint();
  }
  function release(e,cancelled=false){
   if(!drag||drag.id!==e.pointerId)return;
   const state=drag;drag=null;card.classList.remove('dragging');
   const dx=e.clientX-state.x,dy=e.clientY-state.y;
   if(!state.horizontal){paint();return;}
   suppressClick=true;
   const elapsed=Math.max(1,e.timeStamp-state.sampleTime);
   const velocity=elapsed<=120?(e.clientX-state.sampleX)/elapsed:0;
   const result=cancelled?null:decision(dx,dy,card.getBoundingClientRect().width,velocity);
   if(result===null){paint();return;}
   busy=true;const ticket=++generation;
   const reduced=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
   const distance=Math.max(globalThis.innerWidth||500,card.getBoundingClientRect().width)*1.3;
   const destination=`translate(${result?distance:-distance}px, ${dy*.12}px) rotate(${result?22:-22}deg)`;
   const finish=()=>{if(ticket!==generation)return;busy=false;animation=null;paint();onSwipe(result);};
   if(reduced||!card.animate){finish();return;}
   animation=card.animate([{transform:card.style.transform,opacity:1},{transform:destination,opacity:0}],{duration:220,easing:'ease-in',fill:'none'});
   animation.finished.then(finish,()=>{});
  }
  card.addEventListener('pointerdown',e=>{
   if(busy)return;
   suppressClick=false;
   if(e.isPrimary===false||e.button!==0||!canStart()||e.target.closest('button,a,input,textarea,select'))return;
   drag={id:e.pointerId,x:e.clientX,y:e.clientY,sampleX:e.clientX,sampleTime:e.timeStamp,horizontal:false};
  });
  card.addEventListener('pointermove',e=>{
   if(!drag||drag.id!==e.pointerId)return;
   const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
   if(!drag.horizontal){
    if(Math.max(Math.abs(dx),Math.abs(dy))<10)return;
    if(Math.abs(dy)>=Math.abs(dx)){drag=null;return;}
    drag.horizontal=true;card.classList.add('dragging');card.setPointerCapture?.(e.pointerId);
   }
   paint(dx,dy);
   if(e.timeStamp-drag.sampleTime>80){drag.sampleX=e.clientX;drag.sampleTime=e.timeStamp;}
  });
  card.addEventListener('pointerup',e=>release(e));
  card.addEventListener('pointercancel',e=>release(e,true));
  card.addEventListener('lostpointercapture',()=>{if(drag)reset();});
  card.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false;}},true);
  return {reset,get busy(){return busy;}};
 }
 return {attach,decision};
})();
