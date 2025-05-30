# olgas-kitchen-main

A demo static site for Olga’s Kitchen, featuring handmade ready meals, built with Vite.

## Getting Started

Install dependencies:
```
npm install
```

Develop:
```
npm run dev
```

Build for production:
```
npm run build
```

Preview production build:
```
npm run preview
```

## Project Structure

```text
.
├── public/                # Static assets served at root
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── CNAME
│   ├── data.json          # Content configurations
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── logo.png
│   ├── logo.svg
│   └── site.webmanifest
├── src/                   # Application source code
│   ├── data.js            # Data loader
│   ├── main.js            # Entry point
│   ├── setupInteractions.js
│   └── components/        # Render functions for each section
│       ├── header.js
│       ├── nav.js
│       ├── home.js
│       ├── products.js
│       ├── order.js
│       ├── feedback.js
│       ├── contact.js
│       └── footer.js
├── index.html             # Main HTML template
├── style.css              # Global styles (in public/ when deployed)
├── package.json           # NPM scripts & dependencies
├── vite.config.js         # Vite configuration
├── .gitignore             # Ignored files and folders
└── README.md              # Project documentation
```