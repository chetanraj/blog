import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

test('article share actions use one theme palette without prose-link overrides', () => {
  const source = readFileSync('src/components/PostShare.astro', 'utf8');
  assert.match(source, /:is\(button, a\)\.post-share-btn \{ color:var\(--color-content\)/);
  assert.match(source, /:is\(:hover, :focus-visible\) \{ color:var\(--color-accent\)/);
  assert.match(readFileSync('src/styles/global.css', 'utf8'), /:not\(\.section-nav-link\):not\(\.post-share-btn\)/);
});
test('landing has a compact unfiltered ending and articles retain sharing without reactions', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  assert.match(home, /class="notebook-ending" aria-label="Explore more"/);
  const endingRule = home.match(/\.notebook-ending \{([^}]+)\}/)?.[1] || '';
  assert.doesNotMatch(endingRule, /border-top/);
  assert.match(home, /display:flex; justify-content:space-between/);
  assert.match(home, /flex:0 1 auto; min-width:0; max-width:calc\(50% - 1rem\)/);
  assert.match(home, /@media\(max-width:640px\) and \(orientation:portrait\)/);
  assert.match(home, /flex-direction:column/);
  assert.match(home, /gap:\.5rem 1rem/);
  assert.match(home, /href=\{`\$\{base\}about\/`\}/);
  assert.match(home, /#main:has\(\.studio-writing\)\) \{ min-height:0/);
  const post = readFileSync('src/pages/posts/[...slug].astro', 'utf8');
  assert.match(post, /<PostShare/);
  assert.doesNotMatch(post, /EmojiReaction/);
  assert.equal(existsSync('src/components/EmojiReaction.astro'), false);
});
