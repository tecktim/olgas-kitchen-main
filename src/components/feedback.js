// src/components/feedback.js
// Renders the Feedback section
export function renderFeedback(feedback) {
  const fbSec = document.getElementById('feedback');
  fbSec.innerHTML = `
    <h2>${feedback.heading}</h2>
    <p>${feedback.text}</p>
    <a href="${feedback.button.href}" class="btn"${feedback.button.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
      ${feedback.button.text}
    </a>
  `;
}
