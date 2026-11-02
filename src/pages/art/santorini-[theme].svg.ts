import type { APIRoute } from 'astro';
import { mediterraneanScene, palette } from '../../utils/mediterranean-scene';

export function getStaticPaths() {
  return ['light', 'dark'].map(theme => ({ params: { theme } }));
}

export const GET: APIRoute = ({ params }) => {
  const dark = params.theme === 'dark';
  const inks = palette.map(([r,g,b]) => {
    const blue = b > r * 1.08;
    const luminance = r * .2126 + g * .7152 + b * .0722;
    const paper = [243,237,223];
    const pale = [r,g,b].map((channel, index) => channel * .4 + paper[index] * .6);
    const night = blue ? [r * 1.15 + 25, g * 1.2 + 20, b * 1.2 + 20].map(channel => Math.min(255, channel)) : [r,g,b];
    const rgb = dark ? night : blue
      ? (luminance > 150 ? pale : [r*.42,g*.65,b*.96])
      : luminance > 130 ? pale : [r*.8,g*.8,b*.8];
    return `rgb(${rgb.map(Math.round).join(',')})`;
  });
  const text = mediterraneanScene(dark).map(run =>
    `<text x="${run.x}" y="${run.y}" textLength="${run.text.length * 5}" lengthAdjust="spacingAndGlyphs" fill="${inks[run.ink]}">${run.text}</text>`
  ).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 625"><rect width="1000" height="625" fill="${dark ? '#142033' : '#f3eddf'}"/><g font-family="monospace" font-size="6" font-weight="500">${text}</g></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
