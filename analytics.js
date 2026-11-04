/* Analytics loads only after consent, and never for excluded browsers. */
(() => {
'use strict';
const id='G-STYYQX9K4K', ownerKey='nb-analytics-excluded', consentKey='nb-analytics-consent';
const read=k=>{try{return localStorage.getItem(k);}catch{return null;}};
const write=(k,v)=>{try{localStorage.setItem(k,v);return true;}catch{return false;}};
let excluded=read(ownerKey)==='1';
const url=new URL(location.href);
if(url.searchParams.get('analytics')==='off'){
 excluded=true;
 const saved=write(ownerKey,'1');
 window.addEventListener('DOMContentLoaded',()=>alert(saved?'Tes visites sont exclues des statistiques sur ce navigateur.':'Visite exclue, mais le navigateur ne permet pas de mémoriser ce choix. Utilise le lien d’exclusion à chaque visite.'));
 url.searchParams.delete('analytics');history.replaceState(null,'',url.pathname+url.search+url.hash);
}
window['ga-disable-'+id]=excluded;
let started=false;
function start(){
 if(excluded)return;
 window['ga-disable-'+id]=false;
 if(started){gtag('consent','update',{analytics_storage:'granted'});return;}
 started=true;
 window.dataLayer=window.dataLayer||[];
 window.gtag=function(){window.dataLayer.push(arguments);};
 gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 gtag('js',new Date());
 gtag('config',id,{allow_google_signals:false,allow_ad_personalization_signals:false,page_location:location.origin+location.pathname,cookie_path:'/Naoufal-Berquecha-Portfolio/',cookie_expires:15552000});
 const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.appendChild(s);
}
function savedConsent(){try{const c=JSON.parse(read(consentKey));return c&&Date.now()-c.at<15552000000?c.value:null;}catch{return null;}}
function init(){
 const box=document.createElement('section');box.setAttribute('aria-label','Préférences de statistiques');
 box.style.cssText='position:fixed;bottom:16px;left:16px;right:16px;max-width:660px;z-index:100;background:white;color:#073580;border:1px solid #a8c6e7;padding:20px;box-shadow:0 4px 24px #07358022;font-size:16px';
 box.innerHTML='<p>Autoriser les statistiques de visite ?</p><p style="font-size:14px">Google Analytics utilise des cookies pour mesurer la fréquentation et les interactions sur ce portfolio. Les données sont transmises à Google. Refuser ne change pas votre accès au site. Vous pouvez modifier ce choix à tout moment.</p><a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Confidentialité Google</a><div style="display:flex;gap:16px;margin-top:12px"><button type="button" data-choice="yes">Accepter</button><button type="button" data-choice="no">Refuser</button></div>';
 box.querySelectorAll('button').forEach(b=>{b.style.cssText='padding:10px 20px;border:1px solid #073580;background:white;color:#073580';b.onclick=()=>{
 const yes=b.dataset.choice==='yes';write(consentKey,JSON.stringify({value:yes?'yes':'no',at:Date.now()}));box.hidden=true;
 if(yes)start();else{
 window['ga-disable-'+id]=true;
 if(started)gtag('consent','update',{analytics_storage:'denied'});
 document.cookie.split(';').forEach(c=>{const n=c.split('=')[0].trim();if(n==='_ga'||n.startsWith('_ga_'))for(const path of ['/','/Naoufal-Berquecha-Portfolio/'])for(const domain of ['', ';domain='+location.hostname])document.cookie=n+'=;max-age=0;path='+path+domain;});
 }
 };});
 document.body.appendChild(box);
 const toggle=document.createElement('button');toggle.type='button';toggle.textContent='Préférences de statistiques';toggle.onclick=()=>{box.hidden=false;box.querySelector('button').focus();};
 (document.querySelector('footer')||document.body).appendChild(toggle);
 box.hidden=excluded||savedConsent()!==null;
 if(!excluded&&savedConsent()==='yes')start();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();