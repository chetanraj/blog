import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { categories, categoryForTag, getPostCategory, postCategories } from '../src/utils/categories.ts';

test('all published source posts have one primary category from exactly five', () => {
  assert.equal(new Set(categories).size, 5);
  const ids = readdirSync('src/content/posts');
  assert.deepEqual(Object.keys(postCategories).sort(), ids.sort());
  const counts = new Map(categories.map(category => [category, 0]));
  for (const id of ids) {
    const category = getPostCategory({ id, data: {} });
    assert.ok(categories.includes(category));
    counts.set(category, counts.get(category)! + 1);
  }
  assert.ok([...counts.values()].every(count => count > 0));
  assert.equal(getPostCategory({ id: 'how-i-make-npm-wait-a-day-before-installing', data: {} }), 'Tools & Workflow');
});

test('case duplicates and legacy vocabulary resolve without exposing extra categories', () => {
  assert.equal(categoryForTag(' React '), categoryForTag('react'));
  for (const id of readdirSync('src/content/posts')) {
    const file = readdirSync(`src/content/posts/${id}`).find(name => /^index\.mdx?$/.test(name))!;
    const tags = readFileSync(`src/content/posts/${id}/${file}`, 'utf8').match(/^tags: \[(.*?)\]/m)?.[1].match(/'([^']+)'/g) ?? [];
    for (const tag of tags) assert.ok(categoryForTag(tag.slice(1, -1)), tag);
  }
  assert.equal(getPostCategory({ id: 'future', data: { tags: ['NPM'] } }), 'Tools & Workflow');
});
