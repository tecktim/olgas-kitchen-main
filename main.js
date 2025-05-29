// Olga’s Kitchen Scripts
// Fetch configuration and initialize page
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Set site title
    document.title = data.siteTitle;
    document.querySelector('h1').innerHTML = `<img src="logo.svg" alt="Logo" class="logo"> ${data.siteTitle}`;

    // Build navigation
    const navUl = document.querySelector('nav ul');
    navUl.innerHTML = '';
    data.navLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      li.appendChild(a);
      navUl.appendChild(li);
    });

    // Build Home section
    const home = data.sections.home;
    const homeSec = document.getElementById('home');
    homeSec.innerHTML = `
      <h2>${home.heading}</h2>
      <p>${home.text}</p>
      <a href="${home.button.href}" class="btn">${home.button.text}</a>
    `;

    // Build Products
    const productsDiv = document.querySelector('.products');
    productsDiv.innerHTML = '';
    data.sections.products.forEach(p => {
      const prodDiv = document.createElement('div');
      prodDiv.className = 'product';
      prodDiv.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <button class="btn expand" aria-expanded="false" aria-controls="details-${p.id}">
          Zubereitung & Serviervorschläge
        </button>
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

    // Build Order section
    const order = data.sections.order;
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

    // Build Feedback section
    const fb = data.sections.feedback;
    const fbSec = document.getElementById('feedback');
    fbSec.innerHTML = `
      <h2>${fb.heading}</h2>
      <p>${fb.text}</p>
      <a href="${fb.button.href}" class="btn"${fb.button.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
        ${fb.button.text}
      </a>
    `;

    // Build Contact section
    const c = data.sections.contact;
    const cSec = document.getElementById('kontakt');
    cSec.innerHTML = `
      <h2>${c.heading}</h2>
      <p>${c.text.replace(/\n/g, '<br>')}</p>
      <a href="${c.button.href}" class="btn-whatsapp"${c.button.external ? ' target="_blank" rel="noopener noreferrer"' : ''} aria-label="${c.button.ariaLabel}">
        ${c.button.text}
      </a>
    `;

    // Build Footer
    const f = data.sections.footer;
    const footer = document.querySelector('footer');
    footer.innerHTML = `
      ${f.text}<br>
      <a href="${f.backToTop.href}">${f.backToTop.text}</a>
    `;

    // Initialize interactions
    setupInteractions();
  })
  .catch(console.error);

function setupInteractions() {
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

        // trigger flash after scrolling + delay
        setTimeout(() => {
          targetEl.classList.add('flash');
          // remove class after animation end
          targetEl.addEventListener('animationend', () => {
            targetEl.classList.remove('flash');
          }, { once: true });
        }, 500);
      }
      // Hide footer and close nav
      const footer = document.querySelector('footer');
      footer.setAttribute('hidden', '');
      const nav = document.querySelector('nav');
      nav.classList.remove('open');
      const menuToggle = document.querySelector('.menu-toggle');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
