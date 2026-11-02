import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { mediterraneanScene, palette } from '../src/utils/mediterranean-scene.ts';

test('Santorini samples produce deterministic bounded text runs for build-time SVGs', () => {
  const runs = mediterraneanScene();
  assert.deepEqual(runs, mediterraneanScene());
  assert.ok(runs.length > 0 && runs.length < 6500);
  for (const run of runs) {
    assert.ok(run.x >= 0 && run.x + run.text.length * 5 <= 1000);
    assert.ok(run.y > 0 && run.y <= 625);
    assert.ok(run.ink >= 0 && run.ink < palette.length);
    assert.match(run.text, /^[.@#%*+=:]+$/);
  }
  const endpoint = readFileSync('src/pages/art/santorini-[theme].svg.ts', 'utf8');
  assert.match(endpoint, /getStaticPaths/);
  assert.match(endpoint, /<text x=/);
});

test('one static credited scene replaces the ocean without runtime conversion or animation controls', () => {
  const footer = readFileSync('src/components/SiteFooter.astro', 'utf8');
  assert.equal((footer.match(/<MediterraneanScene\s*\/>/g) || []).length, 1);
  assert.match(footer, /aria-label="Footer"/);
  assert.match(footer, /Photo by Florian Wehde/);
  assert.match(footer, /Built with curiosity\. Written from experience\./);
  assert.doesNotMatch(footer, /terrace-toggle|<script/);
  assert.doesNotMatch(readFileSync('src/components/MediterraneanScene.astro', 'utf8'), /<script|canvas|animation/);
  assert.doesNotMatch(readFileSync('src/pages/posts/[...slug].astro', 'utf8'), /AsciiOcean/);
  assert.equal(existsSync('src/components/AsciiOcean.astro'), false);
});
