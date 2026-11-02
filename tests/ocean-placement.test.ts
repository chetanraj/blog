import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('ocean is rendered once after individual articles, not in shared page chrome', () => {
  const post = readFileSync('src/pages/posts/[...slug].astro', 'utf8');
  assert.equal((post.match(/<AsciiOcean\s*\/>/g) || []).length, 1);
  assert.ok(post.indexOf('<AsciiOcean />') > post.indexOf('</article>'));
  for (const path of ['src/components/SiteFooter.astro', 'src/layouts/BaseLayout.astro', 'src/pages/index.astro', 'src/pages/about.astro']) {
    assert.doesNotMatch(readFileSync(path, 'utf8'), /AsciiOcean/);
  }
  const footer = readFileSync('src/components/SiteFooter.astro', 'utf8');
  assert.match(footer, /site-footer-copy/);
  assert.match(footer, /site-footer-social-links/);
});
