// src/components/footer.js
// Renders the Footer section
export function renderFooter(footer) {
  const footerEl = document.querySelector('footer');
  footerEl.innerHTML = `
    ${footer.text}<br>
    <a href="${footer.backToTop.href}">${footer.backToTop.text}</a>
  `;
}
