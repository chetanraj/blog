import { categories, categoryForTag, getPostCategory } from './categories.ts';
import { tagToSlug } from './tags.ts';
import { SITE, absoluteUrl } from '../site.config.ts';

type PostEntry = {
  id: string;
  data: { title: string; description?: string; date: Date; published?: boolean; tags?: string[] };
};

/** Only this allowlist is shipped to the browser, never source bodies or draft metadata. */
export function publicBlogData(posts: PostEntry[], featuredPostId: string | null) {
  return {
    posts: posts.filter(post => post.data.published !== false)
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id))
      .map(post => ({
        id: post.id,
        title: post.data.title,
        description: post.data.description ?? '',
        date: post.data.date.toISOString(),
        category: getPostCategory(post),
        url: absoluteUrl(`/posts/${post.id}/`),
      })),
    featuredPostId: posts.some(post => post.id === featuredPostId && post.data.published !== false) ? featuredPostId : null,
    author: {
      name: SITE.author.name,
      bio: SITE.author.bio,
      url: SITE.author.url,
      aboutUrl: absoluteUrl('/about/'),
      instagramUrl: `https://www.instagram.com/${SITE.author.instagram}/`,
      githubUrl: `https://github.com/${SITE.author.github}`,
      xUrl: `https://x.com/${SITE.author.twitter}`,
    },
  };
}

type BlogData = ReturnType<typeof publicBlogData>;
export type BlogTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: true };
  execute: (input: unknown) => unknown;
};

const emptySchema = { type: 'object', properties: {}, additionalProperties: false };
const isObject = (input: unknown): input is Record<string, unknown> =>
  typeof input === 'object' && input !== null && !Array.isArray(input);

export function createBlogTools(data: BlogData): BlogTool[] {
  const tags = categories.map(name => ({
    name,
    url: absoluteUrl(`/tags/${tagToSlug(name)}/`),
    count: data.posts.filter(post => post.category === name).length,
  }));
  const noInput = (name: string, description: string, execute: () => unknown): BlogTool => ({
    name, description, inputSchema: emptySchema, annotations: { readOnlyHint: true },
    execute: input => isObject(input) && Object.keys(input).length === 0
      ? execute() : { error: 'invalid_input', message: 'Pass an empty object.' },
  });
  return [
    noInput('getLatestPost', 'Get the most recently published blog post.', () => ({ post: data.posts[0] ?? null })),
    noInput('getAllTags', 'List the five reader-facing blog categories and their published post counts.', () => ({ tags })),
    noInput('getBestPost', 'Get the author-picked featured post, if configured. This is an editorial choice, not a popularity ranking.', () => {
      const post = data.posts.find(post => post.id === data.featuredPostId);
      return post ? { post, selection: 'author_pick' } : {
        post: null, status: 'not_configured', message: 'No published author-picked featured post is configured.',
      };
    }),
    noInput('aboutTheAuthor', 'Read the public biography and links for the author of this blog.', () => ({ author: data.author })),
    {
      name: 'getPostsByTag',
      description: 'Find published posts in a blog category. Legacy tag names are mapped to their current category.',
      inputSchema: {
        type: 'object', properties: {
          tag: { type: 'string', minLength: 1, maxLength: 100, description: 'Category name, category URL slug, or legacy tag name.' },
        }, required: ['tag'], additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: input => {
        if (!isObject(input) || Object.keys(input).length !== 1 || typeof input.tag !== 'string' || !input.tag.trim() || input.tag.length > 100) {
          return { error: 'invalid_input', message: 'Pass a tag string of 1–100 characters, with no other properties.' };
        }
        const normalized = input.tag.trim().toLowerCase();
        const category = categories.find(name => tagToSlug(name) === normalized) ?? categoryForTag(input.tag);
        if (!category || !categories.includes(category)) return { error: 'unknown_tag', availableTags: [...categories] };
        return { category, posts: data.posts.filter(post => post.category === category) };
      },
    },
  ];
}

/** Structural boundary keeps the experimental API optional without global browser patches. */
export type ToolRegistry = { registerTool: (tool: BlogTool, options: { signal: AbortSignal }) => Promise<void> };
export function registerBlogTools(registry: ToolRegistry | undefined, tools: BlogTool[]): () => void {
  const controller = new AbortController();
  if (typeof registry?.registerTool === 'function') {
    try {
      for (const tool of tools) {
        Promise.resolve(registry.registerTool(tool, { signal: controller.signal }))
          .catch(() => controller.abort());
      }
    } catch {
      controller.abort();
    }
  }
  return () => controller.abort();
}
