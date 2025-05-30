// src/components/products.js
// Renders the products section
export function renderProducts(products) {
  const productsDiv = document.querySelector('.products');
  productsDiv.innerHTML = '';
  products.forEach(p => {
    const prodDiv = document.createElement('div');
    prodDiv.className = 'product';
    prodDiv.innerHTML = `
      <img class="product-image" src="${p.mainImage}" alt="${p.name}" loading="lazy">
      <div class="product-header">
        <h3>${p.name}</h3>
        <button class="btn expand" aria-expanded="false" aria-controls="details-${p.id}" aria-label="Mehr Infos zu ${p.name}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <polyline points="6 9 12 15 18 9" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <p>${p.description}</p>
      <div id="details-${p.id}" class="product-details" hidden>
        <h4>Packungsinhalt</h4>
        <p>${p.details.packung}</p>
        <h4>Zubereitung</h4>
        <p>${p.details.zubereitung.join('<br>')}</p>
        <h4>Serviervorschläge</h4>
        <p>${p.details.serviervorschlaege}</p>
        <h4>Nährwerte (100 g)</h4>
        <p>${p.details.naehrwerte}</p>
        <h4>Allergene</h4>
        <p><strong>Enthält:</strong> ${p.allergens.join(', ')}</p>
      </div>
    `;
    productsDiv.appendChild(prodDiv);
  });
}
