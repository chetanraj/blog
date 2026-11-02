import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { supportsArticleShare, shouldUseNativeXShare, shareArticle, copyArticleLink, initPostShare } from '../src/utils/post-share.ts';
const data = { title: 'Article', text: 'Article', url: 'https://chetanraj.dev/blog/posts/example/' };

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


test('X uses native sharing only for a coarse pointer with a supported payload', () => {
  const supported = { share: async () => {} };
  assert.equal(shouldUseNativeXShare(supported, data, true), true);
  assert.equal(shouldUseNativeXShare(supported, data, false), false);
  assert.equal(shouldUseNativeXShare({}, data, true), false);
  assert.equal(shouldUseNativeXShare({ ...supported, canShare: () => false }, data, true), false);
});

test('X click hands off synchronously, keeps cancellation quiet and offers an explicit web fallback on failure', async () => {
  const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  function element() {
    const listeners: Record<string, (event: any) => Promise<void>> = {};
    const attrs: Record<string, string> = {};
    return { listeners, attrs, hidden: true, disabled: false, textContent: '', title: '', dataset: {},
      setAttribute: (key: string, value: string) => { attrs[key] = value; },
      removeAttribute: (key: string) => { delete attrs[key]; },
      addEventListener: (key: string, fn: any) => { listeners[key] = fn; },
      querySelector: () => element(),
    };
  }
  try {
    for (const scenario of ['success', 'cancel', 'failure', 'unsupported', 'desktop']) {
      let called = 0;
      const api = scenario === 'unsupported' ? {} : { share: async (payload: unknown) => {
        called++;
        assert.deepEqual(payload, data);
        if (scenario === 'cancel') throw { name: 'AbortError' };
        if (scenario === 'failure') throw { name: 'NotAllowedError' };
      } };
      Object.defineProperty(globalThis, 'navigator', { configurable: true, value: api });
      Object.defineProperty(globalThis, 'window', { configurable: true, value: {
        matchMedia: () => ({ matches: scenario !== 'desktop', addEventListener: () => {} }),
      } });
      const selectors = ['[data-native-share]', '[data-x-share]', '[data-x-fallback]', '[data-copy-url]', '[data-share-status]', '[data-manual-copy]'];
      const elements = Object.fromEntries(selectors.map(selector => [selector, element()]));
      elements['[data-copy-url]'].dataset = { copyUrl: data.url };
      const root = { dataset: { shareTitle: data.title }, querySelector: (selector: string) => elements[selector] };
      initPostShare(root as unknown as HTMLElement);
      let prevented = false;
      const event = { button: 0, preventDefault: () => { prevented = true; } };
      const pending = elements['[data-x-share]'].listeners.click(event);
      const usesNative = !['unsupported', 'desktop'].includes(scenario);
      assert.equal(called, usesNative ? 1 : 0, `${scenario}: direct gesture call`);
      assert.equal(prevented, usesNative);
      if (usesNative) {
        await elements['[data-x-share]'].listeners.click(event);
        assert.equal(called, 1, 'repeat clicks while the chooser is pending are ignored');
      }
      await pending;
      assert.equal(elements['[data-native-share]'].disabled, false);
      assert.equal(elements['[data-x-fallback]'].hidden, scenario !== 'failure');
      assert.equal(elements['[data-share-status]'].textContent !== '', scenario === 'failure');
      assert.equal(elements['[data-x-share]'].attrs['aria-label'], usesNative
        ? 'Share via your device (choose X)' : 'Share on X (opens website)');
    }
  } finally {
    if (originalNavigator) Object.defineProperty(globalThis, 'navigator', originalNavigator);
    else Reflect.deleteProperty(globalThis, 'navigator');
    if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
    else Reflect.deleteProperty(globalThis, 'window');
  }
});
