(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(){const t=await fetch("/data.json");if(!t.ok)throw new Error(`Failed to load data: ${t.status}`);return t.json()}function y(t){document.title=t;const n=document.querySelector("header h1");console.log("base URL:","/"),n.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${t}`}function v(t){const n=document.querySelector("nav ul");n.innerHTML="",t.forEach(o=>{const s=document.createElement("li"),e=document.createElement("a");e.href=o.href,e.textContent=o.text,s.appendChild(e),n.appendChild(s)})}function b(t){const n=document.getElementById("home");n.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text}</p>
    <a href="${t.button.href}" class="btn">${t.button.text}</a>
  `}const g="1.0.2";console.log("Version:",g);function $(t){const n=document.querySelector(".products");n.innerHTML="",t.forEach(o=>{const s=document.createElement("div");s.className="product",s.dataset.images=JSON.stringify(o.images),s.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${o.images[0].overlayText}</div>
        <img
          class="product-image"
          src="/${o.images[0].src}?v=${g}"
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
    `,n.appendChild(s);const e=o.images,r=s.querySelector("img.product-image"),i=s.querySelector("div.product-overlay");let a=0;const c=s.querySelector(".product-image-wrapper");if(e.length>1){let u=function(){const{src:l,overlayText:h}=e[a];r.src=`/${l}?v=${g}`,i.textContent=h};var m=u;r.style.opacity="1",r.style.transition="opacity 0.3s ease-in-out",i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out",c.addEventListener("click",l=>{l.stopPropagation();const h=c.getBoundingClientRect();l.clientX-h.left<h.width/2?a=(a-1+e.length)%e.length:a=(a+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{u(),r.style.opacity="1",i.style.opacity="1"},200)});let d=null;c.addEventListener("touchstart",l=>{d=l.changedTouches[0].clientX}),c.addEventListener("touchend",l=>{if(d===null)return;const p=l.changedTouches[0].clientX-d;Math.abs(p)>30&&(p>0?a=(a-1+e.length)%e.length:a=(a+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{u(),r.style.opacity="1",i.style.opacity="1"},200)),d=null}),c.addEventListener("pointerdown",l=>{d=l.clientX}),c.addEventListener("pointerup",l=>{if(d===null)return;const p=l.clientX-d;Math.abs(p)>30&&(p>0?a=(a-1+e.length)%e.length:a=(a+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{u(),r.style.opacity="1",i.style.opacity="1"},200)),d=null})}else c.classList.add("single-image")})}function L(t){const n=document.getElementById("bestellen");n.innerHTML=`
    <h2>${t.heading}</h2>
    <div class="process">
      ${t.steps.map(o=>`<div class="step"><h3>${o.icon} ${o.title}</h3><p>${o.text}</p></div>`).join("")}
    </div>
    <a href="${t.button.href}" class="btn btn-order"${t.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${t.button.text}
    </a>
  `}function E(t){const n=document.getElementById("feedback");n.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text}</p>
    <a href="${t.button.href}" class="btn"${t.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${t.button.text}
    </a>
  `}function x(t){const n=document.getElementById("kontakt");n.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text.replace(/\n/g,"<br>")}</p>
    <a href="${t.button.href}" class="btn-whatsapp"${t.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${t.button.ariaLabel}">
      ${t.button.text}
    </a>
  `}function w(t){const n=document.querySelector("footer");n.innerHTML=`
    ${t.text}<br>
    <a href="${t.backToTop.href}">${t.backToTop.text}</a>
  `}function S(){const t=document.querySelector(".menu-toggle"),n=document.querySelector("nav");t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!e)),n.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("aria-controls"),i=document.getElementById(r),a=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(c=>{c.hasAttribute("hidden")||(c.setAttribute("hidden",""),document.querySelector(`[aria-controls="${c.id}"]`).setAttribute("aria-expanded","false"))}),a?(i.removeAttribute("hidden"),e.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),e.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(e=>{e.addEventListener("click",r=>{r.target.closest("button.expand")||e.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const i=e.getAttribute("href"),a=document.querySelector(i),c=document.querySelector("header").offsetHeight;if(a){const u=a.getBoundingClientRect().top+window.pageYOffset-c;window.scrollTo({top:u,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{a.classList.add("flash"),a.addEventListener("animationend",()=>{a.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),n.classList.remove("open"),t.setAttribute("aria-expanded","false")})});const o=document.querySelector(".hero .btn");o&&o.addEventListener("click",e=>{e.preventDefault();const r=o.getAttribute("href"),i=document.querySelector(`header nav a[href="${r}"]`);i&&i.click()});function s(){const e=document.querySelector("header"),r=document.querySelector(".hero");if(!e||!r)return;const i=e.getBoundingClientRect().height;r.style.height=`${window.innerHeight-i}px`}window.addEventListener("load",s),window.addEventListener("resize",s),s()}const q="1.0.2";(async function(){try{const n=await f();y(n.siteTitle),v(n.navLinks),b(n.sections.home),$(n.sections.products),L(n.sections.order),E(n.sections.feedback),x(n.sections.contact),w(n.sections.footer),S()}catch(n){console.error("Initialization error:",n)}})();document.addEventListener("DOMContentLoaded",async()=>{try{const n=(await f()).sections.products.flatMap(s=>s.images.map(e=>`${`/${e.src}`}?v=${q}`)),o=document.head;n.forEach(s=>{const e=document.createElement("link");e.rel="preload",e.as="image",e.href=s,e.crossOrigin="anonymous",o.appendChild(e)})}catch(t){console.error("Error preloading images:",t)}});
