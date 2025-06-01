// src/components/nav.js
// Renders the navigation menu
export function renderNav(navLinks, languages = []) {
  const navUl = document.querySelector('nav ul');
  navUl.innerHTML = '';
  navLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    navUl.appendChild(li);
  });
  // Append single language selector dropdown
  if (languages.length) {
    const li = document.createElement('li');
    li.classList.add('language-selector');
    // Determine current language from URL or default to German
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    let currentLang = languages.find(l => l.code === (langParam ? langParam.toLowerCase() : 'de')) || languages[0];
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('lang-button');
    function updateButton(lang) {
      button.innerHTML = '';
      const btnImg = document.createElement('img');
      btnImg.src = `${import.meta.env.BASE_URL}${lang.icon}`;
      btnImg.alt = lang.code;
      btnImg.width = 32;
      btnImg.height = 24;
      button.appendChild(btnImg);
      const codeSpan = document.createElement('span');
      codeSpan.textContent = ' ' + lang.code.toUpperCase();
      codeSpan.style.fontWeight = 'bold';
      codeSpan.style.marginLeft = '0.5em';
      button.appendChild(codeSpan);
    }
    updateButton(currentLang);
    li.appendChild(button);
    // Dropdown list (exclude current language)
    const dropdown = document.createElement('ul');
    dropdown.classList.add('lang-dropdown', 'hidden');
    function renderDropdown() {
      dropdown.innerHTML = '';
      languages.filter(lang => lang.code !== currentLang.code).forEach(lang => {
        const item = document.createElement('li');
        const a = document.createElement('a');
        a.href = lang.href;
        a.style.display = 'flex';
        a.style.alignItems = 'center';
        const img = document.createElement('img');
        img.src = `${import.meta.env.BASE_URL}${lang.icon}`;
        img.alt = lang.code;
        img.width = 32;
        img.height = 24;
        a.appendChild(img);
        const codeSpan = document.createElement('span');
        codeSpan.textContent = ' ' + lang.code.toUpperCase();
        codeSpan.style.fontWeight = 'bold';
        codeSpan.style.marginLeft = '0.5em';
        a.appendChild(codeSpan);
        a.addEventListener('click', e => {
          e.preventDefault();
          currentLang = lang;
          updateButton(currentLang);
          renderDropdown();
          dropdown.classList.add('hidden');
          // Update URL and reload nav
          if (window.location.search !== lang.href) {
            window.location.search = lang.href;
          }
        });
        item.appendChild(a);
        dropdown.appendChild(item);
      });
    }
    renderDropdown();
    li.appendChild(dropdown);
    navUl.appendChild(li);
    // Toggle dropdown
    button.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
    });
    // Remove previous document click listener if exists
    if (window._langDropdownListener) {
      document.removeEventListener('click', window._langDropdownListener);
    }
    // Hide dropdown when clicking outside
    window._langDropdownListener = function(e) {
      if (!li.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    };
    document.addEventListener('click', window._langDropdownListener);
  }
}
