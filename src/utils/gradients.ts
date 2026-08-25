export type HarshGradient = {
  a: string;
  b: string;
  ink: string;
  angle: number;
};

/** High-chroma pairs with little mid-blend. One pair per post, from slug. */
const PALETTE: Omit<HarshGradient, 'angle'>[] = [
  { a: '#f7df1e', b: '#111111', ink: '#111111' },
  { a: '#ff2d95', b: '#00f0ff', ink: '#111111' },
  { a: '#ff4d00', b: '#5b00ff', ink: '#ffffff' },
  { a: '#00ff9d', b: '#1a0033', ink: '#ffffff' },
  { a: '#ffe600', b: '#ff006e', ink: '#111111' },
  { a: '#00d4ff', b: '#0011ff', ink: '#ffffff' },
  { a: '#c8ff00', b: '#ff3d00', ink: '#111111' },
  { a: '#ffffff', b: '#ff00aa', ink: '#111111' },
  { a: '#7cfc00', b: '#8b00ff', ink: '#111111' },
  { a: '#ffd500', b: '#0033ff', ink: '#111111' },
  { a: '#ff0066', b: '#111111', ink: '#ffffff' },
  { a: '#00ffcc', b: '#ff4d00', ink: '#111111' },
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function harshGradientFor(slug: string): HarshGradient {
  const h = hashSlug(slug);
  const base = PALETTE[h % PALETTE.length];
  const angle = 18 + (h % 7) * 18;
  return { ...base, angle };
}

export function gradientStyle(gradient: HarshGradient): string {
  return [
    `--g-a:${gradient.a}`,
    `--g-b:${gradient.b}`,
    `--g-ink:${gradient.ink}`,
    `--g-angle:${gradient.angle}deg`,
  ].join(';');
}
