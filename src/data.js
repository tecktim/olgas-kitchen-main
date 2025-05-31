// src/data.js
// Load JSON configuration data
export async function getData() {
  const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.status}`);
  }
  return response.json();
}
