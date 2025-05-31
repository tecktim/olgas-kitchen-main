(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function g(){const e=await fetch("/data.json");if(!e.ok)throw new Error(`Failed to load data: ${e.status}`);return e.json()}function y(e){document.title=e;const n=document.querySelector("header h1");console.log("base URL:","/"),n.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${e}`}function m(e){const n=document.querySelector("nav ul");n.innerHTML="",e.forEach(o=>{const i=document.createElement("li"),t=document.createElement("a");t.href=o.href,t.textContent=o.text,i.appendChild(t),n.appendChild(i)})}function v(e){const n=document.getElementById("home");n.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn">${e.button.text}</a>
  `}function b(e){const n=document.querySelector(".products");n.innerHTML="",e.forEach(o=>{const i=document.createElement("div");i.className="product",i.dataset.images=JSON.stringify(o.images),i.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${o.images[0].overlayText}</div>
        <img class="product-image" src="/${o.images[0].src}" alt="${o.name}" loading="lazy">
      </div>
      <div class="product-header">
        <h3>${o.name}</h3>
        <button class="btn expand" aria-expanded="false" aria-controls="details-${o.id}" aria-label="Mehr Infos zu ${o.name}">
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
    `,n.appendChild(i);const t=o.images,r=i.querySelector("img.product-image"),s=i.querySelector("div.product-overlay");let a=0;const l=i.querySelector(".product-image-wrapper");if(t.length>1){let p=function(){const{src:c,overlayText:u}=t[a];r.src="/"+c,s.textContent=u};var f=p;r.style.opacity="1",r.style.transition="opacity 0.3s ease-in-out",s.style.opacity="1",s.style.transition="opacity 0.3s ease-in-out",l.addEventListener("click",c=>{c.stopPropagation();const u=l.getBoundingClientRect();c.clientX-u.left<u.width/2?a=(a-1+t.length)%t.length:a=(a+1)%t.length,r.style.opacity="0",s.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",s.style.opacity="1"},200)});let d=null;l.addEventListener("touchstart",c=>{d=c.changedTouches[0].clientX}),l.addEventListener("touchend",c=>{if(d===null)return;const h=c.changedTouches[0].clientX-d;Math.abs(h)>30&&(h>0?a=(a-1+t.length)%t.length:a=(a+1)%t.length,r.style.opacity="0",s.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",s.style.opacity="1"},200)),d=null}),l.addEventListener("pointerdown",c=>{d=c.clientX}),l.addEventListener("pointerup",c=>{if(d===null)return;const h=c.clientX-d;Math.abs(h)>30&&(h>0?a=(a-1+t.length)%t.length:a=(a+1)%t.length,r.style.opacity="0",s.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",s.style.opacity="1"},200)),d=null})}else l.classList.add("single-image")})}function $(e){const n=document.getElementById("bestellen");n.innerHTML=`
    <h2>${e.heading}</h2>
    <div class="process">
      ${e.steps.map(o=>`<div class="step"><h3>${o.icon} ${o.title}</h3><p>${o.text}</p></div>`).join("")}
    </div>
    <a href="${e.button.href}" class="btn btn-order"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function L(e){const n=document.getElementById("feedback");n.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function x(e){const n=document.getElementById("kontakt");n.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text.replace(/\n/g,"<br>")}</p>
    <a href="${e.button.href}" class="btn-whatsapp"${e.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${e.button.ariaLabel}">
      ${e.button.text}
    </a>
  `}function E(e){const n=document.querySelector("footer");n.innerHTML=`
    ${e.text}<br>
    <a href="${e.backToTop.href}">${e.backToTop.text}</a>
  `}function S(){const e=document.querySelector(".menu-toggle"),n=document.querySelector("nav");e.addEventListener("click",()=>{const i=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!i)),n.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(i=>{i.addEventListener("click",()=>{const t=i.getAttribute("aria-controls"),r=document.getElementById(t),s=r.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(a=>{a.hasAttribute("hidden")||(a.setAttribute("hidden",""),document.querySelector(`[aria-controls="${a.id}"]`).setAttribute("aria-expanded","false"))}),s?(r.removeAttribute("hidden"),i.setAttribute("aria-expanded","true")):(r.setAttribute("hidden",""),i.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(i=>{i.addEventListener("click",t=>{t.target.closest("button.expand")||i.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(i=>{i.addEventListener("click",t=>{t.preventDefault();const r=i.getAttribute("href"),s=document.querySelector(r),a=document.querySelector("header").offsetHeight;if(s){const f=s.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:f,behavior:"smooth"}),history.pushState(null,"",r),setTimeout(()=>{s.classList.add("flash"),s.addEventListener("animationend",()=>{s.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),n.classList.remove("open"),e.setAttribute("aria-expanded","false")})});const o=document.querySelector(".hero .btn");o&&o.addEventListener("click",i=>{i.preventDefault();const t=o.getAttribute("href"),r=document.querySelector(`header nav a[href="${t}"]`);r&&r.click()})}(async function(){try{const n=await g();y(n.siteTitle),m(n.navLinks),v(n.sections.home),b(n.sections.products),$(n.sections.order),L(n.sections.feedback),x(n.sections.contact),E(n.sections.footer),S()}catch(n){console.error("Initialization error:",n)}})();
