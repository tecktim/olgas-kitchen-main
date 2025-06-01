(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function b(){const t=await fetch("/data.json");if(!t.ok)throw new Error(`Failed to load data: ${t.status}`);return t.json()}function L(t){document.title=t;const n=document.querySelector("header h1");console.log("base URL:","/"),n.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${t}`}function E(t){const n=document.querySelector("nav ul");n.innerHTML="",t.forEach(o=>{const a=document.createElement("li"),e=document.createElement("a");e.href=o.href,e.textContent=o.text,a.appendChild(e),n.appendChild(a)})}function x(t){const n=document.getElementById("home");n.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text}</p>
    <a href="${t.button.href}" class="btn">${t.button.text}</a>
  `}const m="1.0.3";console.log("Version:",m);function S(t){const n=document.querySelector(".products");n.innerHTML="",t.forEach(o=>{const a=document.createElement("div");a.className="product",a.dataset.images=JSON.stringify(o.images),a.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${o.images[0].overlayText}</div>
        <img
          class="product-image"
          src="/${o.images[0].src}?v=${m}"
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
    `,n.appendChild(a);const e=o.images,r=a.querySelector("img.product-image"),i=a.querySelector("div.product-overlay");let s=0;const c=a.querySelector(".product-image-wrapper");if(e.length>1){let p=function(){const{src:l,overlayText:u}=e[s];r.src=`/${l}?v=${m}`,i.textContent=u},y=function(){clearInterval(g),g=setInterval(()=>{s=(s+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",i.style.opacity="1"},200)},4e3)},f=function(){clearInterval(g),setTimeout(y,8e3)};var $=p,v=y,I=f;r.style.opacity="1",r.style.transition="opacity 0.3s ease-in-out",i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out";let g;y(),c.addEventListener("click",l=>{l.stopPropagation();const u=c.getBoundingClientRect();l.clientX-u.left<u.width/2?s=(s-1+e.length)%e.length:s=(s+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",i.style.opacity="1"},200),f()});let d=null;c.addEventListener("touchstart",l=>{d=l.changedTouches[0].clientX}),c.addEventListener("touchend",l=>{if(d===null)return;const h=l.changedTouches[0].clientX-d;Math.abs(h)>30&&(h>0?s=(s-1+e.length)%e.length:s=(s+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",i.style.opacity="1"},200),f()),d=null}),c.addEventListener("pointerdown",l=>{d=l.clientX}),c.addEventListener("pointerup",l=>{if(d===null)return;const h=l.clientX-d;Math.abs(h)>30&&(h>0?s=(s-1+e.length)%e.length:s=(s+1)%e.length,r.style.opacity="0",i.style.opacity="0",setTimeout(()=>{p(),r.style.opacity="1",i.style.opacity="1"},200),f()),d=null})}else c.classList.add("single-image")})}function w(t){const n=document.getElementById("bestellen");n.innerHTML=`
    <h2>${t.heading}</h2>
    <div class="process">
      ${t.steps.map(o=>`<div class="step"><h3>${o.icon} ${o.title}</h3><p>${o.text}</p></div>`).join("")}
    </div>
    <a href="${t.button.href}" class="btn btn-order"${t.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${t.button.text}
    </a>
  `}function T(t){const n=document.getElementById("feedback");n.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text}</p>
    <a href="${t.button.href}" class="btn"${t.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${t.button.text}
    </a>
  `}function q(t){const n=document.getElementById("kontakt");n.innerHTML=`
    <h2>${t.heading}</h2>
    <p>${t.text.replace(/\n/g,"<br>")}</p>
    <a href="${t.button.href}" class="btn-whatsapp"${t.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${t.button.ariaLabel}">
      ${t.button.text}
    </a>
  `}function A(t){const n=document.querySelector("footer");n.innerHTML=`
    ${t.text}<br>
    <a href="${t.backToTop.href}">${t.backToTop.text}</a>
  `}function k(){const t=document.querySelector(".menu-toggle"),n=document.querySelector("nav");t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!e)),n.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(e=>{e.addEventListener("click",()=>{const r=e.getAttribute("aria-controls"),i=document.getElementById(r),s=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(c=>{c.hasAttribute("hidden")||(c.setAttribute("hidden",""),document.querySelector(`[aria-controls="${c.id}"]`).setAttribute("aria-expanded","false"))}),s?(i.removeAttribute("hidden"),e.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),e.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(e=>{e.addEventListener("click",r=>{r.target.closest("button.expand")||e.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const i=e.getAttribute("href"),s=document.querySelector(i),c=document.querySelector("header").offsetHeight;if(s){const v=s.getBoundingClientRect().top+window.pageYOffset-c;window.scrollTo({top:v,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{s.classList.add("flash"),s.addEventListener("animationend",()=>{s.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),n.classList.remove("open"),t.setAttribute("aria-expanded","false")})});const o=document.querySelector(".hero .btn");o&&o.addEventListener("click",e=>{e.preventDefault();const r=o.getAttribute("href"),i=document.querySelector(`header nav a[href="${r}"]`);i&&i.click()});function a(){const e=document.querySelector("header"),r=document.querySelector(".hero");if(!e||!r)return;const i=e.getBoundingClientRect().height;r.style.height=`${window.innerHeight-i}px`}a()}const H="1.0.3";(async function(){try{const n=await b();L(n.siteTitle),E(n.navLinks),x(n.sections.home),S(n.sections.products),w(n.sections.order),T(n.sections.feedback),q(n.sections.contact),A(n.sections.footer),k()}catch(n){console.error("Initialization error:",n)}})();document.addEventListener("DOMContentLoaded",async()=>{try{const n=(await b()).sections.products.flatMap(a=>a.images.map(e=>`${`/${e.src}`}?v=${H}`)),o=document.head;n.forEach(a=>{const e=document.createElement("link");e.rel="preload",e.as="image",e.href=a,e.crossOrigin="anonymous",o.appendChild(e)})}catch(t){console.error("Error preloading images:",t)}});
