import { palette, rows } from '../assets/footer/santorini.ts';

/** Coalesce precomputed photographic samples into real, selectable SVG text.
 * No image download, raster conversion, animation loop or randomness at runtime.
 */
export function mediterraneanScene(dark = false) {
  return rows.flatMap((row, y) => {
    const runs: { x: number; y: number; ink: number; text: string }[] = [];
    for (let x = 0; x < row.length; x++) {
      const start = x;
      const ink = parseInt(row[x], 16);
      while (x + 1 < row.length && row[x + 1] === row[start]) x++;
      const [r, g, b] = palette[ink];
      const luminance = r * .2126 + g * .7152 + b * .0722;
      const blue = b > r * 1.08;
      const ramp = dark ? '.:=+*#%@' : '@%#*+=:.';
      const glyph = blue ? (luminance > 150 ? ':' : luminance > 120 ? '+' : '#') : ramp[Math.min(7, Math.floor(luminance / 32))];
      runs.push({ x: start * 5, y: y * 5 + 5, ink, text: glyph.repeat(x - start + 1) });
    }
    return runs;
  });
}
export { palette };
