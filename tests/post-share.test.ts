import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { supportsArticleShare, shareArticle, copyArticleLink } from '../src/utils/post-share.ts';
const data = { title: 'Article', text: 'Article', url: 'https://chetanraj.in/blog/posts/example/' };

test('native share is progressive and handles unsupported or rejected capability checks', () => {
  assert.equal(supportsArticleShare({}, data), false);
  assert.equal(supportsArticleShare({ share: async () => {} }, data), true);
  assert.equal(supportsArticleShare({ share: async () => {}, canShare: () => false }, data), false);
  assert.equal(supportsArticleShare({ share: async () => {}, canShare: () => { throw Error('policy'); } }, data), false);
});
test('native API is invoked synchronously from gesture path with title/text/canonical URL', async () => {
  let invoked = false;
  const result = shareArticle({ share: async payload => { assert.deepEqual(payload, data); invoked = true; } }, data);
  assert.equal(invoked, true);
  assert.equal(await result, 'handed-off');
});
test('cancel is quiet; permission, synchronous failures and unsupported API are recoverable', async () => {
  assert.equal(await shareArticle({ share: async () => { throw { name: 'AbortError' }; } }, data), 'cancelled');
  assert.equal(await shareArticle({ share: async () => { throw { name: 'NotAllowedError' }; } }, data), 'failed');
  assert.equal(await shareArticle({ share: () => { throw Error('sync'); } }, data), 'failed');
  assert.equal(await shareArticle({}, data), 'failed');
  assert.equal(await shareArticle({ share: async () => {} }, data), 'handed-off');
});
test('clipboard success, denial, synchronous failure, missing API and retry are handled', async () => {
  assert.equal(await copyArticleLink({}, data.url), false);
  assert.equal(await copyArticleLink({ clipboard: { writeText: async () => { throw Error('denied'); } } }, data.url), false);
  assert.equal(await copyArticleLink({ clipboard: { writeText: () => { throw Error('sync'); } } }, data.url), false);
  let copied = '';
  assert.equal(await copyArticleLink({ clipboard: { writeText: async text => { copied = text; } } }, data.url), true);
  assert.equal(copied, data.url);
});
test('web links are explicit, no asynchronous popup fallback, manual-copy and live feedback present', () => {
  const source = readFileSync('src/components/PostShare.astro', 'utf8');
  const behavior = readFileSync('src/utils/post-share.ts', 'utf8');
  assert.match(source, /data-native-share hidden/);
  assert.match(source, /data-copy-url=\{url\} hidden/);
  assert.match(source, /Share on X \(opens website\)/);
  assert.match(source, /Share on LinkedIn \(opens website\)/);
  assert.match(source, /https:\/\/x.com\/intent\/post/);
  assert.match(source, /role="status"/);
  assert.match(source, /data-manual-copy hidden/);
  assert.doesNotMatch(behavior, /window.open|location.assign|execCommand/);
  assert.match(behavior, /if \(native.disabled\) return/);
  assert.match(behavior, /if \(copy.disabled\) return/);
});
