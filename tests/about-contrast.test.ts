import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('About copy and links use active theme tokens instead of Capper defaults', () => {
  const source = readFileSync('src/pages/about.astro', 'utf8');
  assert.match(source, /static-page about-page/);
  assert.match(source, /\.about-page :global\(p\) \{ color: var\(--color-content\); \}/);
  assert.match(source, /\.about-page :global\(a\) \{ color: var\(--color-accent\); \}/);
});


test('JavaScript Essentials has an inline decorative Instagram mark and matching text metrics', () => {
  const source = readFileSync('src/pages/about.astro', 'utf8');
  assert.match(source, /href="https:\/\/www.instagram.com\/javascriptessentials\/"/);
  assert.match(source, /className="inline-social-link"/);
  assert.match(source, /class="inline-social-icon" aria-hidden="true"><BlogIcon icon=\{Instagram\}/);
  assert.match(source, /\.about-page :global\(\.inline-social-link\) \{ font:inherit; \}/);
});


test('About omits the Find me section but retains the bio and inline Instagram link', () => {
  const source = readFileSync('src/pages/about.astro', 'utf8');
  assert.doesNotMatch(source, /Find me|<Stack as="ul"|<Text as="h2"/);
  assert.match(source, /javascriptessentials/);
  assert.match(source, /Back to all posts/);
  assert.match(readFileSync('src/components/SiteFooter.astro', 'utf8'), /site-footer-social-links/);
});
