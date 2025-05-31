(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();async function d(){const e=await fetch("/olgas-kitchen-main/data.json");if(!e.ok)throw new Error(`Failed to load data: ${e.status}`);return e.json()}function l(e){document.title=e;const t=document.querySelector("header h1");console.log("base URL:","/olgas-kitchen-main/"),t.innerHTML=`<img src="/olgas-kitchen-main/logo.svg" alt="Logo" class="logo"> ${e}`}function u(e){const t=document.querySelector("nav ul");t.innerHTML="",e.forEach(r=>{const o=document.createElement("li"),n=document.createElement("a");n.href=r.href,n.textContent=r.text,o.appendChild(n),t.appendChild(o)})}function h(e){const t=document.getElementById("home");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn">${e.button.text}</a>
  `}function f(e){const t=document.querySelector(".products");t.innerHTML="",e.forEach(r=>{const o=document.createElement("div");o.className="product",o.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">Serviervorschlag</div>
        <img class="product-image" src="/olgas-kitchen-main/${r.mainImage}" alt="${r.name}" loading="lazy">      </div>
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
    `,t.appendChild(o)})}function p(e){const t=document.getElementById("bestellen");t.innerHTML=`
    <h2>${e.heading}</h2>
    <div class="process">
      ${e.steps.map(r=>`<div class="step"><h3>${r.icon} ${r.title}</h3><p>${r.text}</p></div>`).join("")}
    </div>
    <a href="${e.button.href}" class="btn btn-order"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function g(e){const t=document.getElementById("feedback");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn"${e.button.external?' target="_blank" rel="noopener noreferrer"':""}>
      ${e.button.text}
    </a>
  `}function m(e){const t=document.getElementById("kontakt");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text.replace(/\n/g,"<br>")}</p>
    <a href="${e.button.href}" class="btn-whatsapp"${e.button.external?' target="_blank" rel="noopener noreferrer"':""} aria-label="${e.button.ariaLabel}">
      ${e.button.text}
    </a>
  `}function b(e){const t=document.querySelector("footer");t.innerHTML=`
    ${e.text}<br>
    <a href="${e.backToTop.href}">${e.backToTop.text}</a>
  `}function v(){const e=document.querySelector(".menu-toggle"),t=document.querySelector("nav");e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!o)),t.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(o=>{o.addEventListener("click",()=>{const n=o.getAttribute("aria-controls"),a=document.getElementById(n),i=a.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(s=>{s.hasAttribute("hidden")||(s.setAttribute("hidden",""),document.querySelector(`[aria-controls="${s.id}"]`).setAttribute("aria-expanded","false"))}),i?(a.removeAttribute("hidden"),o.setAttribute("aria-expanded","true")):(a.setAttribute("hidden",""),o.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(o=>{o.addEventListener("click",n=>{n.target.closest("button.expand")||o.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const a=o.getAttribute("href"),i=document.querySelector(a),s=document.querySelector("header").offsetHeight;if(i){const c=i.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:c,behavior:"smooth"}),history.pushState(null,"",a),setTimeout(()=>{i.classList.add("flash"),i.addEventListener("animationend",()=>{i.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),t.classList.remove("open"),e.setAttribute("aria-expanded","false")})});const r=document.querySelector(".hero .btn");r&&r.addEventListener("click",o=>{o.preventDefault();const n=r.getAttribute("href"),a=document.querySelector(`header nav a[href="${n}"]`);a&&a.click()})}(async function(){try{const t=await d();l(t.siteTitle),u(t.navLinks),h(t.sections.home),f(t.sections.products),p(t.sections.order),g(t.sections.feedback),m(t.sections.contact),b(t.sections.footer),v()}catch(t){console.error("Initialization error:",t)}})();
