/** Original procedural shark geometry; no borrowed artwork or source. */
export const sharkNames = ['hammerhead', 'great white', 'thresher', 'whale shark'] as const;
export type SharkKind = typeof sharkNames[number];
export const compositions: readonly (readonly [SharkKind, SharkKind])[] = [
  ['hammerhead', 'great white'],
  ['thresher', 'whale shark'],
  ['great white', 'thresher'],
  ['whale shark', 'hammerhead'],
  ['hammerhead', 'thresher'],
  ['great white', 'whale shark'],
];
/** Uniformly choose another pair, including when the random sample is zero. */
export function nextComposition(current: number, sample = Math.random()) {
  const offset = 1 + Math.floor(Math.max(0, Math.min(sample, 1 - Number.EPSILON)) * (compositions.length - 1));
  return (current + offset) % compositions.length;
}
function triangle(x: number, y: number, ax: number, ay: number, bx: number, by: number, cx: number, cy: number) {
  const d1 = (x-bx)*(ay-by)-(ax-bx)*(y-by);
  const d2 = (x-cx)*(by-cy)-(bx-cx)*(y-cy);
  const d3 = (x-ax)*(cy-ay)-(cx-ax)*(y-ay);
  return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
}
export function sharkContains(x: number, y: number, phase: number, kind: SharkKind) {
  const tail = Math.sin(phase) * .10;
  const broad = kind === 'whale shark';
  const bodyWidth = broad ? .26 : kind === 'great white' ? .18 : .145;
  const body = (x/.79)**2 + (y/bodyWidth)**2 < 1 && x > -.64;
  // Broad rounded nose for whale sharks, narrow nose for other species.
  const nose = broad && ((x-.57)/.23)**2 + (y/.22)**2 < 1;
  const finSpread = broad ? .49 : .43;
  const fins = triangle(x,y,-.22,-.07,-.53,-finSpread,.10,-.09) || triangle(x,y,-.22,.07,-.53,finSpread,.10,.09);
  const stem = triangle(x,y,-.53,-.09,-.95,tail,-.53,.09);
  // Threshers have a conspicuously elongated upper tail lobe.
  const upperX = kind === 'thresher' ? -1.58 : -1.15;
  const upperY = kind === 'thresher' ? -.66 : -.30;
  const fork = triangle(x,y,-.90,tail,upperX,upperY+tail,-1.04,tail) || triangle(x,y,-.90,tail,-1.15,.30+tail,-1.04,tail);
  const hammer = kind === 'hammerhead' && ((x-.65)/.105)**2 + (y/.31)**2 < 1;
  return body || nose || fins || stem || fork || hammer;
}
/** Regular bright spots distinguish whale sharks from the mottled species. */
export function isWhaleSpot(x: number, y: number) {
  return Math.cos(x*48) * Math.cos(y*48) > .55;
}
