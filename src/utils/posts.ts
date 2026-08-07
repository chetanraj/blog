import type { CollectionEntry } from 'astro:content';

export function getRelatedPosts(
  current: CollectionEntry<'posts'>,
  allPosts: CollectionEntry<'posts'>[],
  limit = 3
): CollectionEntry<'posts'>[] {
  const others = allPosts.filter(
    (post) => post.slug !== current.slug && post.data.published !== false
  );

  const tagged = others
    .map((post) => ({
      post,
      score: (post.data.tags ?? []).filter((tag) =>
        (current.data.tags ?? []).includes(tag)
      ).length,
    }))
    .filter((entry) => entry.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || b.post.data.date.getTime() - a.post.data.date.getTime()
    )
    .map((entry) => entry.post);

  if (tagged.length >= limit) {
    return tagged.slice(0, limit);
  }

  const recent = others
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .filter((post) => !tagged.some((picked) => picked.slug === post.slug));

  return [...tagged, ...recent].slice(0, limit);
}
