// src/components/products.js
// Renders the products section
export function renderProducts(products) {
  const productsDiv = document.querySelector('.products');
  productsDiv.innerHTML = '';
  products.forEach(p => {
    const prodDiv = document.createElement('div');
    prodDiv.className = 'product';
  // Store images data for gallery interactions
    prodDiv.dataset.images = JSON.stringify(p.images);
    prodDiv.innerHTML = `
      <div class="product-image-wrapper">
        <div class="product-overlay">${p.images[0].overlayText}</div>
        <img class="product-image" src="${import.meta.env.BASE_URL}${p.images[0].src}" alt="${p.name}" loading="lazy">
      </div>
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
  // Setup gallery navigation
    const images = p.images;
    const imgEl = prodDiv.querySelector('img.product-image');
    const overlayEl = prodDiv.querySelector('div.product-overlay');
    let currentIndex = 0;
    const wrapper = prodDiv.querySelector('.product-image-wrapper');
    if (images.length > 1) {
      // Enable fade transition for image swaps
      imgEl.style.opacity = '1';
      imgEl.style.transition = 'opacity 0.3s ease-in-out';
      // Enable fade transition for overlay swaps
      overlayEl.style.opacity = '1';
      overlayEl.style.transition = 'opacity 0.3s ease-in-out';
      function updateImage() {
        const { src, overlayText } = images[currentIndex];
        imgEl.src = import.meta.env.BASE_URL + src;
        overlayEl.textContent = overlayText;
      }
      wrapper.addEventListener('click', e => {
        e.stopPropagation();
        const rect = wrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX < rect.width / 2) {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else {
          currentIndex = (currentIndex + 1) % images.length;
        }
        // fade out, change image, then fade in
        imgEl.style.opacity = '0';
        overlayEl.style.opacity = '0';
        setTimeout(() => {
          updateImage();
          imgEl.style.opacity = '1';
          overlayEl.style.opacity = '1';
        }, 200);
      });
     // Swipe handling for touch and pointer events
     let startX = null;
     // Touch events for mobile
     wrapper.addEventListener('touchstart', e => {
       startX = e.changedTouches[0].clientX;
     });
     wrapper.addEventListener('touchend', e => {
       if (startX === null) return;
       const endX = e.changedTouches[0].clientX;
       const diff = endX - startX;
       if (Math.abs(diff) > 30) {
         // Determine swipe direction
         if (diff > 0) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
         } else {
           currentIndex = (currentIndex + 1) % images.length;
         }
         // Fade transition
         imgEl.style.opacity = '0';
         overlayEl.style.opacity = '0';
         setTimeout(() => {
           updateImage();
           imgEl.style.opacity = '1';
           overlayEl.style.opacity = '1';
         }, 200);
       }
       startX = null;
     });
     // Pointer events for desktop drag
     wrapper.addEventListener('pointerdown', e => {
       startX = e.clientX;
     });
     wrapper.addEventListener('pointerup', e => {
       if (startX === null) return;
       const endX = e.clientX;
       const diff = endX - startX;
       if (Math.abs(diff) > 30) {
         if (diff > 0) {
           currentIndex = (currentIndex - 1 + images.length) % images.length;
         } else {
           currentIndex = (currentIndex + 1) % images.length;
         }
         imgEl.style.opacity = '0';
         overlayEl.style.opacity = '0';
         setTimeout(() => {
           updateImage();
           imgEl.style.opacity = '1';
           overlayEl.style.opacity = '1';
         }, 200);
       }
       startX = null;
     });
    } else {
      wrapper.classList.add('single-image');
    }
    });
}
