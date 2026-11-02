/** Five reader-facing categories; original frontmatter tags remain as legacy URL metadata. */
export const categories = ['JavaScript', 'React', 'CSS & Styling', 'Tools & Workflow', 'Deployment'] as const;
export type Category = typeof categories[number];
export const postCategories: Readonly<Record<string, Category>> = {
  'bad-practices-vs-best-practices-in-css': 'CSS & Styling',
  'class-memorization-myth': 'CSS & Styling',
  'compose-in-styled-system': 'CSS & Styling',
  'deploying-any-app-github-pages': 'Deployment',
  'gridsome-with-github': 'Deployment',
  'how-i-structure-obsidian': 'Tools & Workflow',
  'how-i-structure-react-app': 'React',
  'my-top-ten-vs-code-plugins': 'Tools & Workflow',
  'nifty-npm-tips': 'Tools & Workflow',
  'nodemon': 'Tools & Workflow',
  'optional-chaining': 'JavaScript',
  'react-recoil': 'React',
  'what-is-context-path': 'Deployment',
  'how-i-make-npm-wait-a-day-before-installing': 'Tools & Workflow',
};
const aliases: Readonly<Record<string, Category>> = {
  javascript: 'JavaScript', es2020: 'JavaScript',
  react: 'React', recoil: 'React',
  css: 'CSS & Styling', tailwind: 'CSS & Styling', 'styled-system': 'CSS & Styling', frontend: 'CSS & Styling', 'web development': 'CSS & Styling',
  hosting: 'Deployment', 'static-site': 'Deployment', gridsome: 'Deployment',
  vscode: 'Tools & Workflow', npm: 'Tools & Workflow', node: 'Tools & Workflow', tips: 'Tools & Workflow', obsidian: 'Tools & Workflow', productivity: 'Tools & Workflow', 'note-taking': 'Tools & Workflow', workflow: 'Tools & Workflow', security: 'Tools & Workflow', 'supply chain': 'Tools & Workflow',
};
export function categoryForTag(tag: string): Category | undefined {
  const normalized = tag.trim().toLowerCase();
  return categories.find(category => category.toLowerCase() === normalized) ?? aliases[normalized];
}
export function getPostCategory(post: { id: string; data: { tags?: string[] } }): Category {
  if (Object.hasOwn(postCategories, post.id)) return postCategories[post.id];
  return (post.data.tags ?? []).map(categoryForTag).find(Boolean) ?? 'Tools & Workflow';
}
