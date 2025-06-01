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
    // determine current language or default to 'de'
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang')?.toLowerCase() || 'de';
    const locale = data[langParam] || data.de;
    renderHeader(locale.siteTitle);
    renderNav(locale.navLinks, data.languages);
    renderHome(locale.sections.home);
    renderProducts(locale.sections.products);
    renderOrder(locale.sections.order);
    renderFeedback(locale.sections.feedback);
    renderContact(locale.sections.contact);
    renderFooter(locale.sections.footer);
    setupInteractions();

    // Dynamically set the page title based on the selected language
    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleElement.textContent = locale.siteTitle;
    }

    // Dynamically set meta description and keywords
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', locale.metaDescription || '');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', locale.metaKeywords || '');
    }

    // Dynamically set the heading for the products section
    const productsHeading = document.querySelector('#produkte h2');
    if (productsHeading) {
      productsHeading.textContent = locale.sections.productsHeading || '✨ Unsere Spezialitäten';
    }
  } catch (err) {
    console.error('Initialization error:', err);
  }
})();

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await getData();
    // select locale for preloading images
    const urlParams2 = new URLSearchParams(window.location.search);
    const langParam2 = urlParams2.get('lang')?.toLowerCase() || 'de';
    const locale2 = data[langParam2] || data.de;
    const productImages = locale2.sections.products.flatMap(product =>
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
