(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();async function h(){const e=await fetch("/data.json");if(!e.ok)throw new Error(`Failed to load data: ${e.status}`);return e.json()}function p(e){document.title=e;const t=document.querySelector("header h1");console.log("base URL:","/"),t.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${e}`}function f(e){const t=document.querySelector("nav ul");t.innerHTML="",e.forEach(r=>{const o=document.createElement("li"),n=document.createElement("a");n.href=r.href,n.textContent=r.text,o.appendChild(n),t.appendChild(o)})}function g(e){const t=document.getElementById("home");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn">${e.button.text}</a>
  `}function m(e){const t=document.querySelector(".products");t.innerHTML="",e.forEach(r=>{const o=document.createElement("div");o.className="product",o.dataset.images=JSON.stringify(r.images),o.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">${r.images[0].overlayText}</div>
        <img class="product-image" src="/${r.images[0].src}" alt="${r.name}" loading="lazy">
      </div>
      <div class="product-header">
        <h3>${r.name}</h3>
        <button class="btn expand" aria-expanded="false" aria-controls="details-${r.id}" aria-label="Mehr Infos zu ${r.name}">
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
    `,t.appendChild(o);const n=r.images,i=o.querySelector("img.product-image"),a=o.querySelector("div.product-overlay");let s=0;i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out",a.style.opacity="1",a.style.transition="opacity 0.3s ease-in-out";function u(){const{src:l,overlayText:d}=n[s];i.src="/"+l,a.textContent=d}const c=o.querySelector(".product-image-wrapper");n.length===1&&c.classList.add("single-image"),c.addEventListener("click",l=>{l.stopPropagation();const d=c.getBoundingClientRect();l.clientX-d.left<d.width/2?s=(s-1+n.length)%n.length:s=(s+1)%n.length,i.style.opacity="0",a.style.opacity="0",setTimeout(()=>{u(),i.style.opacity="1",a.style.opacity="1"},200)})})}function y(e){const t=document.getElementById("bestellen");t.innerHTML=`
    <h2>${e.heading}</h2>
    <div class="process">
      ${e.steps.map(r=>`<div class="step"><h3>${r.icon} ${r.title}</h3><p>${r.text}</p></div>`).join("")}
    </div>
    <a href="${e.button.href}" class="btn btn-order"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function b(e){const t=document.getElementById("feedback");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function v(e){const t=document.getElementById("kontakt");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text.replace(/\n/g,"<br>")}</p>
    <a href="${e.button.href}" class="btn-whatsapp"${e.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${e.button.ariaLabel}">
      ${e.button.text}
    </a>
  `}function $(e){const t=document.querySelector("footer");t.innerHTML=`
    ${e.text}<br>
    <a href="${e.backToTop.href}">${e.backToTop.text}</a>
  `}function x(){const e=document.querySelector(".menu-toggle"),t=document.querySelector("nav");e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!o)),t.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("aria-controls"),i=document.getElementById(n),a=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(s=>{s.hasAttribute("hidden")||(s.setAttribute("hidden",""),document.querySelector(`[aria-controls="${s.id}"]`).setAttribute("aria-expanded","false"))}),a?(i.removeAttribute("hidden"),o.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),o.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(o=>{o.addEventListener("click",n=>{n.target.closest("button.expand")||o.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const i=o.getAttribute("href"),a=document.querySelector(i),s=document.querySelector("header").offsetHeight;if(a){const c=a.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:c,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{a.classList.add("flash"),a.addEventListener("animationend",()=>{a.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),t.classList.remove("open"),e.setAttribute("aria-expanded","false")})});const r=document.querySelector(".hero .btn");r&&r.addEventListener("click",o=>{o.preventDefault();const n=r.getAttribute("href"),i=document.querySelector(`header nav a[href="${n}"]`);i&&i.click()})}(async function(){try{const t=await h();p(t.siteTitle),f(t.navLinks),g(t.sections.home),m(t.sections.products),y(t.sections.order),b(t.sections.feedback),v(t.sections.contact),$(t.sections.footer),x()}catch(t){console.error("Initialization error:",t)}})();
