(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();async function L(){const n=await fetch("/data.json");if(!n.ok)throw new Error(`Failed to load data: ${n.status}`);return n.json()}function $(n){document.title=n;const a=document.querySelector("header h1");console.log("base URL:","/"),a.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo" onclick="window.location.href='https://olgas-kitchen.de'" style="cursor:pointer;"> <span onclick="window.location.href='https://olgas-kitchen.de'" style="cursor:pointer;">${n}</span>`}function E(n,a=[]){const r=document.querySelector("nav ul");if(r.innerHTML="",n.forEach(e=>{const i=document.createElement("li"),o=document.createElement("a");o.href=e.href,o.textContent=e.text,i.appendChild(o),r.appendChild(i)}),a.length){let v=function(c){p.innerHTML="";const g=document.createElement("img");g.src=`/${c.icon}`,g.alt=c.code,g.width=32,g.height=24,p.appendChild(g);const l=document.createElement("span");l.textContent=" "+c.code.toUpperCase(),l.style.fontWeight="bold",l.style.marginLeft="0.5em",p.appendChild(l)},f=function(){m.innerHTML="",a.filter(c=>c.code!==s.code).forEach(c=>{const g=document.createElement("li"),l=document.createElement("a");l.href=c.href,l.style.display="flex",l.style.alignItems="center";const h=document.createElement("img");h.src=`/${c.icon}`,h.alt=c.code,h.width=32,h.height=24,l.appendChild(h);const d=document.createElement("span");d.textContent=" "+c.code.toUpperCase(),d.style.fontWeight="bold",d.style.marginLeft="0.5em",l.appendChild(d),l.addEventListener("click",y=>{y.preventDefault(),s=c,v(s),f(),m.classList.add("hidden"),window.location.search!==c.href&&(window.location.search=c.href)}),g.appendChild(l),m.appendChild(g)})};var u=v,t=f;const e=document.createElement("li");e.classList.add("language-selector");const o=new URLSearchParams(window.location.search).get("lang");let s=a.find(c=>c.code===(o?o.toLowerCase():"de"))||a[0];const p=document.createElement("button");p.type="button",p.classList.add("lang-button"),v(s),e.appendChild(p);const m=document.createElement("ul");m.classList.add("lang-dropdown","hidden"),f(),e.appendChild(m),r.appendChild(e),p.addEventListener("click",c=>{c.stopPropagation(),m.classList.toggle("hidden")}),window._langDropdownListener&&document.removeEventListener("click",window._langDropdownListener),window._langDropdownListener=function(c){e.contains(c.target)||m.classList.add("hidden")},document.addEventListener("click",window._langDropdownListener)}}function x(n){const a=document.getElementById("home");a.innerHTML=`
    <h2>${n.heading}</h2>
    <p>${n.text}</p>
    <a href="${n.button.href}" class="btn">${n.button.text}</a>
  `}const b="1.0.9";console.log("Version:",b);function S(n){const a=document.querySelector(".products");a.innerHTML="",n.forEach(r=>{const u=document.createElement("div");u.className="product",u.dataset.images=JSON.stringify(r.images),u.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${r.images[0].overlayText}</div>
        <img
          class="product-image"
          src="/${r.images[0].src}?v=${b}"
          alt="${r.name}"
          loading="lazy"
        >
      </div>
      <div class="product-header">
        <h3>${r.name}</h3>
        <button
          class="btn expand"
          aria-expanded="false"
          aria-controls="details-${r.id}"
          aria-label="Mehr Infos zu ${r.name}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <p>${r.description}</p>
      <div id="details-${r.id}" class="product-details" hidden>
        <h4>Packungsinhalt</h4>
        <p>${r.details.packung}</p>
        <h4>Zubereitung</h4>
        <p>${r.details.zubereitung.join("<br>")}</p>
        <h4>Serviervorschläge</h4>
        <p>${r.details.serviervorschlaege}</p>
        <h4>Nährwerte (100 g)</h4>
        <p>${r.details.naehrwerte}</p>
        <h4>Allergene</h4>
        <p><strong>Enthält:</strong> ${r.allergens.join(", ")}</p>
      </div>
    `,a.appendChild(u);const t=r.images,e=u.querySelector("img.product-image"),i=u.querySelector("div.product-overlay");let o=0;const s=u.querySelector(".product-image-wrapper");if(t.length>1){let f=function(){const{src:d,overlayText:y}=t[o];e.src=`/${d}?v=${b}`,i.textContent=y},g=function(){clearInterval(c),c=setInterval(()=>{o=(o+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{f(),e.style.opacity="1",i.style.opacity="1"},200)},4e3)},l=function(){clearInterval(c),setTimeout(g,8e3)};var p=f,v=g,m=l;e.style.opacity="1",e.style.transition="opacity 0.3s ease-in-out",i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out";let c;g(),s.addEventListener("click",d=>{d.stopPropagation();const y=s.getBoundingClientRect();d.clientX-y.left<y.width/2?o=(o-1+t.length)%t.length:o=(o+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{f(),e.style.opacity="1",i.style.opacity="1"},200),l()});let h=null;s.addEventListener("touchstart",d=>{h=d.changedTouches[0].clientX}),s.addEventListener("touchend",d=>{if(h===null)return;const w=d.changedTouches[0].clientX-h;Math.abs(w)>30&&(w>0?o=(o-1+t.length)%t.length:o=(o+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{f(),e.style.opacity="1",i.style.opacity="1"},200),l()),h=null}),s.addEventListener("pointerdown",d=>{h=d.clientX}),s.addEventListener("pointerup",d=>{if(h===null)return;const w=d.clientX-h;Math.abs(w)>30&&(w>0?o=(o-1+t.length)%t.length:o=(o+1)%t.length,e.style.opacity="0",i.style.opacity="0",setTimeout(()=>{f(),e.style.opacity="1",i.style.opacity="1"},200),l()),h=null})}else s.classList.add("single-image")})}function k(n){const a=document.getElementById("bestellen");a.innerHTML=`
    <h2>${n.heading}</h2>
    <div class="process">
      ${n.steps.map(r=>`<div class="step"><h3>${r.icon} ${r.title}</h3><p>${r.text}</p></div>`).join("")}
    </div>
    <a href="${n.button.href}" class="btn btn-order"${n.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${n.button.text}
    </a>
  `}function C(n){const a=document.getElementById("feedback");a.innerHTML=`
    <h2>${n.heading}</h2>
    <p>${n.text}</p>
    <a href="${n.button.href}" class="btn"${n.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${n.button.text}
    </a>
  `}function T(n){const a=document.getElementById("kontakt");a.innerHTML=`
    <h2>${n.heading}</h2>
    <p>${n.text.replace(/\n/g,"<br>")}</p>
    <a href="${n.button.href}" class="btn-whatsapp"${n.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${n.button.ariaLabel}">
      ${n.button.text}
    </a>
  `}function q(n){const a=document.querySelector("footer");a.innerHTML=`
    ${n.text}<br>
    <a href="${n.backToTop.href}">${n.backToTop.text}</a>
  `}function A(){const n=document.querySelector(".menu-toggle"),a=document.querySelector("nav");n.addEventListener("click",()=>{const t=n.getAttribute("aria-expanded")==="true";n.setAttribute("aria-expanded",String(!t)),a.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("aria-controls"),i=document.getElementById(e),o=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(s=>{s.hasAttribute("hidden")||(s.setAttribute("hidden",""),document.querySelector(`[aria-controls="${s.id}"]`).setAttribute("aria-expanded","false"))}),o?(i.removeAttribute("hidden"),t.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),t.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(t=>{t.addEventListener("click",e=>{e.target.closest("button.expand")||t.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const i=t.getAttribute("href"),o=document.querySelector(i),s=document.querySelector("header").offsetHeight;if(o){const p=o.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:p,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{o.classList.add("flash"),o.addEventListener("animationend",()=>{o.classList.remove("flash")},{once:!0})},500)}a.classList.remove("open"),n.setAttribute("aria-expanded","false")})});const r=document.querySelector(".hero .btn");r&&r.addEventListener("click",t=>{t.preventDefault();const e=r.getAttribute("href"),i=document.querySelector(`header nav a[href="${e}"]`);i&&i.click()});function u(){const t=document.querySelector("header"),e=document.querySelector(".hero");if(!t||!e)return;const i=t.getBoundingClientRect().height;e.style.height=`${window.innerHeight-i}px`}u()}const H="1.0.9";(async function(){var a;try{const r=await L(),t=((a=new URLSearchParams(window.location.search).get("lang"))==null?void 0:a.toLowerCase())||"de",e=r[t]||r.de;$(e.siteTitle),E(e.navLinks,r.languages),x(e.sections.home),S(e.sections.products),k(e.sections.order),C(e.sections.feedback),T(e.sections.contact),q(e.sections.footer),A();const i=document.querySelector("title");i&&(i.textContent=e.siteTitle);const o=document.querySelector('meta[name="description"]');o&&o.setAttribute("content",e.metaDescription||"");const s=document.querySelector('meta[name="keywords"]');if(s&&s.setAttribute("content",e.metaKeywords||""),e.structuredData){const m=document.createElement("script");m.type="application/ld+json",m.textContent=JSON.stringify(e.structuredData),document.head.appendChild(m)}const p=document.querySelector("#produkte h2");p&&(p.textContent=e.sections.productsHeading||"✨ Unsere Spezialitäten");const v=document.querySelector(".skip-link");v&&(v.textContent=e.skipLinkText||"Zum Inhalt springen")}catch(r){console.error("Initialization error:",r)}})();document.addEventListener("DOMContentLoaded",async()=>{var n;try{const a=await L(),u=((n=new URLSearchParams(window.location.search).get("lang"))==null?void 0:n.toLowerCase())||"de",e=(a[u]||a.de).sections.products.flatMap(o=>o.images.map(s=>`${`/${s.src}`}?v=${H}`)),i=document.head;e.forEach(o=>{const s=document.createElement("link");s.rel="preload",s.as="image",s.href=o,s.crossOrigin="anonymous",i.appendChild(s)})}catch(a){console.error("Error preloading images:",a)}});
