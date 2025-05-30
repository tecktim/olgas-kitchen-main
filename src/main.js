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

(async function init() {
  try {
    const data = await getData();
    renderHeader(data.siteTitle);
    renderNav(data.navLinks);
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
