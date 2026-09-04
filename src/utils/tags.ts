import type { CollectionEntry } from 'astro:content';

export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getAllTags(posts: CollectionEntry<'posts'>[]): string[] {
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      tags.add(tag);
    }
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export function findTagBySlug(
  posts: CollectionEntry<'posts'>[],
  slug: string
): string | undefined {
  return getAllTags(posts).find((tag) => tagToSlug(tag) === slug);
}

export function getPostsByTag(
  posts: CollectionEntry<'posts'>[],
  tag: string
): CollectionEntry<'posts'>[] {
  return posts
    .filter((post) => post.data.tags?.includes(tag))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
