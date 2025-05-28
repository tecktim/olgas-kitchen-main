// Olga’s Kitchen Scripts
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
    const id = btn.getAttribute('aria-controls'),
          details = document.getElementById(id),
          open = details.hasAttribute('hidden');
    document.querySelectorAll('.product-details').forEach(d => {
      if (!d.hasAttribute('hidden')) {
        d.setAttribute('hidden','');
        document.querySelector(`[aria-controls="${d.id}"]`)
                .setAttribute('aria-expanded','false');
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

// Footer ausblenden bei Klick auf Header-Links
const footer = document.querySelector('footer');
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', () => {
    footer.setAttribute('hidden', '');
  });
});
