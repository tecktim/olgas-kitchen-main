(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();async function w(){const t=await fetch("/data.json");if(!t.ok)throw new Error(`Failed to load data: ${t.status}`);return t.json()}function E(t){document.title=t;const o=document.querySelector("header h1");console.log("base URL:","/"),o.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo" onclick="window.location.href='https://olgas-kitchen.de'" style="cursor:pointer;"> <span onclick="window.location.href='https://olgas-kitchen.de'" style="cursor:pointer;">${t}</span>`}function L(t,o=[]){const r=document.querySelector("nav ul");if(r.innerHTML="",t.forEach(n=>{const i=document.createElement("li"),a=document.createElement("a");a.href=n.href,a.textContent=n.text,i.appendChild(a),r.appendChild(i)}),o.length){let b=function(s){f.innerHTML="";const p=document.createElement("img");p.src=`/${s.icon}`,p.alt=s.code,p.width=32,p.height=24,f.appendChild(p);const d=document.createElement("span");d.textContent=" "+s.code.toUpperCase(),d.style.fontWeight="bold",d.style.marginLeft="0.5em",f.appendChild(d)},g=function(){m.innerHTML="",o.filter(s=>s.code!==c.code).forEach(s=>{const p=document.createElement("li"),d=document.createElement("a");d.href=s.href,d.style.display="flex",d.style.alignItems="center";const h=document.createElement("img");h.src=`/${s.icon}`,h.alt=s.code,h.width=32,h.height=24,d.appendChild(h);const u=document.createElement("span");u.textContent=" "+s.code.toUpperCase(),u.style.fontWeight="bold",u.style.marginLeft="0.5em",d.appendChild(u),d.addEventListener("click",y=>{y.preventDefault(),c=s,b(c),g(),m.classList.add("hidden"),window.location.search!==s.href&&(window.location.search=s.href)}),p.appendChild(d),m.appendChild(p)})};var l=b,e=g;const n=document.createElement("li");n.classList.add("language-selector");const a=new URLSearchParams(window.location.search).get("lang");let c=o.find(s=>s.code===(a?a.toLowerCase():"de"))||o[0];const f=document.createElement("button");f.type="button",f.classList.add("lang-button"),b(c),n.appendChild(f);const m=document.createElement("ul");m.classList.add("lang-dropdown","hidden"),g(),n.appendChild(m),r.appendChild(n),f.addEventListener("click",s=>{s.stopPropagation(),m.classList.toggle("hidden")}),window._langDropdownListener&&document.removeEventListener("click",window._langDropdownListener),window._langDropdownListener=function(s){n.contains(s.target)||m.classList.add("hidden")},document.addEventListener("click",window._langDropdownListener)}}function x(t){const o=document.getElementById("home");o.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text}</p>
    <a href="${t.button.href}" class="btn">${t.button.text}</a>
  `}const $="1.0.4";console.log("Version:",$);function S(t){const o=document.querySelector(".products");o.innerHTML="",t.forEach(r=>{const l=document.createElement("div");l.className="product",l.dataset.images=JSON.stringify(r.images),l.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${r.images[0].overlayText}</div>
        <img
          class="product-image"
          src="/${r.images[0].src}?v=${$}"
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
    `,o.appendChild(l);const e=r.images,n=l.querySelector("img.product-image"),i=l.querySelector("div.product-overlay");let a=0;const c=l.querySelector(".product-image-wrapper");if(e.length>1){let g=function(){const{src:u,overlayText:y}=e[a];n.src=`/${u}?v=${$}`,i.textContent=y},p=function(){clearInterval(s),s=setInterval(()=>{a=(a+1)%e.length,n.style.opacity="0",i.style.opacity="0",setTimeout(()=>{g(),n.style.opacity="1",i.style.opacity="1"},200)},4e3)},d=function(){clearInterval(s),setTimeout(p,8e3)};var f=g,b=p,m=d;n.style.opacity="1",n.style.transition="opacity 0.3s ease-in-out",i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out";let s;p(),c.addEventListener("click",u=>{u.stopPropagation();const y=c.getBoundingClientRect();u.clientX-y.left<y.width/2?a=(a-1+e.length)%e.length:a=(a+1)%e.length,n.style.opacity="0",i.style.opacity="0",setTimeout(()=>{g(),n.style.opacity="1",i.style.opacity="1"},200),d()});let h=null;c.addEventListener("touchstart",u=>{h=u.changedTouches[0].clientX}),c.addEventListener("touchend",u=>{if(h===null)return;const v=u.changedTouches[0].clientX-h;Math.abs(v)>30&&(v>0?a=(a-1+e.length)%e.length:a=(a+1)%e.length,n.style.opacity="0",i.style.opacity="0",setTimeout(()=>{g(),n.style.opacity="1",i.style.opacity="1"},200),d()),h=null}),c.addEventListener("pointerdown",u=>{h=u.clientX}),c.addEventListener("pointerup",u=>{if(h===null)return;const v=u.clientX-h;Math.abs(v)>30&&(v>0?a=(a-1+e.length)%e.length:a=(a+1)%e.length,n.style.opacity="0",i.style.opacity="0",setTimeout(()=>{g(),n.style.opacity="1",i.style.opacity="1"},200),d()),h=null})}else c.classList.add("single-image")})}function k(t){const o=document.getElementById("bestellen");o.innerHTML=`
    <h2>${t.heading}</h2>
    <div class="process">
      ${t.steps.map(r=>`<div class="step"><h3>${r.icon} ${r.title}</h3><p>${r.text}</p></div>`).join("")}
    </div>
    <a href="${t.button.href}" class="btn btn-order"${t.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${t.button.text}
    </a>
  `}function T(t){const o=document.getElementById("feedback");o.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text}</p>
    <a href="${t.button.href}" class="btn"${t.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${t.button.text}
    </a>
  `}function C(t){const o=document.getElementById("kontakt");o.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text.replace(/\n/g,"<br>")}</p>
    <a href="${t.button.href}" class="btn-whatsapp"${t.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${t.button.ariaLabel}">
      ${t.button.text}
    </a>
  `}function q(t){const o=document.querySelector("footer");o.innerHTML=`
    ${t.text}<br>
    <a href="${t.backToTop.href}">${t.backToTop.text}</a>
  `}function A(){const t=document.querySelector(".menu-toggle"),o=document.querySelector("nav");t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!e)),o.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("aria-controls"),i=document.getElementById(n),a=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(c=>{c.hasAttribute("hidden")||(c.setAttribute("hidden",""),document.querySelector(`[aria-controls="${c.id}"]`).setAttribute("aria-expanded","false"))}),a?(i.removeAttribute("hidden"),e.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),e.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(e=>{e.addEventListener("click",n=>{n.target.closest("button.expand")||e.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const i=e.getAttribute("href"),a=document.querySelector(i),c=document.querySelector("header").offsetHeight;if(a){const f=a.getBoundingClientRect().top+window.pageYOffset-c;window.scrollTo({top:f,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{a.classList.add("flash"),a.addEventListener("animationend",()=>{a.classList.remove("flash")},{once:!0})},500)}o.classList.remove("open"),t.setAttribute("aria-expanded","false")})});const r=document.querySelector(".hero .btn");r&&r.addEventListener("click",e=>{e.preventDefault();const n=r.getAttribute("href"),i=document.querySelector(`header nav a[href="${n}"]`);i&&i.click()});function l(){const e=document.querySelector("header"),n=document.querySelector(".hero");if(!e||!n)return;const i=e.getBoundingClientRect().height;n.style.height=`${window.innerHeight-i}px`}l()}const H="1.0.4";(async function(){try{const o=await w();E(o.siteTitle),-L(o.navLinks),+L(o.navLinks,o.languages),x(o.sections.home),S(o.sections.products),k(o.sections.order),T(o.sections.feedback),C(o.sections.contact),q(o.sections.footer),A()}catch(o){console.error("Initialization error:",o)}})();document.addEventListener("DOMContentLoaded",async()=>{try{const o=(await w()).sections.products.flatMap(l=>l.images.map(e=>`${`/${e.src}`}?v=${H}`)),r=document.head;o.forEach(l=>{const e=document.createElement("link");e.rel="preload",e.as="image",e.href=l,e.crossOrigin="anonymous",r.appendChild(e)})}catch(t){console.error("Error preloading images:",t)}});
