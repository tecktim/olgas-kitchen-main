(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function m(){const e=await fetch("/data.json");if(!e.ok)throw new Error(`Failed to load data: ${e.status}`);return e.json()}function y(e){document.title=e;const n=document.querySelector("header h1");console.log("base URL:","/"),n.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${e}`}function v(e){const n=document.querySelector("nav ul");n.innerHTML="",e.forEach(i=>{const r=document.createElement("li"),t=document.createElement("a");t.href=i.href,t.textContent=i.text,r.appendChild(t),n.appendChild(r)})}function b(e){const n=document.getElementById("home");n.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn">${e.button.text}</a>
  `}const f="1.0.1";console.log("Version:",f);function $(e){const n=document.querySelector(".products");n.innerHTML="",e.forEach(i=>{const r=document.createElement("div");r.className="product",r.dataset.images=JSON.stringify(i.images),r.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${i.images[0].overlayText}</div>
        <img
          class="product-image"
          src="/${i.images[0].src}?v=${f}"
          alt="${i.name}"
          loading="lazy"
        >
      </div>
      <div class="product-header">
        <h3>${i.name}</h3>
        <button
          class="btn expand"
          aria-expanded="false"
          aria-controls="details-${i.id}"
          aria-label="Mehr Infos zu ${i.name}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <p>${i.description}</p>
      <div id="details-${i.id}" class="product-details" hidden>
        <h4>Packungsinhalt</h4>
        <p>${i.details.packung}</p>
        <h4>Zubereitung</h4>
        <p>${i.details.zubereitung.join("<br>")}</p>
        <h4>Serviervorschläge</h4>
        <p>${i.details.serviervorschlaege}</p>
        <h4>Nährwerte (100 g)</h4>
        <p>${i.details.naehrwerte}</p>
        <h4>Allergene</h4>
        <p><strong>Enthält:</strong> ${i.allergens.join(", ")}</p>
      </div>
    `,n.appendChild(r);const t=i.images,o=r.querySelector("img.product-image"),s=r.querySelector("div.product-overlay");let a=0;const l=r.querySelector(".product-image-wrapper");if(t.length>1){let p=function(){const{src:c,overlayText:u}=t[a];o.src=`/${c}?v=${f}`,s.textContent=u};var g=p;o.style.opacity="1",o.style.transition="opacity 0.3s ease-in-out",s.style.opacity="1",s.style.transition="opacity 0.3s ease-in-out",l.addEventListener("click",c=>{c.stopPropagation();const u=l.getBoundingClientRect();c.clientX-u.left<u.width/2?a=(a-1+t.length)%t.length:a=(a+1)%t.length,o.style.opacity="0",s.style.opacity="0",setTimeout(()=>{p(),o.style.opacity="1",s.style.opacity="1"},200)});let d=null;l.addEventListener("touchstart",c=>{d=c.changedTouches[0].clientX}),l.addEventListener("touchend",c=>{if(d===null)return;const h=c.changedTouches[0].clientX-d;Math.abs(h)>30&&(h>0?a=(a-1+t.length)%t.length:a=(a+1)%t.length,o.style.opacity="0",s.style.opacity="0",setTimeout(()=>{p(),o.style.opacity="1",s.style.opacity="1"},200)),d=null}),l.addEventListener("pointerdown",c=>{d=c.clientX}),l.addEventListener("pointerup",c=>{if(d===null)return;const h=c.clientX-d;Math.abs(h)>30&&(h>0?a=(a-1+t.length)%t.length:a=(a+1)%t.length,o.style.opacity="0",s.style.opacity="0",setTimeout(()=>{p(),o.style.opacity="1",s.style.opacity="1"},200)),d=null})}else l.classList.add("single-image")})}function L(e){const n=document.getElementById("bestellen");n.innerHTML=`
    <h2>${e.heading}</h2>
    <div class="process">
      ${e.steps.map(i=>`<div class="step"><h3>${i.icon} ${i.title}</h3><p>${i.text}</p></div>`).join("")}
    </div>
    <a href="${e.button.href}" class="btn btn-order"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function E(e){const n=document.getElementById("feedback");n.innerHTML=`
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
  `}function S(e){const n=document.querySelector("footer");n.innerHTML=`
    ${e.text}<br>
    <a href="${e.backToTop.href}">${e.backToTop.text}</a>
  `}function w(){const e=document.querySelector(".menu-toggle"),n=document.querySelector("nav");e.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!r)),n.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(r=>{r.addEventListener("click",()=>{const t=r.getAttribute("aria-controls"),o=document.getElementById(t),s=o.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(a=>{a.hasAttribute("hidden")||(a.setAttribute("hidden",""),document.querySelector(`[aria-controls="${a.id}"]`).setAttribute("aria-expanded","false"))}),s?(o.removeAttribute("hidden"),r.setAttribute("aria-expanded","true")):(o.setAttribute("hidden",""),r.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(r=>{r.addEventListener("click",t=>{t.target.closest("button.expand")||r.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const o=r.getAttribute("href"),s=document.querySelector(o),a=document.querySelector("header").offsetHeight;if(s){const g=s.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:g,behavior:"smooth"}),history.pushState(null,"",o),setTimeout(()=>{s.classList.add("flash"),s.addEventListener("animationend",()=>{s.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),n.classList.remove("open"),e.setAttribute("aria-expanded","false")})});const i=document.querySelector(".hero .btn");i&&i.addEventListener("click",r=>{r.preventDefault();const t=i.getAttribute("href"),o=document.querySelector(`header nav a[href="${t}"]`);o&&o.click()})}const T="1.0.1";(async function(){try{const n=await m();y(n.siteTitle),v(n.navLinks),b(n.sections.home),$(n.sections.products),L(n.sections.order),E(n.sections.feedback),x(n.sections.contact),S(n.sections.footer),w()}catch(n){console.error("Initialization error:",n)}})();document.addEventListener("DOMContentLoaded",async()=>{try{const n=(await m()).sections.products.flatMap(r=>r.images.map(t=>`${`/${t.src}`}?v=${T}`)),i=document.head;n.forEach(r=>{const t=document.createElement("link");t.rel="preload",t.as="image",t.href=r,t.crossOrigin="anonymous",i.appendChild(t)})}catch(e){console.error("Error preloading images:",e)}});
