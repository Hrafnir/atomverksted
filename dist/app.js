const $=s=>document.querySelector(s);let p=0,n=0,e=0,selected=1,challenge=0;
const cats={ 'diatomic nonmetal':['Ikke-metall','#cce7cd'],'polyatomic nonmetal':['Ikke-metall','#cce7cd'],'noble gas':['Edelgass','#d8d8ee'],'alkali metal':['Alkalimetall','#f4cfb6'],'alkaline earth metal':['Jordalkalimetall','#eee2ae'],'transition metal':['Overgangsmetall','#cedfe5'],'post-transition metal':['Andre metaller','#cbded6'],'metalloid':['Halvmetall','#e5e8ba'],'lanthanide':['Lantanoid','#e9d6c7'],'actinide':['Aktinoid','#e7ced9']};
function category(el){return cats[el.category]||['Ukjent kategori','#e2e3df']}
function shellCounts(z,count){return atomShellDistribution(elements,z,count)}
const parts=[['p','Protoner','Bestemmer grunnstoffet','+',118],['n','Nøytroner','Bestemmer isotopen','0',200],['e','Elektroner','Bestemmer ladningen','−',118]];
$('#controls').innerHTML=parts.map(([k,name,help,sign,max])=>`<div class="particle"><div class="particle-top"><span class="dot ${k}">${sign}</span><div><b>${name}</b><small>${help}</small></div></div><div class="stepper"><button data-key="${k}" data-delta="-1" aria-label="Fjern ett ${name.toLowerCase().slice(0,-2)}">−</button><input id="count-${k}" aria-label="Antall ${name.toLowerCase()}" type="number" min="0" max="${max}" value="0"><button data-key="${k}" data-delta="1" aria-label="Legg til ett ${name.toLowerCase().slice(0,-2)}">+</button></div></div>`).join('');
function get(k){return k==='p'?p:k==='n'?n:e}function set(k,v){if(k==='p')p=v;else if(k==='n')n=v;else e=v;render()}
parts.forEach(([k,,,s,max])=>{$('#count-'+k).addEventListener('input',ev=>set(k,Math.max(0,Math.min(max,Math.trunc(Number(ev.target.value)||0)))))});
document.querySelectorAll('[data-delta]').forEach(b=>b.onclick=()=>set(b.dataset.key,get(b.dataset.key)+Number(b.dataset.delta)));
function svgEl(t,a,content=''){return `<${t} ${Object.entries(a).map(([k,v])=>`${k}="${v}"`).join(' ')}>${content}</${t}>`}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let model='shell', paused=reducedMotion.matches, speed=1, motionTime=0, lastFrame=null, animationFrame=null;
let movingGroups=[], cloudGroups=[];
const modelText={
 shell:['Skallmodellen: elektroner i baner','I denne Bohr-inspirerte modellen beveger elektronene seg i sirkler rundt kjernen. Skallene gjør det lett å telle elektroner. Virkelige elektroner har ikke slike bestemte baner.'],
 cloud:['Elektronskyen: hvor kan vi finne elektronet?','Prikkene viser mulige funnsteder fra mange tenkte målinger. Nye prikker dukker opp uten å tegne en bane. Mange prikker betyr ikke mange elektroner. Skyen er skjematisk, ikke en beregning av atomets orbitaler.']
};
function electronLayer(shells){
 let out='';
 const radii=shells.map((_,i)=>shells.length<=3?100+i*49:73+i*137/Math.max(1,shells.length-1));
 if(model==='shell'){
  shells.forEach((num,i)=>{const r=radii[i];out+=svgEl('circle',{cx:280,cy:245,r,fill:'none',stroke:'#b8cdbb','stroke-width':1.4});let dots='';for(let j=0;j<num;j++){const a=2*Math.PI*j/num-Math.PI/2+i*.21;dots+=svgEl('circle',{cx:280+r*Math.cos(a),cy:245+r*Math.sin(a),r:6,fill:'#5295c3',stroke:'#fff','stroke-width':2})}out+=svgEl('g',{'class':'orbit-electrons','data-shell':i},dots)});
 }else if(e){
  // A bounded, illustrative radial distribution. Not an orbital calculation.
  // Four independent point samples cross-fade; no electron trajectories are drawn.
  let seed=p*1009+n*17+e*71+1;
  const random=()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return (seed+.5)/4294967296};
  const radius=Math.min(210,100+Math.max(0,shells.length-1)*24);
  out+='<defs><radialGradient id="cloudGlow"><stop offset="0" stop-color="#5295c3" stop-opacity=".16"/><stop offset="1" stop-color="#5295c3" stop-opacity="0"/></radialGradient></defs>';
  out+=svgEl('circle',{cx:280,cy:245,r:radius+22,fill:'url(#cloudGlow)'});
  for(let layer=0;layer<4;layer++){let dots='';for(let j=0;j<160;j++){const a=random()*Math.PI*2;const r=radius*Math.sqrt(random()*random());dots+=svgEl('circle',{cx:280+Math.cos(a)*r,cy:245+Math.sin(a)*r,r:1.4+random()*1.5,fill:'#498ebf',opacity:.35+random()*.55})}out+=svgEl('g',{'class':'cloud-sample','data-layer':layer},dots)}
 }
 return out;
}
function paintMotion(){
 movingGroups.forEach((group,i)=>group.setAttribute('transform',`rotate(${motionTime*28/(1+i*.28)} 280 245)`));
 cloudGroups.forEach((group,i)=>group.setAttribute('opacity',String(.1+.7*((1+Math.cos(motionTime*1.5+i*Math.PI/2))/2)**3)));
}
function syncMotion(){
 movingGroups=[...document.querySelectorAll('.orbit-electrons')];cloudGroups=[...document.querySelectorAll('.cloud-sample')];
 $('#modelTitle').textContent=modelText[model][0];$('#modelExplanation').textContent=modelText[model][1];
 $('#electronLegend').textContent=model==='cloud'?'Mulige funnsteder':'Elektron −';
 $('#motionToggle').textContent=paused?'▶ Spill av':'⏸ Pause';$('#motionToggle').setAttribute('aria-pressed',String(paused));
 $('#motionToggle').disabled=!e;$('#speed').disabled=!e;
 $('#motionHint').textContent=!e?'Legg til elektroner for å se animasjonen.':!p?'Uten protoner finnes ingen atomkjerne. Dette er bare en illustrasjon.':`${e} elektron${e===1?'':'er'} · ${paused?'Animasjonen er satt på pause.':'Tempoet er valgt for visning, ikke fysisk fart.'} Ikke i målestokk.`;
 paintMotion();scheduleMotion();
}
function scheduleMotion(){
 if(animationFrame!==null)cancelAnimationFrame(animationFrame);animationFrame=null;lastFrame=null;
 if(!paused&&e&&!document.hidden&&!$('#build').hidden)animationFrame=requestAnimationFrame(animateElectrons);
}
function animateElectrons(now){
 if(lastFrame!==null)motionTime+=Math.min((now-lastFrame)/1000,.1)*speed;
 lastFrame=now;paintMotion();animationFrame=requestAnimationFrame(animateElectrons);
}
$('#model').addEventListener('change',ev=>{model=ev.target.value;draw(shellCounts(p,e))});
$('#motionToggle').onclick=()=>{paused=!paused;syncMotion()};
$('#speed').addEventListener('change',ev=>{speed=Number(ev.target.value)});
reducedMotion.addEventListener('change',ev=>{if(ev.matches){paused=true;syncMotion()}});
document.addEventListener('visibilitychange',scheduleMotion);
function draw(shells){let out=electronLayer(shells);const cx=280,cy=245;let total=p+n;if(total){const shown=Math.min(total,80),rad=total<=20?8:4.8;for(let j=0;j<shown;j++){let a=j*2.39996,r=Math.sqrt(j)* (total<=20?12:5.5),isP=Math.floor((j+1)*p/total)>Math.floor(j*p/total);out+=svgEl('circle',{cx:cx+r*Math.cos(a),cy:cy+r*Math.sin(a),r:rad,fill:isP?'#ef8268':'#d9b659',stroke:'#fff','stroke-width':1});if(total<=20)out+=svgEl('text',{x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)+3,'text-anchor':'middle',fill:'#533e30','font-size':9},isP?'+':'0')}if(total>80)out+=svgEl('text',{x:cx,y:cy+66,'text-anchor':'middle',fill:'#537063','font-size':12},`${p} p⁺ · ${n} n`)}else{out+=svgEl('circle',{cx,cy,r:46,fill:'none',stroke:'#b4c5b5','stroke-dasharray':'4 5'});out+=svgEl('text',{x:cx,y:cy+4,'text-anchor':'middle',fill:'#778b7c','font-size':12},'Start med et proton')}
$('#atom').innerHTML=out; syncMotion();$('#atom').setAttribute('aria-label',`${model==='cloud'?'Skjematisk sannsynlighetssky':'Animert skallmodell'}. ${p} protoner, ${n} nøytroner, ${e} elektroner. Skall: ${shells.join(', ')||'ingen'}.`)}
function render(){parts.forEach(([k,,,s,max])=>{$('#count-'+k).value=get(k);document.querySelector(`[data-key="${k}"][data-delta="-1"]`).disabled=get(k)===0;document.querySelector(`[data-key="${k}"][data-delta="1"]`).disabled=get(k)===max});const el=elements[p-1],q=p-e,charge=q>0?'+'+q:String(q),shells=shellCounts(p,e);$('#state').textContent=!p?'Ingen atomkjerne':q===0?'Nøytralt atom':q>0?'Positivt ion':'Negativt ion';$('#neutral').disabled=!p;$('#identity').innerHTML=`<div class="identity-tile"><div class="symbol"><span class="isotope-symbol">${el?el.symbol:'?'}${el?`<small>${p+n}</small><small>${p}</small>`:''}</span></div><h2>${el?el.name:'Ditt første atom'}</h2><p>${el?`${el.name}-${p+n}${q?' · ion':''}`:'Legg til protoner for å begynne'}</p></div><div class="stats"><div class="stat"><b>${p+n}</b><span>Massetall · p + n</span></div><div class="stat"><b>${charge}</b><span>Ladning · p − e</span></div></div>`;
$('#explanation').innerHTML=el?`<div class="explain"><p><b>${p} proton${p===1?'':'er'} → ${el.name.toLowerCase()}.</b><br>Antall protoner bestemmer hvilket grunnstoff dette er.</p><p>${n} nøytron${n===1?'':'er'} gir massetallet ${p+n}. Du har laget isotopen <b>${el.name.toLowerCase()}-${p+n}</b>.</p><p>${q===0?'Like mange protoner og elektroner: Atomet er <b>nøytralt</b>.':`${e} elektroner og ${p} protoner gir ladning <b>${charge}</b>. Dette er et ${q>0?'positivt':'negativt'} ion.`}</p><p><b>Elektroner i skall</b><br>${shells.join(' · ')||'Ingen elektroner'}${q?`<br><small>${knownIonShells(p,e)?'Skallfordeling for dette ionet.':'Skjematisk fordeling – ikke en beregnet grunntilstand.'}</small>`:''}</p><p class="note">Modellen viser sammensetningen, ikke om kjernen er stabil eller kan eksistere.${p+n>80?' Kjernen er vist med et utvalg partikler.':''}</p></div>`:`<div class="explain"><p>Et grunnstoff trenger minst <b>ett proton</b> i kjernen.</p><p>Legg til partikler med knappene til venstre, og se hva du bygger.</p>${n||e?'<p>Nøytroner og elektroner alene danner ikke et atom.</p>':''}</div>`;draw(shells);updateBuildFacts(p);updateAtomLearning();if(typeof syncClassroomURL==='function')syncClassroomURL()}
$('#reset').onclick=()=>{p=n=e=0;render()};$('#neutral').onclick=()=>{e=p;render()};
function tab(name){document.querySelectorAll('.tab').forEach(b=>{b.classList.toggle('active',b.dataset.tab===name);b.setAttribute('aria-current',b.dataset.tab===name?'page':'false')});['build','table','molecules','salts','reactions'].forEach(id=>$('#'+id).hidden=id!==name);scheduleMotion();if(typeof updateClassroomTab==='function')updateClassroomTab(name)}document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>tab(b.dataset.tab));
$('#nextChallenge').onclick=()=>{challenge=(challenge+1)%atomTasks.length;updateAtomLearning()};
$('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{$('#fullscreen').textContent='Bruk nettleserens fullskjerm'}};
let grid=Array.from({length:18},(_,i)=>`<span class="group" style="grid-column:${i+1};grid-row:1">${i+1}</span>`).join('');elements.forEach(el=>{const row=el.ypos+1;grid+=`<button class="element" data-z="${el.number}" style="grid-column:${el.xpos};grid-row:${row};--cat:${category(el)[1]}" aria-label="${el.number} ${el.name}, ${el.symbol}"><span class="z">${el.number}</span><strong>${el.symbol}</strong><span class="name">${el.name}</span></button>`});grid+='<button class="series-link" data-series="57" style="grid-column:3;grid-row:7" aria-label="Gå til lantanoidene, 57 til 71">57–71 ↓</button><button class="series-link" data-series="89" style="grid-column:3;grid-row:8" aria-label="Gå til aktinoidene, 89 til 103">89–103 ↓</button>';$('#periodic').innerHTML=grid;
$('#categoryLegend').innerHTML=[...new Map(Object.values(cats).map(v=>[v[0],v])).values(),['Ukjent kategori','#e2e3df']].map(([name,color])=>`<span><i style="--cat:${color}"></i>${name}</span>`).join('');
function select(z){selected=z;renderFactCard($('#tableFacts'),z); const el=elements[z-1];document.querySelectorAll('.element').forEach(b=>{b.classList.toggle('selected',Number(b.dataset.z)===z);b.tabIndex=Number(b.dataset.z)===z?0:-1;b.setAttribute('aria-pressed',Number(b.dataset.z)===z?'true':'false')});$('#elementDetail').innerHTML=`<div class="detail-symbol" style="--cat:${category(el)[1]}">${el.symbol}</div><div><p class="eyebrow">${category(el)[0].toUpperCase()} · PERIODE ${el.period}${el.group?' · GRUPPE '+el.group:''}</p><h2>${el.name}</h2><div class="detail-facts"><span><b>${z}</b>Atomnummer</span><span><b>${Number(el.atomic_mass.toFixed(3)).toLocaleString('nb-NO')}</b>Atommasse (u)*</span><span><b>${el.shells.join(' · ')}</b>Elektroner i skall (nøytralt)</span></div><p class="note">*For radioaktive grunnstoffer kan tallet vise massetallet til en valgt isotop.</p><p class="note">«Bygg» bruker ${defaultMass(z)-z} nøytroner (${el.name}-${defaultMass(z)}). Se isotopene nedenfor.</p></div><button id="loadElement">Bygg dette atomet →</button>`;if(typeof syncClassroomURL==='function')syncClassroomURL();$('#loadElement').onclick=()=>{p=z;n=defaultMass(z)-z;e=z;render();tab('build');window.scrollTo({top:0,behavior:'smooth'})}}
document.querySelectorAll('.element').forEach(b=>b.onclick=()=>select(Number(b.dataset.z)));$('#search').addEventListener('input',ev=>{let q=ev.target.value.trim().toLocaleLowerCase('nb'),count=0;document.querySelectorAll('.element').forEach(b=>{let el=elements[Number(b.dataset.z)-1],match=!q||el.name.toLocaleLowerCase('nb').includes(q)||el.symbol.toLowerCase()===q||String(el.number)===q;b.classList.toggle('dim',!match);if(match)count++});$('#matches').textContent=q?`${count} treff. Treffene er fremhevet i periodesystemet.`:'118 grunnstoffer · Rull sidelengs på små skjermer.'});$('#search').dispatchEvent(new Event('input'));render();select(1);
