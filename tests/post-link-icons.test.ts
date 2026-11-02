import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('post links use shared decorative Feather arrows rather than text glyphs', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  assert.doesNotMatch(home, /↗/);
  assert.equal((home.match(/<BlogIcon icon=\{ArrowUpRight\}/g) ?? []).length, 5);
  assert.match(home, /post.data.title\}<span class="link-arrow" aria-hidden="true"><BlogIcon/);
  const adjacent = readFileSync('src/components/RelatedPosts.astro', 'utf8');
  assert.match(adjacent, /icon=\{ArrowLeft\}/);
  assert.match(adjacent, /icon=\{ArrowRight\}/);
});
