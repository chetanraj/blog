# Chetan Raj portfolio (AI slop edition)

Intentionally over-written copy and generic AI SaaS visuals — Vite + React + TypeScript + Tailwind CSS v4.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

This app is separate from the Astro blog at the repo root (which already has its own `vercel.json`). Create a **second** Vercel project for the portfolio:

1. [Import](https://vercel.com/new) `chetanraj/blog` (or Add Project from an existing team).
2. Set **Root Directory** to `portfolio` (do not use the repo root).
3. Framework Preset: Vite (auto-detected from `portfolio/vercel.json`).
4. Build Command: `npm run build` · Output: `dist` · Install: `npm install`.
5. Deploy. Point a domain (e.g. `chetanraj.dev`) at this project if you want the portfolio on the apex; keep the blog project on its current host/path.

Local preview with the CLI (after `vercel login`):

```bash
cd portfolio
npx vercel
```
