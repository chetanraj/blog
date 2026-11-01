# Plus Jakarta Sans

Unmodified variable WOFF2 files from Tokotype's official repository:
https://github.com/tokotype/PlusJakartaSans/tree/18d1cd2f7ea10481919d2f05c1f7064b7307fc26/fonts/webfonts

Original files: `PlusJakartaSans[wght].woff2` and `PlusJakartaSans-Italic[wght].woff2`.
Both support weights 200–800. Distributed under the accompanying SIL Open Font License (`OFL.txt`).
CSS loads these locally through Astro/Vite; no third-party font requests. Unsupported characters fall back to the system/emoji stack.

## Geist display and tag faces

- Source: official Vercel `geist@1.9.0` npm package, https://registry.npmjs.org/geist/-/geist-1.9.0.tgz (repository https://github.com/vercel/geist-font).
- Unmodified `GeistSerif-Regular.woff2` and `GeistMono-Regular.woff2`, renamed only for local filenames.
- License: SIL Open Font License 1.1, included as `GEIST-OFL.txt`.
- Serif is a display face released at Regular/400 only. Title styles explicitly use 400 and disable synthetic weight/style. Geist Mono Regular is limited to tags; existing body/navigation and code font tokens are unchanged.
