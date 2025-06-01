# Olga’s Kitchen

A demo static site for Olga’s Kitchen, featuring handmade ready meals. Built with [Vite](https://vitejs.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm run dev
```

This will start a local server (usually at http://localhost:5173) with hot module reloading.

### 3. Build for production

```
npm run build
```

This will generate a production-ready build in the `dist/` folder.

### 4. Preview the production build locally

```
npm run preview
```

This will build the project (if not already built) and serve the production build locally for testing.

### 5. Deploy to GitHub Pages

```
npm run deploy
```

This will publish the contents of the `dist/` folder to the `gh-pages` branch of your repository using the [gh-pages](https://www.npmjs.com/package/gh-pages) package.

## Available Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build locally
- `npm run deploy` – Deploy the production build to GitHub Pages
- `npm run serve` – Build and deploy in one step

## Project Structure

- `src/` – Source code (JavaScript, components)
- `public/` – Static assets (images, icons, manifest, etc.)
- `index.html` – Main HTML file
- `vite.config.js` – Vite configuration
- `package.json` – Project metadata and scripts

## Customization

- Update `public/data.json` for product data.
- Add or modify images in `public/products/`.
- Edit components in `src/components/` for UI changes.

## License

This project is for demonstration purposes only.