/** Pick artwork from the post ID, never its list position or a random value. */
export function getPostCoverIndex(postId: string, coverCount: number): number {
  if (!Number.isInteger(coverCount) || coverCount < 1) {
    throw new RangeError('At least one cover is required');
  }
  let hash = 2166136261;
  for (const character of postId) {
    hash = Math.imul(hash ^ character.codePointAt(0)!, 16777619);
  }
  return (hash >>> 0) % coverCount;
}
