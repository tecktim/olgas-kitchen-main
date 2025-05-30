// src/components/home.js
// Renders the Home section
export function renderHome(home) {
  const el = document.getElementById('home');
  el.innerHTML = `
    <h2>${home.heading}</h2>
    <p>${home.text}</p>
    <a href="${home.button.href}" class="btn">${home.button.text}</a>
  `;
}
