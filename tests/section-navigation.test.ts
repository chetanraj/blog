import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { transitionSectionNavigation as update, getActiveSectionIndex, type SectionNavigationState } from '../src/utils/section-navigation.ts';

test('expand, collapse and repeated hide/show preserve place and keep a recovery path', () => {
  let s: SectionNavigationState = { active: 3, expanded: false, hidden: false };
  s = update(s, { type: 'expand' }, 7); assert.equal(s.expanded, true);
  s = update(s, { type: 'collapse' }, 7); assert.equal(s.expanded, false);
  s = update(s, { type: 'expand' }, 7);
  s = update(s, { type: 'hide' }, 7);
  assert.deepEqual(s, { active: 3, expanded: false, hidden: true });
  s = update(s, { type: 'expand' }, 7); assert.equal(s.expanded, false);
  s = update(s, { type: 'hide' }, 7);
  s = update(s, { type: 'show' }, 7);
  s = update(s, { type: 'show' }, 7);
  assert.deepEqual(s, { active: 3, expanded: false, hidden: false });
});
test('section selection collapses and clamps; scroll tracking preserves explicit visibility', () => {
  const s = { active: 2, expanded: true, hidden: false };
  assert.deepEqual(update(s, { type: 'select', index: 99 }, 7), { active: 6, expanded: false, hidden: false });
  assert.equal(update(s, { type: 'select', index: -1 }, 7).active, 0);
  assert.equal(update(s, { type: 'select', index: 1 }, 1).active, 0);
  assert.deepEqual(update({ ...s, expanded: false, hidden: true }, { type: 'active', index: 4 }, 7), { active: 4, expanded: false, hidden: true });
  assert.deepEqual(update(s, { type: 'active', index: 3 }, 7), { active: 3, expanded: true, hidden: false });
  assert.equal(getActiveSectionIndex([300, 900, 1500], 200), 0);
  assert.equal(getActiveSectionIndex([-200, 190, 800], 200), 1);
  assert.equal(getActiveSectionIndex([-900, -400, 199], 200), 2);
  assert.equal(getActiveSectionIndex([-400, 233.42, 800], 233.19), 1);
  assert.equal(getActiveSectionIndex([-400, 235.2, 800], 233.19), 0);
});
test('progressive enhancement, opaque rail, scoped focus effect and one TOC', () => {
  const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');
  const component = read('../src/components/TableOfContents.astro');
  assert.match(component, /data-nav-details open/);
  assert.match(component, /data-nav-show hidden/);
  assert.match(component, /data-focus-controls hidden/);
  assert.match(component, /background:var\(--bg-color\)/);
  assert.doesNotMatch(component, /backdrop-filter/);
  assert.match(component, /<span class="section-number"/);
  assert.match(component, /\.focus-label\.is-active \{ opacity:1; filter:none/);
  assert.match(component, /prefers-reduced-motion:reduce/);
  const post = read('../src/pages/posts/[...slug].astro');
  assert.equal((post.match(/<TableOfContents/g) || []).length, 1);
  assert.doesNotMatch(post, /post-toc-aside|post-toc-mobile/);
  assert.match(read('../src/styles/global.css'), /body\.has-section-navigation \{\s*overflow-x: clip;/);
  assert.match(read('../src/styles/global.css'), /scroll-margin-top: var\(--article-nav-clearance, 1.5rem\)/);
});

test('compact row is the only collapsed UI; camera and stepping controls belong to expanded details', () => {
  const component = readFileSync(new URL('../src/components/TableOfContents.astro', import.meta.url), 'utf8');
  const behavior = readFileSync(new URL('../src/utils/section-navigation.ts', import.meta.url), 'utf8');
  assert.doesNotMatch(component, /SoundToggle|data-nav-disclosure-label/);
  assert.match(component, /data-nav-compact hidden/);
  assert.match(component, /data-nav-toggle aria-controls=\{detailsId\}/);
  assert.match(component, /class="compact-title" data-nav-current/);
  const details = component.slice(component.indexOf('<details '), component.indexOf('</details>'));
  for (const control of ['data-focus-controls', 'data-nav-prev', 'data-nav-next', 'data-focus-track', 'data-section-link']) {
    assert.ok(details.includes(control), `${control} must be hidden by collapsed native details`);
  }
  assert.doesNotMatch(details, /data-nav-toggle/);
  assert.match(component, /\[data-enhanced\] \.section-nav-summary \{ display:none;/);
  assert.match(behavior, /\[data-nav-current\].*textContent = current/);
  assert.match(behavior, /event.key === 'Escape'/);
  assert.match(behavior, /dispatch\(\{ type: 'collapse' \}\); toggle.focus\(\)/);
  assert.match(behavior, /jump\(state.active - 1, true, true, false\)/);
  assert.match(behavior, /jump\(state.active \+ 1, true, true, false\)/);
  assert.match(behavior, /event.persisted/);
});
