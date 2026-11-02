import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('Atomic Design diagram is bounded and responsive without changing its aspect ratio', () => {
  const source = readFileSync(new URL('../src/content/posts/how-i-structure-react-app/index.mdx', import.meta.url), 'utf8');
  const image = source.match(/<img\s+src=\{AtomicDesign\.src\}[\s\S]*?\/>/)?.[0];
  assert.ok(image);
  assert.match(image, /width=\{640\}/);
  assert.match(image, /height=\{200\}/);
  assert.match(image, /maxWidth: '100%'/);
  assert.match(image, /height: 'auto'/);
  assert.match(image, /display: 'block'/);
  assert.match(image, /alt="Atomic design diagram"/);
  const png = readFileSync(new URL('../src/posts/how-i-structure-react-app/Atomic_Design.png', import.meta.url));
  const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
  assert.equal(640 / 200, width / height);
  assert.ok(640 <= width, 'Do not upscale the diagram');
});
