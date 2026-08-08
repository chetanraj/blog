import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const handwritten = join(root, 'public/favicon-handwritten.png');
const outDir = join(root, 'public/favicons');

await mkdir(outDir, { recursive: true });

const source = await readFile(handwritten);
const pipeline = sharp(source).resize(512, 512, { fit: 'contain', background: '#0a0a0a' });

const sizes = [16, 32, 48, 180, 192, 512];

for (const size of sizes) {
  const buffer = await pipeline.clone().resize(size, size).png().toBuffer();
  const name = size === 512 ? 'icon-512x512.png' : `favicon-${size}.png`;
  await writeFile(join(outDir, name), buffer);
}

const icon48 = await pipeline.clone().resize(48, 48).png().toBuffer();
await writeFile(join(outDir, 'icon-48x48.png'), icon48);

const icon32 = await pipeline.clone().resize(32, 32).png().toBuffer();
const base64 = icon32.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Chetan Raj">
  <image width="32" height="32" href="data:image/png;base64,${base64}" />
</svg>
`;
await writeFile(join(root, 'public/favicon.svg'), svg);

console.log(`Generated ${sizes.length + 1} favicon PNGs and favicon.svg from handwritten source`);
