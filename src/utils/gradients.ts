export type PostGradient = {
  a: string;
  b: string;
  ink: string;
  angle: number;
};

/** Soft tints of the blog header blue (#0f4c81 / #dfebf6). */
const PALETTE: Omit<PostGradient, 'angle'>[] = [
  { a: '#0f4c81', b: '#7eafd0', ink: '#ffffff' },
  { a: '#dfebf6', b: '#0f4c81', ink: '#0f4c81' },
  { a: '#163e66', b: '#9bc4dc', ink: '#ffffff' },
  { a: '#4a8ab8', b: '#0f4c81', ink: '#ffffff' },
  { a: '#c5dcec', b: '#1e5f96', ink: '#0f4c81' },
  { a: '#2d6a9f', b: '#e8f2f8', ink: '#ffffff' },
  { a: '#5a9bc4', b: '#0f4c81', ink: '#ffffff' },
  { a: '#e8f2f8', b: '#4a8ab8', ink: '#0f4c81' },
  { a: '#0f4c81', b: '#dfebf6', ink: '#ffffff' },
  { a: '#9bc4dc', b: '#163e66', ink: '#0f4c81' },
  { a: '#1e5f96', b: '#b8d4e8', ink: '#ffffff' },
  { a: '#7eafd0', b: '#163e66', ink: '#0f4c81' },
];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function harshGradientFor(slug: string): PostGradient {
  const h = hashSlug(slug);
  const base = PALETTE[h % PALETTE.length];
  const angle = 150 + (h % 5) * 8;
  return { ...base, angle };
}

export function gradientStyle(gradient: PostGradient): string {
  return [
    `--g-a:${gradient.a}`,
    `--g-b:${gradient.b}`,
    `--g-ink:${gradient.ink}`,
    `--g-angle:${gradient.angle}deg`,
  ].join(';');
}
