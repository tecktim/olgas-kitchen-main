(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();async function d(){const e=await fetch("/data.json");if(!e.ok)throw new Error(`Failed to load data: ${e.status}`);return e.json()}function l(e){document.title=e;const t=document.querySelector("header h1");console.log("base URL:","/"),t.innerHTML=`<img src="/logo.svg" alt="Logo" class="logo"> ${e}`}function u(e){const t=document.querySelector("nav ul");t.innerHTML="",e.forEach(n=>{const o=document.createElement("li"),r=document.createElement("a");r.href=n.href,r.textContent=n.text,o.appendChild(r),t.appendChild(o)})}function h(e){const t=document.getElementById("home");t.innerHTML=`
    <h2>${e.heading}</h2>
    <p>${e.text}</p>
    <a href="${e.button.href}" class="btn">${e.button.text}</a>
  `}function f(e){const t=document.querySelector(".products");t.innerHTML="",e.forEach(n=>{const o=document.createElement("div");o.className="product",o.innerHTML=`
      <div class="product-image-wrapper">
        <div class="product-overlay">Serviervorschlag</div>
        <img class="product-image" src="/${n.mainImage}" alt="${n.name}" loading="lazy">      </div>
      <div class="product-header">
        <h3>${n.name}</h3>
        <button class="btn expand" aria-expanded="false" aria-controls="details-${n.id}" aria-label="Mehr Infos zu ${n.name}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <p>${n.description}</p>
      <div id="details-${n.id}" class="product-details" hidden>
        <h4>Packungsinhalt</h4>
        <p>${n.details.packung}</p>
        <h4>Zubereitung</h4>
        <p>${n.details.zubereitung.join("<br>")}</p>
        <h4>Serviervorschläge</h4>
        <p>${n.details.serviervorschlaege}</p>
        <h4>Nährwerte (100 g)</h4>
        <p>${n.details.naehrwerte}</p>
        <h4>Allergene</h4>
        <p><strong>Enthält:</strong> ${n.allergens.join(", ")}</p>
      </div>
    `,t.appendChild(o)})}function p(e){const t=document.getElementById("bestellen");t.innerHTML=`
    <h2>${e.heading}</h2>
    <div class="process">
      ${e.steps.map(n=>`<div class="step"><h3>${n.icon} ${n.title}</h3><p>${n.text}</p></div>`).join("")}
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
  `}function v(){const e=document.querySelector(".menu-toggle"),t=document.querySelector("nav");e.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",String(!o)),t.classList.toggle("open")}),document.querySelectorAll(".expand").forEach(o=>{o.addEventListener("click",()=>{const r=o.getAttribute("aria-controls"),a=document.getElementById(r),i=a.hasAttribute("hidden");document.querySelectorAll(".product-details").forEach(s=>{s.hasAttribute("hidden")||(s.setAttribute("hidden",""),document.querySelector(`[aria-controls="${s.id}"]`).setAttribute("aria-expanded","false"))}),i?(a.removeAttribute("hidden"),o.setAttribute("aria-expanded","true")):(a.setAttribute("hidden",""),o.setAttribute("aria-expanded","false"))})}),document.querySelectorAll(".product").forEach(o=>{o.addEventListener("click",r=>{r.target.closest("button.expand")||o.querySelector("button.expand").click()})}),document.querySelectorAll("header nav a").forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const a=o.getAttribute("href"),i=document.querySelector(a),s=document.querySelector("header").offsetHeight;if(i){const c=i.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:c,behavior:"smooth"}),history.pushState(null,"",a),setTimeout(()=>{i.classList.add("flash"),i.addEventListener("animationend",()=>{i.classList.remove("flash")},{once:!0})},500)}document.querySelector("footer").setAttribute("hidden",""),t.classList.remove("open"),e.setAttribute("aria-expanded","false")})});const n=document.querySelector(".hero .btn");n&&n.addEventListener("click",o=>{o.preventDefault();const r=n.getAttribute("href"),a=document.querySelector(`header nav a[href="${r}"]`);a&&a.click()})}(async function(){try{const t=await d();l(t.siteTitle),u(t.navLinks),h(t.sections.home),f(t.sections.products),p(t.sections.order),g(t.sections.feedback),m(t.sections.contact),b(t.sections.footer),v()}catch(t){console.error("Initialization error:",t)}})();
