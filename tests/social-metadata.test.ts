import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('article social artwork and visible covers use the same stable asset resolver', () => {
  const article = readFileSync('src/pages/posts/[...slug].astro', 'utf8');
  const cover = readFileSync('src/components/PostCover.astro', 'utf8');
  assert.match(article, /src: getPostCover\(post.id\)/);
  assert.match(cover, /getPostCover\(postId\)/);
  assert.match(article, /width: 1200, height: 630, fit: 'cover', format: 'jpeg'/);
  assert.match(article, /new URL\(socialCover.src, SITE.url\).href/);
  assert.match(article, /image=\{socialImage\}/);
});

test('social metadata carries image dimensions and descriptions without changing non-article cards', () => {
  const seo = readFileSync('src/components/SeoHead.astro', 'utf8');
  const layout = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
  for (const prop of ['imageWidth', 'imageHeight', 'imageAlt', 'largeImageCard']) {
    assert.ok(layout.includes(`${prop}={${prop}}`));
  }
  assert.match(seo, /largeImageCard = false/);
  assert.match(seo, /largeImageCard \? "summary_large_image" : "summary"/);
  assert.match(seo, /og:image:width/);
  assert.match(seo, /og:image:height/);
  assert.match(seo, /og:image:alt/);
  assert.match(seo, /twitter:image:alt/);
  assert.match(seo, /image = absoluteUrl\('\/favicons\/icon-512x512.png'\)/);
});
