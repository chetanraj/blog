import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { mediterraneanScene } from '../src/utils/mediterranean-scene.ts';

test('the original scene is deterministic, bounded character artwork for static rendering', () => {
  const scene = mediterraneanScene();
  assert.deepEqual(scene, mediterraneanScene());
  const runs = Object.values(scene).flat();
  assert.ok(runs.length > 0 && runs.length < 1000);
  for (const run of runs) {
    assert.ok(run.x >= 0 && run.x + run.text.length * 5 <= 1000);
    assert.ok(run.y > 0 && run.y <= 380);
    assert.match(run.text, /^[\x20-\x7e]+$/);
  }
  const component = readFileSync('src/components/MediterraneanScene.astro', 'utf8');
  assert.match(component, /<text x=\{run.x\}/);
  assert.match(component, /prefers-reduced-motion:reduce/);
});

test('one shared seaside footer replaces the article ocean and preserves usable links', () => {
  const footer = readFileSync('src/components/SiteFooter.astro', 'utf8');
  assert.equal((footer.match(/<MediterraneanScene\s*\/>/g) || []).length, 1);
  assert.match(footer, /aria-label="Footer"/);
  assert.match(footer, /aria-label="Pause seaside animation"/);
  assert.match(footer, /!paused && !reduced.matches && !document.hidden/);
  assert.match(footer, /new IntersectionObserver/);
  assert.match(footer, /Built with curiosity\. Written from experience\./);
  assert.doesNotMatch(readFileSync('src/pages/posts/[...slug].astro', 'utf8'), /AsciiOcean/);
  assert.equal(existsSync('src/components/AsciiOcean.astro'), false);
  assert.equal(existsSync('src/utils/ascii-ocean.ts'), false);
});
