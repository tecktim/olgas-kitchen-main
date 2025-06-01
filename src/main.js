// src/main.js
// Entry point: orchestrates data fetching and rendering of all components

import { getData } from './data.js';
import { renderHeader } from './components/header.js';
import { renderNav } from './components/nav.js';
import { renderHome } from './components/home.js';
import { renderProducts } from './components/products.js';
import { renderOrder } from './components/order.js';
import { renderFeedback } from './components/feedback.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { setupInteractions } from './setupInteractions.js';
const version = import.meta.env.VITE_APP_VERSION;

(async function init() {
  try {
    const data = await getData();
    renderHeader(data.siteTitle);
-    renderNav(data.navLinks);
+    renderNav(data.navLinks, data.languages);
    renderHome(data.sections.home);
    renderProducts(data.sections.products);
    renderOrder(data.sections.order);
    renderFeedback(data.sections.feedback);
    renderContact(data.sections.contact);
    renderFooter(data.sections.footer);
    setupInteractions();
  } catch (err) {
    console.error('Initialization error:', err);
  }
})();

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await getData();
    const productImages = data.sections.products.flatMap(product =>
      product.images.map(img => {
        const url = `${import.meta.env.BASE_URL}${img.src}`;
        return `${url}?v=${version}`;
      })
    );

    const head = document.head;
    productImages.forEach(srcWithVersion => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = srcWithVersion;
      link.crossOrigin = 'anonymous';
      head.appendChild(link);
    });
  } catch (err) {
    console.error('Error preloading images:', err);
  }
});
