// src/components/header.js
// Renders the header with site title and logo
export function renderHeader(siteTitle) {
  document.title = siteTitle;
  const h1 = document.querySelector('header h1');
  h1.innerHTML = `<img src="${import.meta.env.BASE_URL}logo.svg" alt="Logo" class="logo"> ${siteTitle}`;
}
