/* Hydroxides: ion assembly is distinct from the metal/water reaction. */
const hydroxideMetals={Na:{name:'natrium',ion:'natriumion',compound:'Natriumhydroksid',cid:14798},Li:{name:'litium',ion:'litiumion',compound:'Litiumhydroksid',cid:3939}};
let hydroxideState={metal:'Na',M:false,O:false,H:false,bond:false,transferred:false,selected:null,history:[]};
function hydroxideComplete(s){return s.M&&s.O&&s.H&&s.bond&&s.transferred}
function hydroxideAction(s,action){
 const next={...s};
 if(['M','O','H'].includes(action)){if(next[action])return null;next[action]=true;}
 else if(action==='bond'){if(!s.O||!s.H||s.bond)return null;next.bond=true;}
 else if(action==='transfer'){if(!s.M||!s.bond||s.transferred)return null;next.transferred=true;}
 else return null;
 next.selected=null;return next;
}
function hydroApply(action){const next=hydroxideAction(hydroxideState,action);if(!next)return;const history=hydroxideState.history.concat([{...hydroxideState,history:[]}]);hydroxideState={...next,history};renderHydroxide();}
function startHydroxide(metal='Na',answer=false){
 hydroxideState={metal,M:answer,O:answer,H:answer,bond:answer,transferred:answer,selected:null,history:[]};
 saltState.mode='hydroxide';saltState.recipe=saltBank.findIndex(s=>s.id===metal.toLowerCase()+'oh');
 renderSalt();document.querySelector('#hydroxideWorkshop').scrollIntoView({block:'start',behavior:'smooth'});
}
function hydroChoose(which){
 const s=hydroxideState;
 if(!s.bond){if(!s.O||!s.H)return;if(s.selected&&s.selected!==which&&['O','H'].includes(which)&&['O','H'].includes(s.selected)){hydroApply('bond');return;}}
 else if(!s.transferred&&s.M){if(s.selected==='M'&&which==='accept'){hydroApply('transfer');return;}}
 s.selected=s.selected===which?null:which;renderHydroxide();
}
function hydroxideVisibility(active){
 document.querySelector('#hydroxideWorkshop').hidden=!active;
 document.querySelector('#salts > .chem-workspace').hidden=active;
}
function renderHydroxide(){
 const s=hydroxideState,info=hydroxideMetals[s.metal],done=hydroxideComplete(s),host=document.querySelector('#hydroxideWorkshop');
 hydroxideVisibility(true);
 document.querySelectorAll('[data-salt-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.saltMode==='hydroxide');b.setAttribute('aria-pressed',String(b.dataset.saltMode==='hydroxide'));});
 document.querySelector('#saltModeNote').textContent='Bygg både elektronparbindingen i OH⁻ og ioneforholdet i hydroksidet.';
 const instruction=!s.O||!s.H||!s.M?'Legg til ett metallatom, ett O-atom og ett H-atom.':!s.bond?'Velg det blå elektronet på O, og så elektronet på H. De blir ett felles elektronpar.':!s.transferred?'Velg metallets blå elektron og deretter den stiplede plassen på O–H-delen.':`Ferdig! ${s.metal}⁺ og OH⁻ gir ${s.metal}OH i forholdet 1:1. Inne i OH⁻ deler O og H ett elektronpar.`;
 const dot=(key,label,content='•')=>`<button class="hydro-dot ${s.selected===key?'chosen':''}" data-hydro-electron="${key}" aria-label="${label}">${content}</button>`;
 host.innerHTML=`<div class="chem-toolbar"><label>Metall <select id="hydroMetal"><option value="Na" ${s.metal==='Na'?'selected':''}>Natrium · NaOH</option><option value="Li" ${s.metal==='Li'?'selected':''}>Litium · LiOH</option></select></label><button id="hydroUndo" ${s.history.length?'':'disabled'}>↶ Angre</button><button id="hydroClear">Start fra bunnen</button><button id="hydroAnswer">Vis ferdig forbindelse</button></div>
 <h3>Bygg ${info.compound.toLowerCase()} fra atomer</h3><p class="note">Dette er elektronbokføring for å bygge forbindelsen, ikke reaksjonsforløpet i vann. O–H-delen er ikke et ferdig hydroksidion før det ekstra elektronet er på plass.</p>
 <div class="hydro-palette">${[['M',s.metal],['O','O'],['H','H']].map(([key,symbol])=>`<button data-hydro-add="${key}" ${s[key]?'disabled':''}>+ Legg til ${symbol}-atom</button>`).join('')}</div>
 <p class="chem-instruction" role="status">${instruction}</p><div class="hydro-board">
 <div class="hydro-metal">${s.M?`<span class="hydro-atom metal">${s.metal}${s.transferred?'<sup>+</sup>':''}</span>${!s.transferred&&s.bond?dot('M','Velg elektronet fra '+info.name):!s.transferred?'<span class="electron-static">•</span>':''}<p>${s.transferred?'Ett elektron avgitt':'Ett valenselektron'}</p>`:'Metallatom'}</div>
 <div class="hydro-group ${s.transferred?'ion-bracket':''}">${s.transferred?'<b class="hydro-charge">−</b>':''}
 <div class="hydro-oxygen">${s.O?`<span class="lone top">••</span><span class="lone bottom">••</span><span class="hydro-atom oxygen">O</span><span class="hydro-accept">${s.transferred?'••':s.bond?dot('accept','Ta imot elektron på O–H-delen','• +'):'•'}</span>`:'O-atom'}</div>
 <div class="hydro-bond">${s.bond?'<span aria-label="Ett delt elektronpar">••<br>O–H-binding</span>':s.O?dot('O','Velg bindingselektronet på O'):''}</div>
 <div class="hydro-hydrogen">${s.H?`<span class="hydro-atom hydrogen">H</span>${!s.bond?dot('H','Velg elektronet på H'):''}`:'H-atom'}</div></div></div>
 <p class="note">${s.O&&s.H?`O–H-delen har ${s.transferred?8:7} valenselektroner totalt. ${s.transferred?'Tre frie elektronpar på O + ett delt par mellom O og H. O har oktett; H har to elektroner i bindingen.':'O bidrar med 6 og H med 1. Det mangler ett elektron for OH⁻.'}`:''}</p>
 <div id="hydroResult">${done?referenceMarkup(saltBank[saltState.recipe],'salt',true):''}</div><button id="hydroReaction">Se hva som skjer med ${info.name} i vann →</button>`;
 host.querySelectorAll('[data-hydro-add]').forEach(b=>b.onclick=()=>hydroApply(b.dataset.hydroAdd));
 host.querySelectorAll('[data-hydro-electron]').forEach(b=>b.onclick=()=>hydroChoose(b.dataset.hydroElectron));
 document.querySelector('#hydroMetal').onchange=ev=>startHydroxide(ev.target.value);
 document.querySelector('#hydroClear').onclick=()=>startHydroxide(s.metal);
 document.querySelector('#hydroAnswer').onclick=()=>startHydroxide(s.metal,true);
 document.querySelector('#hydroUndo').onclick=()=>{const h=s.history.slice(),last=h.pop();if(last){hydroxideState={...last,history:h};renderHydroxide();}};
 document.querySelector('#hydroReaction').onclick=()=>openWaterReaction(s.metal);
 if(typeof syncClassroomURL==='function')syncClassroomURL();
}
function initHydroxide(){
 const host=document.createElement('section');host.id='hydroxideWorkshop';host.hidden=true;host.className='panel hydro-workshop';
 document.querySelector('#salts > .chem-workspace').before(host);
 const mode=document.createElement('button');mode.dataset.saltMode='hydroxide';mode.textContent='Bygg NaOH / LiOH fra atomer';mode.onclick=()=>startHydroxide();document.querySelector('.salt-mode').append(mode);
 const quick=document.createElement('div');quick.className='hydro-shortcuts';quick.innerHTML='<b>Til timen: metall i vann</b><button id="quickNaOH">Bygg NaOH</button><button id="quickLiOH">Bygg LiOH</button><button id="quickReaction">Forklar Na / Li i vann →</button>';
 document.querySelector('.salt-mode').before(quick);
 document.querySelector('#quickNaOH').onclick=()=>startHydroxide('Na');document.querySelector('#quickLiOH').onclick=()=>startHydroxide('Li');document.querySelector('#quickReaction').onclick=()=>openWaterReaction('Na');
}
