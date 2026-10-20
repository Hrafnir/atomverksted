/* Reaction stages explain electron bookkeeping; not a molecular mechanism or a timed experiment. */
const waterReaction={metal:'Na',step:0,timer:null};
function waterReactionInventory(metal,step){
 if(step===0)return [{formula:metal,count:2,atoms:{[metal]:1},charge:0},{formula:'H2O',count:2,atoms:{H:2,O:1},charge:0}];
 if(step===1)return [{formula:metal+'+',count:2,atoms:{[metal]:1},charge:1},{formula:'e−',count:2,atoms:{},charge:-1},{formula:'H2O',count:2,atoms:{H:2,O:1},charge:0}];
 return [{formula:metal+'+',count:2,atoms:{[metal]:1},charge:1},{formula:'OH−',count:2,atoms:{O:1,H:1},charge:-1},{formula:'H2',count:1,atoms:{H:2},charge:0}];
}
function stopWaterReaction(){if(waterReaction.timer){clearInterval(waterReaction.timer);waterReaction.timer=null;}const b=document.querySelector('#reactionPlay');if(b)b.textContent='▶ Spill av';}
function openWaterReaction(metal){stopWaterReaction();waterReaction.metal=metal;waterReaction.step=0;tab('reactions');renderWaterReaction();document.querySelector('#reactions').scrollIntoView({block:'start',behavior:'smooth'});}
function reactionCircle(x,y,symbol,color,r=25){return `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="#668779" stroke-width="2"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="19" fill="#183c3a">${symbol}</text></g>`;}
function waterReactionDrawing(metal,step){
 const atom=reactionCircle;let parts='';
 const water=(x,y,final)=>`<g><line x1="${x}" y1="${y}" x2="${x-43}" y2="${y-36}" stroke="#537a6d" stroke-width="4"/>${!final?`<line x1="${x}" y1="${y}" x2="${x+43}" y2="${y-36}" stroke="#537a6d" stroke-width="4"/>`:''}${atom(x,y,'O','#f3b3a4')}${atom(x-43,y-36,'H','#f8faf3',19)}${!final?atom(x+43,y-36,'H','#f8faf3',19):`<path d="M${x-70},${y-65}v100h${110}v-100" fill="none" stroke="#347aa3" stroke-width="2"/><text x="${x+50}" y="${y-45}" font-size="25">−</text>`}</g>`;
 parts+=`<rect x="16" y="95" width="748" height="240" rx="22" fill="#e7f3f6"/><text x="38" y="320" fill="#4e767e" font-size="14">Vann rundt partiklene (de fleste vannmolekylene er utelatt)</text>`;
 if(step<2){
 parts+=atom(130,145,metal+(step?'⁺':''),'#eed1a8',32)+atom(130,245,metal+(step?'⁺':''),'#eed1a8',32)+water(420,150,false)+water(620,245,false);
 if(step===1)parts+='<path d="M175 145 Q280 90 340 140 M175 245 Q360 310 530 245" stroke="#2782b4" stroke-width="3" fill="none" stroke-dasharray="8 6"/><text x="260" y="112" font-size="21" fill="#2782b4">e⁻ →</text><text x="335" y="275" font-size="21" fill="#2782b4">e⁻ →</text>';
 }else{
 parts+=atom(135,155,metal+'⁺','#eed1a8',32)+atom(560,255,metal+'⁺','#eed1a8',32)+water(330,210,true)+water(660,170,true);
 parts+='<g class="reaction-hydrogen"><line x1="455" y1="48" x2="495" y2="48" stroke="#537a6d" stroke-width="4"/>'+atom(455,48,'H','#f8faf3',19)+atom(495,48,'H','#f8faf3',19)+'<text x="540" y="54" font-size="16">H₂(g) ↑ hydrogen</text></g>';
 }
 return `<svg viewBox="0 0 780 350" role="img" aria-label="${step<2?'To metallatomer og to vannmolekyler'+(step===1?', med to elektroner som regnskap':''):'To positive metallioner og to hydroksidioner i vann, og ett hydrogenmolekyl som gass'}">${parts}</svg>`;
}
function renderWaterReaction(){
 const s=waterReaction,m=s.metal,info=hydroxideMetals[m],host=document.querySelector('#reactions');
 const steps=[
 ['Før reaksjonen',`Vi følger 2 ${info.name}atomer og 2 vannmolekyler. Vannet er H₂O: hydrogenatomene er bundet til oksygen. Metallet har ett valenselektron per atom.`],
 ['Metallet avgir elektroner',`Hvert ${info.name}atom avgir ett elektron og blir ${m}⁺. Totalt overføres to elektroner til reaksjonen med vann. Pilene og e⁻ viser elektronregnskapet, ikke frie elektroner som samles opp i vannet.`],
 ['Vann reduseres – hydrogen dannes','To vannmolekyler tar samlet opp to elektroner og gir ett H₂-molekyl og to OH⁻-ioner. Hydrogen i vann går fra oksidasjonstall +I til 0 i H₂. Oksygen forblir −II. O og ett H er fortsatt bundet sammen i hvert hydroksidion.'],
 ['Etter reaksjonen: basisk løsning',`I løsningen er ${m}⁺ og OH⁻ adskilte, hydratiserte ioner – omgitt av vannmolekyler. OH⁻ gjør løsningen basisk. ${m}OH(aq) er en kort skrivemåte for den oppløste forbindelsen; dette er ikke små ${m}OH-molekyler. Hydrogenet kan forlate løsningen som gass.`]
 ];
 host.innerHTML=`<div class="chem-title"><div><p class="eyebrow">05 / FØLG ATOMENE OG ELEKTRONENE</p><h2>Natrium og litium i vann</h2><p>Samme reaksjonstype. To ulike metaller.</p></div></div>
 <div class="reaction-controls"><label>Velg metall <select id="reactionMetal"><option value="Na" ${m==='Na'?'selected':''}>Natrium · Na</option><option value="Li" ${m==='Li'?'selected':''}>Litium · Li</option></select></label><button id="reactionBack" ${s.step===0?'disabled':''}>← Forrige steg</button><button id="reactionNext" ${s.step===3?'disabled':''}>Neste steg →</button><button id="reactionPlay">${s.timer?'⏸ Pause':'▶ Spill av'}</button><button id="reactionReset">Start på nytt</button></div>
 <ol class="reaction-steps">${steps.map(([title],i)=>`<li><button data-reaction-step="${i}" aria-current="${i===s.step?'step':'false'}">${i+1}. ${title}</button></li>`).join('')}</ol>
 <div class="reaction-equation">2 ${m}(s) + 2 H₂O(l) → 2 ${m}⁺(aq) + 2 OH⁻(aq) + H₂(g)</div>
 <p class="note">Også skrevet: 2 ${m} + 2 H₂O → 2 ${m}OH + H₂. (s) = fast stoff, (l) = væske, (aq) = løst i vann, (g) = gass.</p>
 <div class="reaction-layout"><div class="panel reaction-scene">${waterReactionDrawing(m,s.step)}<p class="note">Forenklet partikkelmodell. Tegningene viser regnskap og sluttprodukter, ikke reaksjonens faktiske mellomtrinn, romlige struktur eller hastighet.</p></div><section class="panel reaction-explanation" aria-live="polite"><p class="eyebrow">STEG ${s.step+1} AV 4</p><h3>${steps[s.step][0]}</h3><p>${steps[s.step][1]}</p><p><b>Metallet oksideres</b><br>2 ${m} → 2 ${m}⁺ + 2 e⁻</p><p><b>Vann reduseres</b><br>2 H₂O + 2 e⁻ → H₂ + 2 OH⁻</p></section></div>
 <div class="reaction-account panel"><h3>Ingenting forsvinner</h3><table><thead><tr><th>Vi teller</th><th>Før</th><th>Etter</th></tr></thead><tbody><tr><td>${m}-atomer</td><td>2</td><td>2</td></tr><tr><td>O-atomer</td><td>2</td><td>2</td></tr><tr><td>H-atomer</td><td>4</td><td>4: to i H₂ og to i OH⁻</td></tr><tr><td>Total ladning</td><td>0</td><td>2 × (+1) + 2 × (−1) = 0</td></tr></tbody></table><p>To elektroner avgis og to tas opp. De strykes når halvreaksjonene legges sammen.</p></div>
 <div class="reaction-observations"><section class="panel"><h3>Koble modellen til det dere ser</h3><ul><li>Gassbobler: hydrogen, H₂.</li><li>Metallet forbrukes: metallatomene blir løste ioner.</li><li>Reaksjonen frigir varme.</li><li>Løsningen blir basisk fordi mengden OH⁻ øker. En egnet syre–base-indikator kan gjøre dette synlig; selve hydroksidløsningen er fargeløs.</li></ul><p>Modellen beregner ikke temperatur, pH eller reaksjonsfart.</p></section><section class="panel"><h3>Hva er likt – og hva er forskjellig?</h3><p>Både litium og natrium er alkalimetaller med ett valenselektron. Begge gir metallioner med ladning +1, hydroksidioner og hydrogen.</p><p>Natrium reagerer vanligvis mer livlig med vann enn litium under sammenlignbare forhold. Reaksjonsfart og smeltepunkt påvirker det synlige forløpet; animasjonen bruker samme pedagogiske tempo for begge.</p><button id="reactionBuild">Bygg ${m}OH fra atomer →</button></section></div>
 <details><summary>Spørsmål til klassen og kilder</summary><p>Hvor kommer hydrogenet i gassen fra? Hvorfor trengs to vannmolekyler? Hva betyr OH⁻? Hvorfor er løsningen elektrisk nøytral selv om den inneholder ladde ioner?</p><p><a href="https://edu.rsc.org/lesson-plans/how-do-alkali-metals-react-with-water-14-16-years/89.article" target="_blank" rel="noreferrer">RSC: Alkalimetaller og vann</a> · <a href="https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions" target="_blank" rel="noreferrer">OpenStax: Reaksjoner og baser</a></p></details>`;
 const go=step=>{stopWaterReaction();s.step=step;renderWaterReaction();};
 host.querySelectorAll('[data-reaction-step]').forEach(b=>b.onclick=()=>go(+b.dataset.reactionStep));
 document.querySelector('#reactionMetal').onchange=ev=>{s.metal=ev.target.value;go(0);};document.querySelector('#reactionBack').onclick=()=>go(Math.max(0,s.step-1));document.querySelector('#reactionNext').onclick=()=>go(Math.min(3,s.step+1));document.querySelector('#reactionReset').onclick=()=>go(0);
 document.querySelector('#reactionPlay').onclick=()=>{if(s.timer){stopWaterReaction();return;}if(s.step===3)s.step=0;s.timer=setInterval(()=>{if(document.hidden||document.querySelector('#reactions').hidden){stopWaterReaction();return;}s.step++;if(s.step>=3){s.step=3;stopWaterReaction();}renderWaterReaction();},3500);renderWaterReaction();};
 document.querySelector('#reactionBuild').onclick=()=>{tab('salts');startHydroxide(m);};
 if(typeof syncClassroomURL==='function')syncClassroomURL();
}
initHydroxide();renderWaterReaction();
