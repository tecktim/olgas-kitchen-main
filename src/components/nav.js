// src/components/nav.js
// Renders the navigation menu
export function renderNav(navLinks) {
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
}
