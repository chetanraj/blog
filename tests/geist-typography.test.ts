import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');
const css = read('../src/styles/studio.css');
test('Serif is scoped to titles, uses real regular weight and inherits through Capper links', () => {
  assert.match(css, /\.studio-intro h1,\.featured-note h2,\.notebook-row h3,\.archive-title,\.post-pager-title \{\s*font-family:var\(--studio-title-font\); font-weight:400; font-synthesis:none;/);
  assert.match(css, /\.featured-note h2 a,\.notebook-row h3 a \{ font-family:inherit; font-weight:inherit; font-synthesis:none; \}/);
  assert.match(read('../src/styles/header.stylex.ts'), /fontFamily: 'var\(--studio-title-font\)'/);
  assert.doesNotMatch(css, /--c-font-code\s*:/);
  assert.match(css, /\.featured-note h2 a:is\(:hover,:focus-visible\) \{ color:var\(--color-accent\); text-decoration:none; \}/);
  assert.match(css, /\.featured-note h2 a:focus-visible \{ outline:2px solid var\(--color-accent\);/);
  assert.match(read('../src/styles/trends.css'), /--trend-font-body: 'Plus Jakarta Sans'/);
});
test('both self-hosted Geist faces are present, declared at 400 and licensed', () => {
  const faces = read('../src/styles/fonts.css');
  for (const [family, file] of [['Geist Serif', 'geist-serif-regular'], ['Geist Mono', 'geist-mono-regular']]) {
    assert.ok(faces.includes(`font-family: '${family}'`));
    assert.ok(faces.includes(`${file}.woff2`));
    const bytes = readFileSync(new URL(`../src/assets/fonts/${file}.woff2`, import.meta.url));
    assert.equal(bytes.subarray(0, 4).toString(), 'wOF2');
    assert.ok(bytes.length > 10000);
  }
  assert.match(read('../src/assets/fonts/GEIST-OFL.txt'), /SIL OPEN FONT LICENSE Version 1.1/);
});
