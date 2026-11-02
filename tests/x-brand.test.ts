import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('all social uses resolve to the official X mark, not the old bird or close icon', () => {
  const exports = readFileSync('src/icons/index.ts', 'utf8');
  assert.match(exports, /export \{ X \} from '.\/X'/);
  assert.doesNotMatch(exports, /Twitter as X/);
  const logo = readFileSync('src/icons/X.tsx', 'utf8');
  assert.match(logo, /viewBox="0 0 1200 1227"/);
  assert.match(logo, /fill="currentColor" stroke="none"/);
  assert.match(logo, /M714.163 519.284/);
  const seo = readFileSync('src/components/SeoHead.astro', 'utf8');
  assert.match(seo, /name="twitter:card"/);
});
