import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('About biography and chapter copy retain theme-aware readable colors', () => {
  const page = readFileSync('src/pages/about.astro', 'utf8');
  const story = readFileSync('src/components/AboutStory.astro', 'utf8');
  assert.match(page, /\.about-page \{[^}]*color:var\(--color-content\)/);
  assert.match(page, /\.about-lead \{[^}]*max-width:58ch; color:var\(--color-content\)/);
  assert.match(story, /\.story-chapters p \{[^}]*color:var\(--color-content\)/);
  assert.match(story, /\.story-chapters a \{[^}]*color:var\(--color-accent\)/);
  assert.doesNotMatch(page, /@capper-ui/);
});

test('About story has readable biography, three progressive acts and contact links', () => {
  const page = readFileSync('src/pages/about.astro', 'utf8');
  const story = readFileSync('src/components/AboutStory.astro', 'utf8');
  assert.match(page, /headerTitle="About" compactHeader/);
  assert.match(page, /Hi, I’m Chetan/);
  assert.match(page, /based in Bangalore/);
  for (const id of ['noir', 'arc', 'code']) assert.match(story, new RegExp(`id:'${id}'`));
  assert.match(story, /aria-hidden="true"/);
  assert.match(story, /prefers-reduced-motion: no-preference/);
  assert.match(story, /media\.revert\(\)/);
  assert.match(story, /gsap\.killTweensOf\(panes\)/);
  assert.match(story, /removeProperty\('opacity'\)/);
  assert.match(story, /disconnectedCallback/);
  assert.doesNotMatch(story, /preventDefault|scrollTo\(|ScrollSmoother/);
  assert.match(page, /SITE.author.github/);
  assert.match(page, /SITE.author.instagram/);
});

test('Compact About header is opt-in and does not change article or homepage headers', () => {
  const layout = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
  const header = readFileSync('src/components/SiteHeader.astro', 'utf8');
  assert.match(layout, /compactHeader = false/);
  assert.match(layout, /compact=\{compactHeader\}/);
  assert.match(header, /!compact && <div class:list=\{\["studio-hero"/);
});
