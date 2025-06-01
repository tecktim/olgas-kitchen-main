// src/setupInteractions.js
// Contains all DOM interaction setup
export function setupInteractions() {

  
  // Burger-Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  // Produkt-Details Toggle
  document.querySelectorAll('.expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('aria-controls');
      const details = document.getElementById(id);
      const open = details.hasAttribute('hidden');
      document.querySelectorAll('.product-details').forEach(d => {
        if (!d.hasAttribute('hidden')) {
          d.setAttribute('hidden','');
          document.querySelector(`[aria-controls="${d.id}"]`).setAttribute('aria-expanded','false');
        }
      });
      if (open) {
        details.removeAttribute('hidden');
        btn.setAttribute('aria-expanded','true');
      } else {
        details.setAttribute('hidden','');
        btn.setAttribute('aria-expanded','false');
      }
    });
  });

  // Toggle details when clicking on the product card
  document.querySelectorAll('.product').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('button.expand')) {
        card.querySelector('button.expand').click();
      }
    });
  });

  // Footer hide on nav link click
  document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      const headerHeight = document.querySelector('header').offsetHeight;
      if (targetEl) {
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        history.pushState(null, '', targetId);

        setTimeout(() => {
          targetEl.classList.add('flash');
          targetEl.addEventListener('animationend', () => {
            targetEl.classList.remove('flash');
          }, { once: true });
        }, 500);
      }
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll for "Jetzt entdecken" button with header offset
  const discoverBtn = document.querySelector('.hero .btn');
  if (discoverBtn) {
    discoverBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const href = discoverBtn.getAttribute('href');
      const navLink = document.querySelector(`header nav a[href="${href}"]`);
      if (navLink) navLink.click();
    });
  }

  // Hero dynamic height adjustment
  function setHeroHeight() {
    const header = document.querySelector('header');
    const hero   = document.querySelector('.hero');
    if (!header || !hero) return;
    const headerHeight = header.getBoundingClientRect().height;
    hero.style.height  = `${window.innerHeight - headerHeight}px`;
  }
  setHeroHeight();
}
