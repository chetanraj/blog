import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('About copy and links use active theme tokens instead of Capper defaults', () => {
  const source = readFileSync('src/pages/about.astro', 'utf8');
  assert.match(source, /static-page about-page/);
  assert.match(source, /\.about-page :global\(p\),\s*\.about-page :global\(li\) \{ color: var\(--color-content\); \}/);
  assert.match(source, /\.about-page :global\(h2\),\s*\.about-page :global\(a\) \{ color: var\(--color-accent\); \}/);
});
