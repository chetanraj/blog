import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { getPostCoverIndex } from '../src/utils/post-cover.ts';

const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');

test('cover assignment is deterministic, bounded and independent of post ordering', () => {
  const ids = ['react-recoil', 'how-i-structure-react-app', 'optional-chaining', 'nifty-npm-tips', 'unicode-🌊'];
  const assignments = new Map(ids.map(id => [id, getPostCoverIndex(id, 4)]));
  for (const id of [...ids].reverse()) {
    const index = getPostCoverIndex(id, 4);
    assert.equal(index, assignments.get(id));
    assert.ok(index >= 0 && index < 4);
  }
  assert.ok(new Set(assignments.values()).size > 1);
  assert.equal(getPostCoverIndex('anything', 1), 0);
  assert.throws(() => getPostCoverIndex('post', 0), RangeError);
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
