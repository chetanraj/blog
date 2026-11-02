import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('ocean play/pause icons keep accessible action names, target size and motion state', () => {
  const source = readFileSync('src/components/AsciiOcean.astro', 'utf8');
  assert.match(source, /aria-label="Pause ocean" title="Pause ocean"/);
  assert.match(source, /data-ocean-play hidden><BlogIcon icon=\{Play\}/);
  assert.match(source, /data-ocean-pause><BlogIcon icon=\{Pause\}/);
  assert.match(source, /width: 44px; height: 44px/);
  assert.match(source, /button\.setAttribute\('aria-label', action\)/);
  assert.match(source, /button\.title = action/);
  assert.match(source, /\[data-ocean-play\]'\)!\.hidden = !paused/);
  assert.match(source, /\[data-ocean-pause\]'\)!\.hidden = paused/);
  assert.match(source, /let paused = reduced\.matches/);
  assert.match(source, /paused=!paused; sync\(\)/);
  assert.doesNotMatch(source, /button\.textContent=/);
});


test('random control is an accessible shuffle icon without changing composition behavior', () => {
  const source = readFileSync('src/components/AsciiOcean.astro', 'utf8');
  assert.match(source, /aria-label="Randomize shark composition" title="Randomize shark composition"><BlogIcon icon=\{Shuffle\}/);
  assert.match(source, /\.ocean-toggle, \.ocean-random \{ display: inline-flex/);
  assert.match(source, /composition = nextComposition\(composition\)/);
  assert.match(source, /announcement.textContent =/);
  assert.doesNotMatch(source, />Random<\/button>/);
});
