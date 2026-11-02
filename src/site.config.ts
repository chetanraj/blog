export const SITE = {
  name: 'Blog by Chetan Raj',
  title: 'Blog by Chetan Raj',
  description:
    'Web development notes on JavaScript, React, CSS, Node.js, and the craft of building for the web.',
  url: 'https://chetanraj.dev',
  basePath: '/blog',
  author: {
    name: 'Chetan Raj',
    bio: 'Web Designer & Developer. I write about JavaScript, React, CSS, and developer tooling. Also behind JavaScript Essentials on Instagram.',
    url: 'https://chetanraj.dev',
    twitter: 'chetan_raj',
    github: 'chetanraj',
    instagram: 'javascriptessentials',
  },
  /** Set to your Plausible domain, or leave empty to disable analytics */
  plausibleDomain: 'chetanraj.dev',
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${SITE.basePath}${normalized}`.replace(/([^:]\/)\/+/g, '$1');
}
