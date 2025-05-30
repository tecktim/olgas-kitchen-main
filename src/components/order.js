// src/components/order.js
// Renders the Order section
export function renderOrder(order) {
  const orderSec = document.getElementById('bestellen');
  orderSec.innerHTML = `
    <h2>${order.heading}</h2>
    <div class="process">
      ${order.steps.map(s => `<div class="step"><h3>${s.icon} ${s.title}</h3><p>${s.text}</p></div>`).join('')}
    </div>
    <a href="${order.button.href}" class="btn btn-order"${order.button.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
      ${order.button.text}
    </a>
  `;
}
