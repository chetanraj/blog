import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const handwritten = join(root, 'public/favicon-handwritten.png');
const outDir = join(root, 'public/favicons');

/** JavaScript Essentials brand palette */
const JS_YELLOW = { r: 247, g: 223, b: 30 }; // #f7df1e
const JS_BLACK = { r: 0, g: 0, b: 0 }; // #000000

async function recolorHandwritten(buffer) {
  const { data, info } = await sharp(buffer)
    .resize(512, 512, { fit: 'contain', background: '#f7df1e' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const isInk = a > 64 && r > 210 && g > 210 && b > 210;

    data[i] = isInk ? JS_BLACK.r : JS_YELLOW.r;
    data[i + 1] = isInk ? JS_BLACK.g : JS_YELLOW.g;
    data[i + 2] = isInk ? JS_BLACK.b : JS_YELLOW.b;
    data[i + 3] = 255;
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

await mkdir(outDir, { recursive: true });

const source = await readFile(handwritten);
const pipeline = await recolorHandwritten(source);

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
  <rect width="32" height="32" fill="#f7df1e" />
  <image width="32" height="32" href="data:image/png;base64,${base64}" />
</svg>
`;
await writeFile(join(root, 'public/favicon.svg'), svg);

console.log('Generated favicons: JS yellow (#f7df1e) background, black (#000) cr monogram');
