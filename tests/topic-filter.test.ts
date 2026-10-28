import test from 'node:test';
import assert from 'node:assert/strict';
import { getTopicFilterState, initTopicFilters } from '../src/utils/topic-filter.ts';

const tags = [['react', 'tailwind', 'es6'], ['react', 'typescript'], ['css'], []];
test('React selects matching posts, not their co-occurring tags', () => {
  const selected = new Set(['react']);
  const state = getTopicFilterState(tags, selected);
  assert.deepEqual(state.matches, [true, true, false, false]);
  assert.deepEqual([...state.available], ['react', 'tailwind', 'es6', 'typescript']);
  assert.deepEqual([...selected], ['react']);
});
test('multiple topics use AND, including the latest note', () => {
  const state = getTopicFilterState(tags, new Set(['react', 'tailwind']));
  assert.deepEqual(state.matches, [true, false, false, false]);
  assert.equal(state.count, 1);
  assert.equal(state.available.has('typescript'), false);
});
test('reset, empty results and empty collections are supported', () => {
  assert.deepEqual(getTopicFilterState(tags, new Set()).matches, [true, true, true, true]);
  assert.equal(getTopicFilterState(tags, new Set(['unknown'])).count, 0);
  assert.equal(getTopicFilterState([], new Set()).count, 0);
});

// Small DOM stand-ins exercise the same event wiring used by the Astro page.
class Element {
  dataset: Record<string, string> = {};
  attrs: Record<string, string> = {};
  listeners: Record<string, () => void> = {};
  hidden = false;
  disabled = false;
  textContent = '';
  setAttribute(name: string, value: string) { this.attrs[name] = value; }
  addEventListener(name: string, handler: () => void) { this.listeners[name] = handler; }
  click() { this.listeners.click?.(); }
}
function fixture() {
  const topics = [...new Set(tags.flat())];
  const buttons = topics.map(topic => Object.assign(new Element(), { dataset: { topic } }));
  const notes = tags.map(topics => Object.assign(new Element(), { dataset: { topics: JSON.stringify(topics) } }));
  const reset = new Element(), results = new Element(), empty = new Element();
  const root = {
    querySelectorAll: (selector: string) => selector === '[data-topic]' ? buttons : notes,
    querySelector: (selector: string) => ({ '[data-topic-reset]': reset, '.filter-results': results, '.filter-empty': empty })[selector],
  };
  initTopicFilters(root as unknown as HTMLElement);
  return { buttons: Object.fromEntries(buttons.map(button => [button.dataset.topic, button])), notes, reset, results, empty };
}
test('selection, disabled combinations, deselection, repeated clicks and reset update the UI', () => {
  const { buttons: b, notes, reset, results, empty } = fixture();
  assert.equal(reset.attrs['aria-pressed'], 'true');
  assert.equal(results.textContent, '4 notes');
  b.react.click();
  assert.equal(b.react.attrs['aria-pressed'], 'true');
  assert.equal(b.tailwind.attrs['aria-pressed'], 'false');
  assert.equal(b.tailwind.disabled, false);
  assert.equal(b.css.disabled, true);
  assert.deepEqual(notes.map(n => n.hidden), [false, false, true, true]);
  b.css.click(); // Defensive guard, even a programmatic click cannot select disabled tags.
  assert.equal(b.css.attrs['aria-pressed'], 'false');
  b.tailwind.click();
  assert.equal(results.textContent, '1 note tagged react + tailwind');
  assert.equal(b.typescript.disabled, true);
  assert.equal(b.react.disabled, false);
  b.react.click();
  assert.equal(results.textContent, '1 note tagged tailwind');
  b.tailwind.click();
  assert.equal(results.textContent, '4 notes');
  b.react.click(); b.react.click(); b.react.click();
  reset.click(); reset.click();
  assert.equal(results.textContent, '4 notes');
  assert.equal(empty.hidden, true);
  assert.ok(Object.values(b).every(button => !button.disabled && button.attrs['aria-pressed'] === 'false'));
  assert.ok(notes.every(note => !note.hidden));
});
