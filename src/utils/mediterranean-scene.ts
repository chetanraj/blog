/** Original character illustration: a quiet terrace above the Mediterranean.
 * Rasterise our own simple geometry to type, then coalesce runs for a small SVG.
 * The output is deterministic and rendered at build time, including without JS.
 */
export type Ink = 'sea' | 'deep' | 'foam' | 'mountain' | 'plaster' | 'shade' | 'roof' | 'tile' | 'teal' | 'leaf';
type Point = readonly [number, number];
export type Run = { x: number; y: number; ink: Ink; text: string };
const W = 200, H = 76, DX = 5, DY = 5;
type Cell = { ink: Ink; char: string } | undefined;

function field() {
  const cells: Cell[][] = Array.from({ length: H }, () => Array(W));
  const mark = (x: number, y: number, ink: Ink, glyph?: string) => {
    const c = Math.floor(x / DX), r = Math.floor(y / DY);
    if (c < 0 || c >= W || r < 0 || r >= H) return;
    const grain = ((c * 13 + r * 7) % 19);
    cells[r][c] = { ink, char: glyph ?? (grain < 3 ? '+' : grain < 9 ? '#' : '%') };
  };
  const area = (inside: (x: number, y: number) => boolean, ink: Ink, glyph?: string) => {
    for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) {
      if (inside(c * DX + DX / 2, r * DY + DY / 2)) mark(c * DX, r * DY, ink, glyph);
    }
  };
  const poly = (points: readonly Point[], ink: Ink, glyph?: string) => area((x, y) => {
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
      const [xi, yi] = points[i], [xj, yj] = points[j];
      if (((yi > y) !== (yj > y)) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }, ink, glyph);
  const rect = (x: number, y: number, w: number, h: number, ink: Ink, glyph?: string) => area((u, v) => u >= x && u < x + w && v >= y && v < y + h, ink, glyph);
  const ellipse = (x: number, y: number, rx: number, ry: number, ink: Ink, glyph?: string) => area((u, v) => ((u - x) / rx) ** 2 + ((v - y) / ry) ** 2 <= 1, ink, glyph);
  const line = (a: Point, b: Point, ink: Ink, glyph = '/') => {
    const n = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 2);
    for (let i = 0; i <= n; i++) mark(a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n, ink, glyph);
  };
  const runs = (): Run[] => cells.flatMap((row, r) => {
    const result: Run[] = [];
    for (let c = 0; c < W; c++) {
      const cell = row[c];
      if (!cell) continue;
      const start = c;
      let text = cell.char;
      while (c + 1 < W && row[c + 1]?.ink === cell.ink) text += row[++c]!.char;
      result.push({ x: start * DX, y: r * DY + DY, ink: cell.ink, text });
    }
    return result;
  });
  return { mark, area, poly, rect, ellipse, line, runs };
}

export function mediterraneanScene() {
  const landscape = field();
  // The far coast falls gently into a broad, character-textured sea.
  landscape.poly([[420,158],[485,143],[525,149],[565,127],[610,145],[665,151],[710,139],[760,153],[820,156],[1000,154],[1000,380],[0,380],[0,159]], 'mountain', ':');
  landscape.rect(0, 164, 1000, 216, 'sea', '~');
  for (let y = 174; y < 380; y += 20) {
    for (let x = (y % 3) * 13; x < 1000; x += 89) landscape.rect(x, y, 18 + y % 23, 5, 'deep', '-');
  }
  const architecture = field();
  // Two planes of stucco, a low roof and a shuttered arched window.
  architecture.poly([[80,154],[303,149],[303,380],[80,380]], 'plaster');
  architecture.poly([[303,149],[385,180],[385,380],[303,380]], 'shade');
  architecture.rect(140, 77, 26, 55, 'plaster');
  architecture.rect(135, 72, 36, 10, 'roof', '=');
  architecture.poly([[57,156],[173,104],[303,115],[409,171],[300,185]], 'roof');
  for (let y = 122; y < 178; y += 10) architecture.line([81 + (178-y)*1.25,y],[300 + (y-122)*1.45,y+18], 'tile', '=');
  architecture.line([58,160],[300,188],'deep','_');
  architecture.line([300,188],[410,174],'deep','_');
  architecture.rect(175, 225, 57, 79, 'teal', '|');
  architecture.ellipse(204, 226, 28, 24, 'teal', '|');
  architecture.rect(200, 205, 5, 98, 'deep', '|');
  architecture.line([170,305],[236,305], 'shade', '=');
  architecture.rect(328, 223, 25, 51, 'deep', '|');
  architecture.line([333,226],[333,269], 'teal', '|');
  // Terrace and parapet; enough room for someone to stop and look out.
  architecture.poly([[300,342],[578,318],[710,380],[300,380]], 'plaster');
  architecture.poly([[300,350],[585,329],[710,380],[687,380],[582,339],[300,363]], 'shade', ':');
  architecture.line([376,292],[613,292], 'plaster', '=');
  architecture.line([376,298],[613,298], 'shade', '-');
  for (const x of [391, 434, 478, 522, 566, 608]) architecture.rect(x, 298, 7, 38, 'plaster', '|');
  // Small seated reader, feet over the terrace; the cat shares the view.
  architecture.ellipse(489, 269, 9, 10, 'deep', '@');
  architecture.poly([[480,280],[497,279],[501,307],[480,309]], 'roof');
  architecture.line([484,310],[506,315], 'deep', '=');
  architecture.line([506,315],[507,336], 'deep', '|');
  architecture.line([483,291],[510,297], 'deep', '/');
  architecture.line([508,294],[523,292], 'plaster', '_');
  architecture.ellipse(551, 321, 9, 12, 'deep');
  architecture.ellipse(550, 308, 7, 7, 'deep');
  architecture.mark(545,300,'deep','^'); architecture.mark(555,300,'deep','^');
  architecture.line([558,328],[570,326], 'deep', '~');
  architecture.line([570,326],[573,317], 'deep', ')');
  // A pot and sculptural olive branches anchor the opposite edge.
  architecture.poly([[846,332],[887,332],[880,374],[854,374]], 'roof');
  architecture.rect(842,328,49,9,'tile','=');
  architecture.line([866,329],[859,250],'deep','|');
  architecture.line([862,293],[824,257],'deep','/');
  architecture.line([863,283],[899,234],'deep','/');
  architecture.line([858,266],[851,223],'deep','|');
  architecture.line([879,263],[921,263],'deep','_');
  // Broken leafy clusters, not a solid geometric canopy.
  for (const [x,y,rx,ry] of [[815,250,19,16],[838,238,18,20],[849,216,18,17],[876,231,22,17],[899,220,17,14],[912,240,16,21],[930,261,16,12],[873,263,22,14]]) {
    architecture.area((u,v) => ((u-x)/rx)**2 + ((v-y)/ry)**2 < 1 && (Math.floor(u/5)*7+Math.floor(v/5)*11)%5 !== 0, 'leaf', '*');
  }
  architecture.mark(552,312,'plaster',':');
  // A few foreground stones continue the terrace out of frame.
  architecture.poly([[0,365],[85,343],[120,353],[120,380],[0,380]],'shade',':');
  const clouds = field();
  for (const [x,y,rx,ry] of [[547,73,47,9],[579,62,35,16],[608,73,45,9],[772,98,30,6],[792,92,19,10],[819,98,25,6]]) clouds.ellipse(x,y,rx,ry,'foam',':');
  const boat = field();
  boat.line([726,183],[726,224],'plaster','|');
  boat.poly([[720,188],[720,219],[693,219]],'plaster');
  boat.poly([[732,199],[747,219],[732,219]],'foam');
  boat.poly([[690,224],[754,224],[744,231],[704,231]],'deep','=');
  const glints = field();
  for (const [x,y,w] of [[604,185,38],[819,202,43],[659,244,35],[769,264,51],[580,277,24],[924,298,42],[731,322,32]]) glints.rect(x,y,w,5,'foam','~');
  return { landscape: landscape.runs(), architecture: architecture.runs(), clouds: clouds.runs(), boat: boat.runs(), glints: glints.runs() };
}
