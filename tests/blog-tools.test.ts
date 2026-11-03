import test from 'node:test';
import { readFileSync } from 'node:fs';
import { SITE } from '../src/site.config.ts';
import assert from 'node:assert/strict';
import { publicBlogData, createBlogTools, registerBlogTools, type BlogTool } from '../src/utils/blog-tools.ts';

const entries = [
  { id: 'old', data: { title: 'Old', date: new Date('2020-01-01'), tags: ['react'], published: true } },
  { id: 'new', data: { title: 'New', description: 'Public summary', date: new Date('2026-01-01'), tags: ['npm'] } },
  { id: 'secret-draft', body: 'private body', data: { title: 'Hidden', date: new Date('2026-02-01'), tags: ['private'], published: false } },
];
const data = publicBlogData(entries, null);
const tools = createBlogTools(data);
const call = (name: string, input: unknown = {}) => tools.find(tool => tool.name === name)!.execute(input) as any;

test('only published allowlisted data reaches browser; latest is date-sorted', () => {
  assert.deepEqual(data.posts.map(post => post.id), ['new', 'old']);
  assert.ok(!JSON.stringify(data).includes('secret-draft'));
  assert.ok(!JSON.stringify(data).includes('private body'));
  assert.equal(call('getLatestPost').post.id, 'new');
  assert.equal(call('getLatestPost').post.url, 'https://chetanraj.dev/blog/posts/new/');
  assert.deepEqual(createBlogTools(publicBlogData([], null))[0].execute({}), { post: null });
  assert.equal(publicBlogData(entries, 'secret-draft').featuredPostId, null);
});

test('all five tools expose read-only schemas and reject unexpected arguments', () => {
  assert.deepEqual(tools.map(tool => tool.name), ['getLatestPost', 'getAllTags', 'getBestPost', 'aboutTheAuthor', 'getPostsByTag']);
  for (const tool of tools) {
    assert.equal(tool.annotations.readOnlyHint, true);
    assert.equal(tool.inputSchema.additionalProperties, false);
    for (const input of [null, [], 'x', { unexpected: true }]) {
      assert.equal((tool.execute(input) as any).error, 'invalid_input');
    }
  }
});

test('tags are five canonical categories with public counts and absolute URLs', () => {
  const tags = call('getAllTags').tags;
  assert.deepEqual(tags.map((tag: any) => tag.name), ['JavaScript', 'React', 'CSS & Styling', 'Tools & Workflow', 'Deployment']);
  assert.equal(tags.reduce((sum: number, tag: any) => sum + tag.count, 0), 2);
  assert.equal(tags[2].url, 'https://chetanraj.dev/blog/tags/css-styling/');
});

test('tag lookup normalizes category names, slugs and legacy aliases without leaking drafts', () => {
  for (const tag of ['Tools & Workflow', 'tools-workflow', ' NPM ']) {
    assert.deepEqual(call('getPostsByTag', { tag }).posts.map((post: any) => post.id), ['new']);
  }
  assert.deepEqual(call('getPostsByTag', { tag: 'CSS' }).posts, []);
  for (const tag of ['missing', '__proto__', 'constructor']) assert.equal(call('getPostsByTag', { tag }).error, 'unknown_tag');
  for (const tag of ['', '  ', 1, 'x'.repeat(101)]) assert.equal(call('getPostsByTag', { tag }).error, 'invalid_input');
});

test('featured post is an explicit author pick with no automatic fallback', () => {
  assert.equal(call('getBestPost').status, 'not_configured');
  for (const id of ['old', 'secret-draft', 'missing']) {
    const result = createBlogTools(publicBlogData(entries, id)).find(tool => tool.name === 'getBestPost')!.execute({}) as any;
    assert.equal(result.post?.id ?? null, id === 'old' ? 'old' : null);
    if (id === 'old') assert.equal(result.selection, 'author_pick');
  }
});

test('author uses existing public site identity', () => {
  const author = call('aboutTheAuthor').author;
  assert.equal(author.name, 'Chetan Raj');
  assert.equal(author.aboutUrl, 'https://chetanraj.dev/blog/about/');
  assert.equal(author.instagramUrl, 'https://www.instagram.com/javascriptessentials/');
  assert.ok(!('email' in author));
});

test('registration is optional, registers five tools, and cleanup aborts their shared signal', async () => {
  assert.doesNotThrow(() => registerBlogTools(undefined, tools)());
  const registered: BlogTool[] = [];
  let signal: AbortSignal;
  const cleanup = registerBlogTools({ registerTool: async (tool, options) => { registered.push(tool); signal = options.signal; } }, tools);
  assert.equal(registered.length, 5);
  assert.equal(signal!.aborted, false);
  cleanup();
  cleanup();
  assert.equal(signal!.aborted, true);
});

test('registration rejection or synchronous failure is contained and cleans up partial tools', async () => {
  for (const synchronous of [true, false]) {
    let signal: AbortSignal;
    assert.doesNotThrow(() => registerBlogTools({ registerTool: (_tool, options) => {
      signal = options.signal;
      if (synchronous) throw new Error('Unsupported');
      return Promise.reject(new Error('Unsupported'));
    } }, tools));
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(signal!.aborted, true);
  }
});

test('configured author pick matches the published React structure article', () => {
  assert.equal(SITE.featuredPostId, 'how-i-structure-react-app');
  const source = readFileSync(new URL('../src/content/posts/how-i-structure-react-app/index.mdx', import.meta.url), 'utf8');
  assert.match(source, /published: true/);
  const post = { id: SITE.featuredPostId!, data: { title: 'How I structure a React app', date: new Date('2020-10-08'), published: true } };
  const result = createBlogTools(publicBlogData([post], SITE.featuredPostId)).find(tool => tool.name === 'getBestPost')!.execute({}) as any;
  assert.equal(result.post.url, 'https://chetanraj.dev/blog/posts/how-i-structure-react-app/');
  assert.equal(result.selection, 'author_pick');
});

test('actual registered callbacks serialize all five tags and the complete author object', async () => {
  const registered = new Map<string, BlogTool>();
  registerBlogTools({ registerTool: async tool => { registered.set(tool.name, tool); } }, tools);
  const execute = (name: string) => JSON.parse(JSON.stringify(registered.get(name)!.execute({})));
  assert.equal(execute('getAllTags').tags.length, 5);
  assert.deepEqual(execute('getAllTags').tags.map((tag: any) => tag.name), ['JavaScript', 'React', 'CSS & Styling', 'Tools & Workflow', 'Deployment']);
  const author = execute('aboutTheAuthor').author;
  assert.deepEqual(Object.keys(author).sort(), ['name', 'bio', 'url', 'aboutUrl', 'instagramUrl', 'githubUrl', 'xUrl'].sort());
  assert.ok(author.bio.includes('Web Designer & Developer'));
});

test('status says ready only after every registration succeeds, never on failure or cancellation', async () => {
  const unsupported: string[] = [];
  registerBlogTools(undefined, tools, status => unsupported.push(status));
  assert.deepEqual(unsupported, ['unsupported']);
  for (const outcome of ['success', 'failure', 'cancel']) {
    const states: string[] = [];
    const pending: Array<{ resolve: () => void; reject: (error: Error) => void }> = [];
    const cleanup = registerBlogTools({ registerTool: () => new Promise<void>((resolve, reject) => pending.push({ resolve, reject })) }, tools, status => states.push(status));
    assert.deepEqual(states, ['registering']);
    if (outcome === 'cancel') cleanup();
    pending.forEach((promise, index) => outcome === 'failure' && index === 0 ? promise.reject(new Error('denied')) : promise.resolve());
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual(states, outcome === 'cancel' ? ['registering'] : ['registering', outcome === 'success' ? 'ready' : 'unavailable']);
  }
});
