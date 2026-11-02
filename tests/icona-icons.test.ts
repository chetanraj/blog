import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

test('Icona exports are local, inert outline SVG components with preserved accessibility props', () => {
  const files = readdirSync('src/icons/icona').filter((file) => file.endsWith('.tsx'));
  assert.equal(files.length, 16);
  for (const file of files) {
    const source = readFileSync(`src/icons/icona/${file}`, 'utf8');
    assert.match(source, /viewBox="0 0 24 24"/);
    assert.match(source, /stroke="currentColor"/);
    assert.match(source, /aria-hidden="true"\s+\{\.\.\.props\}/);
    assert.doesNotMatch(source, /dangerouslySetInnerHTML|<script|<foreignObject|\bfetch\(|\beval\(|\bon[A-Z]\w*=/);
    assert.doesNotMatch(source, /href=|src=/);
  }
});

test('Icona mappings retain matched sound fallbacks and preserve original controls', () => {
  const icons = readFileSync('src/icons/index.ts', 'utf8');
  assert.match(icons, /DiceIcon as Dice/);
  assert.match(icons, /Volume2, VolumeX.*from 'react-feather'/);
  assert.match(readFileSync('src/icons/icona/chevron-up.tsx', 'utf8'), /transform="rotate\(180 12 12\)"/);
  assert.match(readFileSync('src/components/CodeCopyButtons.astro', 'utf8'), /Copy, Check, Folder, File.*from '\.\.\/icons'/);
  assert.match(readFileSync('THIRD_PARTY_NOTICES.md', 'utf8'), /MIT License/);
});
