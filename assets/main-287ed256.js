(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();async function L(){const n=await fetch("/data.json");if(!n.ok)throw new Error(`Failed to load data: ${n.status}`);return n.json()}function $(n){document.title=n;const r=document.querySelector("header h1");console.log("base URL:","/"),r.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo" onclick="window.location.href='https://olgas-kitchen.de'" style="cursor:pointer;"> <span onclick="window.location.href='https://olgas-kitchen.de'" style="cursor:pointer;">${n}</span>`}function E(n,r=[]){const o=document.querySelector("nav ul");if(o.innerHTML="",n.forEach(e=>{const i=document.createElement("li"),a=document.createElement("a");a.href=e.href,a.textContent=e.text,i.appendChild(a),o.appendChild(i)}),r.length){let b=function(c){g.innerHTML="";const p=document.createElement("img");p.src=`/${c.icon}`,p.alt=c.code,p.width=32,p.height=24,g.appendChild(p);const l=document.createElement("span");l.textContent=" "+c.code.toUpperCase(),l.style.fontWeight="bold",l.style.marginLeft="0.5em",g.appendChild(l)},m=function(){f.innerHTML="",r.filter(c=>c.code!==s.code).forEach(c=>{const p=document.createElement("li"),l=document.createElement("a");l.href=c.href,l.style.display="flex",l.style.alignItems="center";const h=document.createElement("img");h.src=`/${c.icon}`,h.alt=c.code,h.width=32,h.height=24,l.appendChild(h);const d=document.createElement("span");d.textContent=" "+c.code.toUpperCase(),d.style.fontWeight="bold",d.style.marginLeft="0.5em",l.appendChild(d),l.addEventListener("click",y=>{y.preventDefault(),s=c,b(s),m(),f.classList.add("hidden"),window.location.search!==c.href&&(window.location.search=c.href)}),p.appendChild(l),f.appendChild(p)})};var u=b,t=m;const e=document.createElement("li");e.classList.add("language-selector");const a=new URLSearchParams(window.location.search).get("lang");let s=r.find(c=>c.code===(a?a.toLowerCase():"de"))||r[0];const g=document.createElement("button");g.type="button",g.classList.add("lang-button"),b(s),e.appendChild(g);const f=document.createElement("ul");f.classList.add("lang-dropdown","hidden"),m(),e.appendChild(f),o.appendChild(e),g.addEventListener("click",c=>{c.stopPropagation(),f.classList.toggle("hidden")}),window._langDropdownListener&&document.removeEventListener("click",window._langDropdownListener),window._langDropdownListener=function(c){e.contains(c.target)||f.classList.add("hidden")},document.addEventListener("click",window._langDropdownListener)}}function x(n){const r=document.getElementById("home");r.innerHTML=`
    <h2>${n.heading}</h2>
    <p>${n.text}</p>
    <a href="${n.button.href}" class="btn">${n.button.text}</a>
  `}const w="1.0.5";console.log("Version:",w);function S(n){const r=document.querySelector(".products");r.innerHTML="",n.forEach(o=>{const u=document.createElement("div");u.className="product",u.dataset.images=JSON.stringify(o.images),u.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${o.images[0].overlayText}</div>
        <img
          class="product-image"
          src="/${o.images[0].src}?v=${w}"
          alt="${o.name}"
          loading="lazy"
        >
      </div>
      <div class="product-header">
        <h3>${o.name}</h3>
        <button
          class="btn expand"
          aria-expanded="false"
          aria-controls="details-${o.id}"
          aria-label="Mehr Infos zu ${o.name}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <p>${o.description}</p>
      <div id="details-${o.id}" class="product-details" hidden>
        <h4>Packungsinhalt</h4>
        <p>${o.details.packung}</p>
        <h4>Zubereitung</h4>
        <p>${o.details.zubereitung.join("<br>")}</p>
        <h4>Serviervorschläge</h4>
        <p>${o.details.serviervorschlaege}</p>
        <h4>Nährwerte (100 g)</h4>
        <p>${o.details.naehrwerte}</p>
        <h4>Allergene</h4>
        <p><strong>Enthält:</strong> ${o.allergens.join(", ")}</p>
      </div>
    `,r.appendChild(u);const t=o.images,e=u.querySelector("img.product-image"),i=u.querySelector("div.product-overlay");let a=0;const s=u.querySelector(".product-image-wrapper");if(t.length>1){let m=function(){const{src:d,overlayText:y}=t[a];e.src=`/${d}?v=${w}`,i.textContent=y},p=function(){clearInterval(c),c=setInterval(()=>{a=(a+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{m(),e.style.opacity="1",i.style.opacity="1"},200)},4e3)},l=function(){clearInterval(c),setTimeout(p,8e3)};var g=m,b=p,f=l;e.style.opacity="1",e.style.transition="opacity 0.3s ease-in-out",i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out";let c;p(),s.addEventListener("click",d=>{d.stopPropagation();const y=s.getBoundingClientRect();d.clientX-y.left<y.width/2?a=(a-1+t.length)%t.length:a=(a+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{m(),e.style.opacity="1",i.style.opacity="1"},200),l()});let h=null;s.addEventListener("touchstart",d=>{h=d.changedTouches[0].clientX}),s.addEventListener("touchend",d=>{if(h===null)return;const v=d.changedTouches[0].clientX-h;Math.abs(v)>30&&(v>0?a=(a-1+t.length)%t.length:a=(a+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{m(),e.style.opacity="1",i.style.opacity="1"},200),l()),h=null}),s.addEventListener("pointerdown",d=>{h=d.clientX}),s.addEventListener("pointerup",d=>{if(h===null)return;const v=d.clientX-h;Math.abs(v)>30&&(v>0?a=(a-1+t.length)%t.length:a=(a+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{m(),e.style.opacity="1",i.style.opacity="1"},200),l()),h=null})}else s.classList.add("single-image")})}function k(n){const r=document.getElementById("bestellen");r.innerHTML=`
    <h2>${n.heading}</h2>
    <div class="process">
      ${n.steps.map(o=>`<div class="step"><h3>${o.icon} ${o.title}</h3><p>${o.text}</p></div>`).join("")}
    </div>
    <a href="${n.button.href}" class="btn btn-order"${n.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${n.button.text}
    </a>
  `}function C(n){const r=document.getElementById("feedback");r.innerHTML=`
    <h2>${n.heading}</h2>
    <p>${n.text}</p>
    <a href="${n.button.href}" class="btn"${n.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${n.button.text}
    </a>
  `}function T(n){const r=document.getElementById("kontakt");r.innerHTML=`
    <h2>${n.heading}</h2>
    <p>${n.text.replace(/\n/g,"<br>")}</p>
    <a href="${n.button.href}" class="btn-whatsapp"${n.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${n.button.ariaLabel}">
      ${n.button.text}
    </a>
  `}function q(n){const r=document.querySelector("footer");r.innerHTML=`
    ${n.text}<br>
    <a href="${n.backToTop.href}">${n.backToTop.text}</a>
  `}function P(){const n=document.querySelector(".menu-toggle"),r=document.querySelector("nav");n.addEventListener("click",()=>{const t=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!t)),r.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("aria-controls"),i=document.getElementById(e),a=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(s=>{s.hasAttribute("hidden")||(s.setAttribute("hidden",""),document.querySelector(`[aria-controls="${s.id}"]`).setAttribute("aria-expanded","false"))}),a?(i.removeAttribute("hidden"),t.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(t=>{t.addEventListener("click",e=>{e.target.closest("button.expand")||t.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const i=t.getAttribute("href"),a=document.querySelector(i),s=document.querySelector("header").offsetHeight;if(a){const g=a.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:g,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{a.classList.add("flash"),a.addEventListener("animationend",()=>{a.classList.remove("flash")},{once:!0})},500)}r.classList.remove("open"),n.setAttribute("aria-expanded","false")})});const o=document.querySelector(".hero .btn");o&&o.addEventListener("click",t=>{t.preventDefault();const e=o.getAttribute("href"),i=document.querySelector(`header nav a[href="${e}"]`);i&&i.click()});function u(){const t=document.querySelector("header"),e=document.querySelector(".hero");if(!t||!e)return;const i=t.getBoundingClientRect().height;e.style.height=`${window.innerHeight-i}px`}u()}const A="1.0.5";(async function(){var r;try{const o=await L(),t=((r=new URLSearchParams(window.location.search).get("lang"))==null?void 0:r.toLowerCase())||"de",e=o[t]||o.de;$(e.siteTitle),E(e.navLinks,o.languages),x(e.sections.home),S(e.sections.products),k(e.sections.order),C(e.sections.feedback),T(e.sections.contact),q(e.sections.footer),P()}catch(o){console.error("Initialization error:",o)}})();document.addEventListener("DOMContentLoaded",async()=>{var n;try{const r=await L(),u=((n=new URLSearchParams(window.location.search).get("lang"))==null?void 0:n.toLowerCase())||"de",e=(r[u]||r.de).sections.products.flatMap(a=>a.images.map(s=>`${`/${s.src}`}?v=${A}`)),i=document.head;e.forEach(a=>{const s=document.createElement("link");s.rel="preload",s.as="image",s.href=a,s.crossOrigin="anonymous",i.appendChild(s)})}catch(r){console.error("Error preloading images:",r)}});
