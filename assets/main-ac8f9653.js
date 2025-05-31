(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();async function p(){const e=await fetch("/data.json");if(!e.ok)throw new Error(`Failed to load data: ${e.status}`);return e.json()}function f(e){document.title=e;const t=document.querySelector("header h1");console.log("base URL:","/"),t.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${e}`}function g(e){const t=document.querySelector("nav ul");t.innerHTML="",e.forEach(r=>{const o=document.createElement("li"),n=document.createElement("a");n.href=r.href,n.textContent=r.text,o.appendChild(n),t.appendChild(o)})}function m(e){const t=document.getElementById("home");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn">${e.button.text}</a>
  `}function y(e){const t=document.querySelector(".products");t.innerHTML="",e.forEach(r=>{const o=document.createElement("div");o.className="product",o.dataset.images=JSON.stringify(r.images),o.innerHTML=`
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
    `,t.appendChild(o);const n=r.images,i=o.querySelector("img.product-image"),s=o.querySelector("div.product-overlay");let a=0;const c=o.querySelector(".product-image-wrapper");if(n.length>1){let h=function(){const{src:l,overlayText:d}=n[a];i.src="/"+l,s.textContent=d};var u=h;i.style.opacity="1",i.style.transition="opacity 0.3s ease-in-out",s.style.opacity="1",s.style.transition="opacity 0.3s ease-in-out",c.addEventListener("click",l=>{l.stopPropagation();const d=c.getBoundingClientRect();l.clientX-d.left<d.width/2?a=(a-1+n.length)%n.length:a=(a+1)%n.length,i.style.opacity="0",s.style.opacity="0",setTimeout(()=>{h(),i.style.opacity="1",s.style.opacity="1"},200)})}else c.classList.add("single-image")})}function b(e){const t=document.getElementById("bestellen");t.innerHTML=`
    <h2>${e.heading}</h2>
    <div class="process">
      ${e.steps.map(r=>`<div class="step"><h3>${r.icon} ${r.title}</h3><p>${r.text}</p></div>`).join("")}
    </div>
    <a href="${e.button.href}" class="btn btn-order"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function v(e){const t=document.getElementById("feedback");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function $(e){const t=document.getElementById("kontakt");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text.replace(/\n/g,"<br>")}</p>
    <a href="${e.button.href}" class="btn-whatsapp"${e.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${e.button.ariaLabel}">
      ${e.button.text}
    </a>
  `}function x(e){const t=document.querySelector("footer");t.innerHTML=`
    ${e.text}<br>
    <a href="${e.backToTop.href}">${e.backToTop.text}</a>
  `}function L(){const e=document.querySelector(".menu-toggle"),t=document.querySelector("nav");e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!o)),t.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("aria-controls"),i=document.getElementById(n),s=i.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(a=>{a.hasAttribute("hidden")||(a.setAttribute("hidden",""),document.querySelector(`[aria-controls="${a.id}"]`).setAttribute("aria-expanded","false"))}),s?(i.removeAttribute("hidden"),o.setAttribute("aria-expanded","true")):(i.setAttribute("hidden",""),o.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(o=>{o.addEventListener("click",n=>{n.target.closest("button.expand")||o.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const i=o.getAttribute("href"),s=document.querySelector(i),a=document.querySelector("header").offsetHeight;if(s){const u=s.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:u,behavior:"smooth"}),history.pushState(null,"",i),setTimeout(()=>{s.classList.add("flash"),s.addEventListener("animationend",()=>{s.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),t.classList.remove("open"),e.setAttribute("aria-expanded","false")})});const r=document.querySelector(".hero .btn");r&&r.addEventListener("click",o=>{o.preventDefault();const n=r.getAttribute("href"),i=document.querySelector(`header nav a[href="${n}"]`);i&&i.click()})}(async function(){try{const t=await p();f(t.siteTitle),g(t.navLinks),m(t.sections.home),y(t.sections.products),b(t.sections.order),v(t.sections.feedback),$(t.sections.contact),x(t.sections.footer),L()}catch(t){console.error("Initialization error:",t)}})();
