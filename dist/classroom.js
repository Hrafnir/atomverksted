/* Shareable activity routes. A recipe link starts an exercise, not a saved answer. */
let classroomReady=false,applyingClassroomURL=false,activeClassroomTab='build',lastClassroomSearch=location.search;
const classroomTabs={build:['01','Atomer og grunnstoffer'],table:['02','Periodesystemet'],molecules:['03','Molekylverksted'],salts:['04','Saltverket'],reactions:['05','Metall i vann'],kit3d:['06','3D-molekylbyggesett']};
function updateClassroomTab(name){
 activeClassroomTab=name;if(name!=='reactions'&&typeof stopWaterReaction==='function')stopWaterReaction();
 const [number,title]=classroomTabs[name]||classroomTabs.build;
 document.querySelector('.lesson').innerHTML=`${number} <span>${title}</span>`;
 document.body.dataset.activity=name;
 syncClassroomURL();
}
function syncClassroomURL(){
 if(!classroomReady||applyingClassroomURL)return;
 const url=new URL(location.href);
 ['tab','z','p','n','e','cid','salt','challenge','metal'].forEach(k=>url.searchParams.delete(k));
 url.searchParams.set('tab',activeClassroomTab);
 if(activeClassroomTab==='build'){for(const [key,value] of Object.entries({p,n,e,challenge}))url.searchParams.set(key,value);}
 if(activeClassroomTab==='reactions')url.searchParams.set('metal',waterReaction.metal);
 if(activeClassroomTab==='table')url.searchParams.set('z',selected);
 if(activeClassroomTab==='molecules'&&molState.recipe!==null)url.searchParams.set('cid',moleculeBank[molState.recipe].cid);
 if(activeClassroomTab==='salts'&&saltState.recipe!==null)url.searchParams.set('salt',saltBank[saltState.recipe].id);
 history.replaceState(null,'',url);lastClassroomSearch=url.search;
}
function readClassroomInteger(params,key,min,max,fallback){
 if(!params.has(key)||!/^\d+$/.test(params.get(key)))return fallback;
 const value=Number(params.get(key));return Number.isSafeInteger(value)&&value>=min&&value<=max?value:fallback;
}
function applyClassroomURL(){
 applyingClassroomURL=true;
 try{
 const params=new URLSearchParams(location.search),name=Object.hasOwn(classroomTabs,params.get('tab'))?params.get('tab'):'build';
 tab(name);
 if(name==='reactions'){waterReaction.metal=params.get('metal')==='Li'?'Li':'Na';waterReaction.step=0;renderWaterReaction();}
 if(name==='table')select(readClassroomInteger(params,'z',1,118,1));
 if(name==='build'){
  p=readClassroomInteger(params,'p',0,118,readClassroomInteger(params,'z',0,118,0));
  n=readClassroomInteger(params,'n',0,200,p?defaultMass(p)-p:0);e=readClassroomInteger(params,'e',0,118,p);
  challenge=readClassroomInteger(params,'challenge',0,atomTasks.length-1,0);render();
 }
 if(name==='molecules'&&params.has('cid')){const i=moleculeBank.findIndex(m=>String(m.cid)===params.get('cid')&&!m.referenceOnly);if(i>=0)prepareMolecule(i);}
 if(name==='salts'&&params.has('salt')){const i=saltBank.findIndex(s=>s.id===params.get('salt'));if(i>=0)prepareSalt(i);}
 }finally{applyingClassroomURL=false;}
 syncClassroomURL();
}
let periodicCategory='';
function filterPeriodic(){
 const q=document.querySelector('#search').value.trim().toLocaleLowerCase('nb');let count=0;
 document.querySelectorAll('.element').forEach(b=>{
  const el=elements[Number(b.dataset.z)-1],match=(!q||el.name.toLocaleLowerCase('nb').includes(q)||el.symbol.toLowerCase()===q||String(el.number)===q)&&(!periodicCategory||category(el)[0]===periodicCategory);
  b.classList.toggle('dim',!match);if(match)count++;
 });
 document.querySelector('#matches').textContent=q||periodicCategory?`${count} treff. ${periodicCategory?periodicCategory+'. ':''}Treffene er fremhevet; alle grunnstoffene er fortsatt tilgjengelige.`:'118 grunnstoffer · Bruk piltastene for å flytte mellom grunnstoffer. Rull sidelengs på små skjermer.';
 document.querySelectorAll('[data-periodic-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.periodicCategory===periodicCategory)));
}
const legend=document.querySelector('#categoryLegend');
legend.innerHTML='<button data-periodic-category="" aria-pressed="true">Alle</button>'+[...new Map(Object.values(cats).map(v=>[v[0],v])).values(),['Ukjent kategori','#e2e3df']].map(([name,color])=>`<button data-periodic-category="${name}" aria-pressed="false"><i style="--cat:${color}"></i>${name}</button>`).join('');
legend.querySelectorAll('button').forEach(b=>b.onclick=()=>{periodicCategory=b.dataset.periodicCategory;filterPeriodic()});
document.querySelector('#search').addEventListener('input',filterPeriodic);
function focusPeriodic(z){
 select(z);document.querySelectorAll('.element').forEach(b=>b.tabIndex=+b.dataset.z===z?0:-1);
 document.querySelector(`.element[data-z="${z}"]`).focus({preventScroll:true});
}
document.querySelectorAll('.element').forEach(b=>{b.tabIndex=+b.dataset.z===selected?0:-1;b.addEventListener('click',()=>focusPeriodic(+b.dataset.z))});
document.querySelectorAll('[data-series]').forEach(b=>b.onclick=()=>{focusPeriodic(+b.dataset.series);document.querySelector(`.element[data-z="${b.dataset.series}"]`).scrollIntoView({block:'nearest',inline:'nearest'})});
function periodicNeighbor(data,z,key){
 const el=data[z-1],horizontal=key==='ArrowLeft'||key==='ArrowRight',direction=key==='ArrowLeft'||key==='ArrowUp'?-1:1;
 const candidates=data.filter(v=>v.number!==z&&(horizontal?(v.ypos===el.ypos&&(v.xpos-el.xpos)*direction>0):(v.ypos-el.ypos)*direction>0));
 candidates.sort((a,b)=>horizontal?Math.abs(a.xpos-el.xpos)-Math.abs(b.xpos-el.xpos):Math.abs(a.ypos-el.ypos)-Math.abs(b.ypos-el.ypos)||Math.abs(a.xpos-el.xpos)-Math.abs(b.xpos-el.xpos));
 return candidates[0]?.number||z;
}
document.querySelector('#periodic').addEventListener('keydown',ev=>{
 const b=ev.target.closest('.element');if(!b||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(ev.key))return;ev.preventDefault();
 const z=+b.dataset.z,next=ev.key==='Home'?1:ev.key==='End'?118:periodicNeighbor(elements,z,ev.key);
 focusPeriodic(next);document.querySelector(`.element[data-z="${next}"]`).scrollIntoView({block:'nearest',inline:'nearest'});
});
document.querySelector('#shareActivity').onclick=async()=>{
 syncClassroomURL();const status=document.querySelector('#shareStatus');
 const note=activeClassroomTab==='kit3d'?' Lenken åpner 3D-byggesettet. Del en lagret modellfil for å dele akkurat det dere har bygget.':activeClassroomTab==='reactions'?' Lenken åpner reaksjonsmodellen med valgt metall fra første steg.':activeClassroomTab==='molecules'||activeClassroomTab==='salts'?' Lenken åpner fanen og eventuell valgt oppgave, ikke de frie byggeendringene.':' Lenken åpner denne aktiviteten med valgt atom eller grunnstoff.';
 try{await navigator.clipboard.writeText(location.href);status.textContent='Lenken er kopiert.'+note;}
 catch{status.textContent='Kopier lenken fra adressefeltet.'+note;}
};
const nextChallengeAction=document.querySelector('#nextChallenge').onclick;
document.querySelector('#nextChallenge').onclick=()=>{nextChallengeAction();syncClassroomURL()};
window.addEventListener('popstate',()=>{if(location.search!==lastClassroomSearch)applyClassroomURL()});
classroomReady=true;applyClassroomURL();filterPeriodic();
