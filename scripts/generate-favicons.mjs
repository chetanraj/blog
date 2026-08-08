import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = await readFile(join(root, 'public/favicon.svg'));
const outDir = join(root, 'public/favicons');

await mkdir(outDir, { recursive: true });

const sizes = [16, 32, 48, 180, 192, 512];

for (const size of sizes) {
  const buffer = await sharp(svg).resize(size, size).png().toBuffer();
  const name = size === 512 ? 'icon-512x512.png' : `favicon-${size}.png`;
  await writeFile(join(outDir, name), buffer);
}

await writeFile(
  join(outDir, 'icon-48x48.png'),
  await sharp(svg).resize(48, 48).png().toBuffer()
);

console.log(`Generated ${sizes.length + 1} favicon PNGs in public/favicons/`);
