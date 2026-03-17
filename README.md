# Implicit Security

Business website for Implicit Security, an AI-powered cybersecurity company. Built with React, TypeScript, Vite, and Tailwind CSS.

## Pages

- **Home** — Hero section with animated terminal demo, feature grid, stats, and CTA
- **Services** — Detailed breakdown of six core offerings (threat detection, cloud security, EDR, zero trust identity, data security, SOC automation)
- **About** — Mission, core values, team bios, testimonials, trust center, and FAQ
- **Contact** — Contact form, company info, and 24/7 incident response callout

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7
- Motion (Framer Motion) for animations
- Lucide React for icons

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start dev server on port 3000 |
| `npm run build`   | Production build             |
| `npm run preview` | Preview production build     |
| `npm run clean`   | Remove `dist` folder         |
| `npm run lint`    | Type-check with `tsc`        |

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

| Variable         | Description                        |
| ---------------- | ---------------------------------- |
| `GEMINI_API_KEY` | API key for Google Gemini AI calls |
| `APP_URL`        | URL where the app is hosted        |

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```
