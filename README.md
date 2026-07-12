# Next.js Hello World

A minimal Next.js (App Router) starter project. It renders a "Hello, World!" page with a small interactive form: enter a number and get its square, cube, square root, and even/odd status.

## Project structure

```
nextjs_hello_world/
├── app/
│   ├── layout.js       # Root layout (html/body shell, metadata)
│   └── page.js         # Home route, renders NumberCalculator
├── components/
│   ├── NumberCalculator.jsx         # UI + state (client component)
│   └── NumberCalculator.module.css  # Styles, scoped to the component
├── lib/
│   └── calculations.js # Pure math logic (square, cube, sqrt, even/odd)
├── jsconfig.json       # Enables the "@/" import alias
├── package.json
└── .gitignore
```

The project keeps three concerns separate:

- **Logic** (`lib/calculations.js`) — plain functions, no React or styling involved.
- **UI** (`components/NumberCalculator.jsx`) — handles form state and calls into the logic layer.
- **Style** (`components/NumberCalculator.module.css`) — a CSS Module scoped to the component, so class names never leak or collide.

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm run start
```

## Requirements

- Node.js 18.18 or later
- npm
