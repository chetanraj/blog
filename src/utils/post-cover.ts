/** Explicit assignments keep published covers fixed when articles are added or reordered. */
export const postCovers: Readonly<Record<string, string>> = {
  'bad-practices-vs-best-practices-in-css': 'super-visuals-06',
  'class-memorization-myth': 'super-visuals-04',
  'compose-in-styled-system': 'super-visuals-07',
  'deploying-any-app-github-pages': 'super-visuals-01',
  'gridsome-with-github': 'super-visuals-05',
  'how-i-structure-obsidian': 'super-visuals-09',
  'how-i-structure-react-app': 'super-visuals-02',
  'my-top-ten-vs-code-plugins': 'super-visuals-06',
  'nifty-npm-tips': 'super-visuals-08',
  'nodemon': 'super-visuals-09',
  'optional-chaining': 'super-visuals-04',
  'react-recoil': 'super-visuals-03',
  'what-is-context-path': 'super-visuals-10',
};

/** New posts have a deterministic fallback until a cover is curated for them. */
export function getPostCoverName(postId: string): string {
  if (Object.hasOwn(postCovers, postId)) return postCovers[postId];
  const covers = Object.values(postCovers);
  let hash = 2166136261;
  for (const character of postId) {
    hash = Math.imul(hash ^ character.codePointAt(0)!, 16777619);
  }
  return covers[(hash >>> 0) % covers.length];
}
