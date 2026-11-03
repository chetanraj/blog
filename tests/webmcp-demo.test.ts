import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { runReactPostsDemo, initWebMcpDemos } from '../src/utils/webmcp-demo.js';

const tool = { name: 'getPostsByTag', id: 'native-tool' };
const value = { category: 'React', posts: [{ title: '<script>not markup</script>' }] };
function context() {
  return { getTools: async () => [tool], executeTool: async (selected: unknown, input: unknown) => {
    assert.equal(selected, tool); assert.deepEqual(input, { tag: 'React' }); return JSON.stringify(value);
  } };
}

test('Run invokes the discovered native tool with fixed arguments and returns its actual JSON', async () => {
  assert.deepEqual(await runReactPostsDemo(context()), value);
  for (const api of [undefined, {}, { getTools: async () => [] }]) await assert.rejects(runReactPostsDemo(api), /does not support/);
  await assert.rejects(runReactPostsDemo({ ...context(), getTools: async () => [] }), /not registered/);
  await assert.rejects(runReactPostsDemo({ ...context(), executeTool: async () => { throw new Error('permission denied'); } }), /permission denied/);
  await assert.rejects(runReactPostsDemo({ ...context(), executeTool: async () => 'bad json' }), SyntaxError);
  const abort = new AbortController(); abort.abort();
  await assert.rejects(runReactPostsDemo(context(), abort.signal), { name: 'AbortError' });
});

test('the function source displayed and copied is executable and has the same fixed demo behavior', async () => {
  const displayed = vm.runInNewContext(`(${runReactPostsDemo.toString()})`);
  let calls = 0;
  const api = { getTools: async () => [tool], executeTool: async (selected: unknown, input: unknown) => {
    calls++; assert.equal(selected, tool); assert.equal(JSON.stringify(input), '{"tag":"React"}'); return JSON.stringify(value);
  } };
  assert.equal(JSON.stringify(await displayed(api)), JSON.stringify(value));
  assert.equal(calls, 1);
});

function ui(api: any = context(), state = 'ready') {
  function element() {
    return { hidden: true, disabled: true, textContent: '', dataset: {} as Record<string, string>, attrs: {} as Record<string, string>, listeners: {} as Record<string, () => any>,
      addEventListener(name: string, fn: () => any) { this.listeners[name] = fn; },
      setAttribute(name: string, text: string) { this.attrs[name] = text; },
      removeAttribute(name: string) { delete this.attrs[name]; },
    };
  }
  const elements = Object.fromEntries(['status', 'run', 'output', 'message', 'result'].map(name => [`[data-demo-${name}]`, element()]));
  const panel = { dataset: {}, querySelector: (selector: string) => elements[selector] };
  const root = { querySelectorAll: () => [panel] };
  const page = { ...element(), documentElement: { dataset: { webmcpStatus: state } }, modelContext: api };
  const view = element();
  initWebMcpDemos(root, page, view);
  initWebMcpDemos(root, page, view);
  return { elements, page, view, click: elements['[data-demo-run]'].listeners.click };
}

test('header readiness is accurate, unsupported Run is disabled, and registration events enable it', () => {
  const unsupported = ui(null);
  assert.equal(unsupported.elements['[data-demo-status]'].textContent, 'WebMCP unsupported');
  assert.equal(unsupported.elements['[data-demo-run]'].disabled, true);
  const pending = ui(context(), 'registering');
  assert.equal(pending.elements['[data-demo-run]'].disabled, true);
  pending.page.documentElement.dataset.webmcpStatus = 'ready';
  pending.page.listeners['blog:webmcp-status']();
  assert.equal(pending.elements['[data-demo-status]'].textContent, 'WebMCP ready');
  assert.equal(pending.elements['[data-demo-run]'].disabled, false);
  pending.page.documentElement.dataset.webmcpStatus = 'unavailable';
  pending.page.listeners['blog:webmcp-status']();
  assert.equal(pending.elements['[data-demo-run]'].disabled, true);
});

test('Run guards repeated clicks, reports loading and actual output, handles failure and retry', async () => {
  let resolve: (text: string) => void;
  let calls = 0;
  const api = { ...context(), executeTool: () => { calls++; return new Promise<string>(done => { resolve = done; }); } };
  const { elements: e, click } = ui(api);
  const first = click();
  await Promise.resolve();
  await click();
  assert.equal(calls, 1);
  assert.equal(e['[data-demo-run]'].disabled, true);
  assert.match(e['[data-demo-message]'].textContent, /Running/);
  resolve!(JSON.stringify(value)); await first;
  assert.equal(e['[data-demo-run]'].disabled, false);
  assert.equal(e['[data-demo-result]'].textContent, JSON.stringify(value, null, 2));
  assert.equal(e['[data-demo-result]'].hidden, false);
  api.executeTool = async () => { throw new Error('Denied'); };
  await click();
  assert.match(e['[data-demo-message]'].textContent, /Denied/);
  assert.equal(e['[data-demo-result]'].hidden, true);
  api.executeTool = async () => JSON.stringify({ posts: [] });
  await click();
  assert.equal(e['[data-demo-result]'].textContent, '{\n  "posts": []\n}');
});

test('leaving the page cancels the demo and suppresses a late result', async () => {
  let resolve: (text: string) => void;
  const api = { ...context(), executeTool: () => new Promise<string>(done => { resolve = done; }) };
  const { elements: e, click, view } = ui(api);
  const pending = click(); await Promise.resolve();
  view.listeners.pagehide(); resolve!(JSON.stringify(value)); await pending;
  assert.equal(e['[data-demo-result]'].hidden, true);
  assert.match(e['[data-demo-message]'].textContent, /canceled/);
});
