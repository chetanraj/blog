# Blog by Chetan Raj

Astro, React and StyleX blog, served under `/blog/`.

## Development

Use Node.js 24.14.1 or newer and npm 11.10.0 or newer.

```sh
npm ci
npm run dev
```

## Checks and production preview

```sh
npm test
npm run build
npm run preview
```

The tests cover topic filters, typography, article covers, section navigation and ocean controls. The build renders the static routes and validates content imports. `npm run deploy` publishes the built site with GitHub Pages; use it only when a production deployment is intended.

## Content and assets

- Articles live in `src/content/posts/`; `published: false` excludes drafts.
- Post-cover assignments and stable fallbacks live in `src/utils/post-cover.ts`.
- Fonts and cover attribution are documented under `src/assets/`.
- Desloppify scan state is local-only in `.desloppify/` and is not committed. Review scanner findings against Astro's generated routes and entry points before removing code.
