import test from 'node:test';
import assert from 'node:assert/strict';
import { copyCodeSource, initCodePresenters } from '../src/utils/code-presenter.ts';

test('copy preserves exact whitespace and source characters without highlighted HTML', async () => {
  const source = '\n  const sample = "<script>& \\"quoted\\"";\r\n\n';
  let copied = '';
  assert.equal(await copyCodeSource(source, { writeText: async text => { copied = text; } }), true);
  assert.equal(copied, source);
  assert.equal(await copyCodeSource(source, undefined), false);
  assert.equal(await copyCodeSource(source, { writeText: async () => { throw new Error('denied'); } }), false);
  assert.equal(await copyCodeSource(source, { writeText: () => { throw new Error('sync failure'); } }), false);
});

test('copy control initializes once, handles pending clicks, failure and retry with accessible feedback', async () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  const source = '  const text = "</script> & <div>";\n';
  let calls = 0;
  let finish: () => void;
  let fail = false;
  const handlers: Array<() => Promise<void>> = [];
  const button = { hidden: true, disabled: false, dataset: {} as Record<string, string>, addEventListener: (_event: string, handler: () => Promise<void>) => handlers.push(handler) };
  const status = { textContent: '', dataset: {} as Record<string, string> };
  const elements = { '[data-code-copy]': button, '[data-code-status]': status, '[data-code-source]': { textContent: JSON.stringify(source) } };
  const panel = { dataset: {} as Record<string, string>, querySelector: (selector: keyof typeof elements) => elements[selector] };
  const root = { querySelectorAll: () => [panel] } as unknown as ParentNode;
  try {
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText: async (value: string) => {
      calls++; assert.equal(value, source);
      if (fail) throw new Error('denied');
      await new Promise<void>(resolve => { finish = resolve; });
    } } } });
    initCodePresenters(root); initCodePresenters(root);
    assert.equal(handlers.length, 1);
    assert.equal(button.hidden, false);
    const first = handlers[0]();
    await handlers[0]();
    assert.equal(calls, 1);
    assert.equal(button.disabled, true);
    finish!(); await first;
    assert.equal(button.disabled, false);
    assert.equal(status.textContent, 'Copied');
    assert.equal(status.dataset.error, 'false');
    assert.equal(button.dataset.copied, 'true');
    fail = true; await handlers[0]();
    assert.equal(button.disabled, false);
    assert.equal(button.dataset.copied, 'false');
    assert.match(status.textContent, /Select the code/);
    assert.equal(status.dataset.error, 'true');
    fail = false;
    const retry = handlers[0]();
    assert.equal(status.dataset.error, undefined);
    finish!(); await retry;
    assert.equal(status.textContent, 'Copied');
    assert.equal(status.dataset.error, 'false');
  } finally {
    if (original) Object.defineProperty(globalThis, 'navigator', original);
    else Reflect.deleteProperty(globalThis, 'navigator');
  }
});

test('missing clipboard and malformed source leave manual code selection available without broken controls', () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
  try {
    for (const source of ['not json', '12', JSON.stringify('code')]) {
      const button = { hidden: true };
      const panel = { dataset: {}, querySelector: (selector: string) => selector === '[data-code-copy]' ? button : selector === '[data-code-source]' ? { textContent: source } : {} };
      Object.defineProperty(globalThis, 'navigator', { configurable: true, value: source === JSON.stringify('code') ? {} : { clipboard: { writeText: async () => {} } } });
      assert.doesNotThrow(() => initCodePresenters({ querySelectorAll: () => [panel] } as unknown as ParentNode));
      assert.equal(button.hidden, true);
    }
  } finally {
    if (original) Object.defineProperty(globalThis, 'navigator', original);
    else Reflect.deleteProperty(globalThis, 'navigator');
  }
});
