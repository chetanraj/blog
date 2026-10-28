import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/studio.css', import.meta.url), 'utf8');
test('tags share existing monospace token and normal weight, not their surrounding metadata', () => {
  assert.match(css, /\.notebook-filters button,\.note-topics,\.notebook-meta>span,\s*\.post-tag-link,\.tag-pill-link,\.topic-label \{ font-family:var\(--c-font-code\); font-weight:400; \}/);
  assert.doesNotMatch(css, /button\[aria-pressed='true'\][^}]*font-weight/);
  assert.doesNotMatch(css, /\.note-topics \{[^}]*font-weight:750/);
  assert.match(css, /\.notebook-meta \{[^}]*font-size:\.8125rem/);
  assert.match(css, /\.notebook-filters button \{[^}]*font-size:\.875rem/);
  assert.match(css, /\.note-topics \{[^}]*font-size:\.75rem/);
});
test('article and topic-directory badges expose an explicit typography hook', () => {
  for (const path of ['../src/pages/posts/[...slug].astro', '../src/pages/tags/index.astro']) {
    assert.match(readFileSync(new URL(path, import.meta.url), 'utf8'), /<Badge variant="accent" size="sm" className="topic-label">/);
  }
});
