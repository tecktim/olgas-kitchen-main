// src/components/contact.js
// Renders the Contact section
export function renderContact(contact) {
  const cSec = document.getElementById('kontakt');
  cSec.innerHTML = `
    <h2>${contact.heading}</h2>
    <p>${contact.text.replace(/\n/g, '<br>')}</p>
    <a href="${contact.button.href}" class="btn-whatsapp"${contact.button.external ? ' target="_blank" rel="noopener noreferrer"' : ''} aria-label="${contact.button.ariaLabel}">
      ${contact.button.text}
    </a>
  `;
}
