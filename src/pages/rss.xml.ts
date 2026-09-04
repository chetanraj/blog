import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, absoluteUrl } from '../site.config';

export async function GET(context: { site: string | URL }) {
  const posts = (await getCollection('posts'))
    .filter((post) => post.data.published !== false)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    customData: `<atom:link href="${absoluteUrl('/rss.xml')}" rel="self" type="application/rss+xml" />`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: absoluteUrl(`/posts/${post.slug}/`),
      categories: post.data.tags,
    })),
  });
}
