// src/data.js
// Load JSON configuration data
export async function getData() {
  const response = await fetch('public/data.json');
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.status}`);
  }
  return response.json();
}
