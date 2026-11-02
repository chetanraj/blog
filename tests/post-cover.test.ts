import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { getPostCoverName, postCovers } from '../src/utils/post-cover.ts';

const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');

test('every current article has an explicit cover assignment from the curated set', () => {
  const ids = readdirSync(new URL('../src/content/posts/', import.meta.url));
  assert.equal(ids.length, 13);
  assert.deepEqual(Object.keys(postCovers).sort(), ids.sort());
  assert.equal(new Set(Object.values(postCovers)).size, 10);
  for (const id of [...ids].reverse()) {
    assert.equal(getPostCoverName(id), postCovers[id]);
    const bytes = readFileSync(new URL(`../src/assets/post-covers/${postCovers[id]}.webp`, import.meta.url));
    assert.equal(bytes.subarray(0, 4).toString(), 'RIFF');
    assert.equal(bytes.subarray(8, 12).toString(), 'WEBP');
  }
});

test('future articles get a stable valid fallback without reshuffling existing covers', () => {
  const first = getPostCoverName('future-post');
  assert.equal(getPostCoverName('future-post'), first);
  assert.ok(Object.values(postCovers).includes(first));
  assert.ok(Object.values(postCovers).includes(getPostCoverName('unicode-🌊')));
  assert.ok(Object.values(postCovers).includes(getPostCoverName('toString')));
});

test('cover is decorative, responsive and scoped to individual post headers', () => {
  const cover = read('../src/components/PostCover.astro');
  assert.match(cover, /aria-hidden="true"/);
  assert.match(cover, /alt=""/);
  assert.match(cover, /widths=\{\[480, 800, 1200, 1600\]\}/);
  assert.match(cover, /object-fit: cover/);
  const header = read('../src/components/SiteHeader.astro');
  assert.match(header, /postCoverId && <PostCover/);
  assert.match(header, /!postCoverId && <OrbitalArt/);
  assert.ok(header.indexOf('<PostCover') < header.indexOf('<h1'));
  assert.match(read('../src/pages/posts/[...slug].astro'), /postCoverId=\{post.id\}/);
  assert.doesNotMatch(read('../src/pages/index.astro'), /postCoverId/);
});
