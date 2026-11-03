/** This exact function is shown in the code presenter and called by Run. */
export async function runReactPostsDemo(context, signal) {
  if (!context?.getTools || !context?.executeTool) {
    throw new Error('This browser does not support WebMCP tool execution.');
  }
  const tools = await context.getTools();
  signal?.throwIfAborted();
  const tool = tools.find(({ name }) => name === 'getPostsByTag');
  if (!tool) {
    throw new Error('The blog tool is not registered. Reload and check browser status.');
  }
  const result = await context.executeTool(tool, { tag: 'React' }, { signal });
  signal?.throwIfAborted();
  return JSON.parse(result);
}

export function initWebMcpDemos(root, page = document, view = window) {
  root.querySelectorAll('[data-webmcp-demo]').forEach(panel => {
    if (panel.dataset.demoBound) return;
    panel.dataset.demoBound = 'true';
    const badge = panel.querySelector('[data-demo-status]');
    const button = panel.querySelector('[data-demo-run]');
    const output = panel.querySelector('[data-demo-output]');
    const message = panel.querySelector('[data-demo-message]');
    const result = panel.querySelector('[data-demo-result]');
    let running = false;
    let controller;
    const available = () => page.documentElement.dataset.webmcpStatus === 'ready'
      && typeof page.modelContext?.getTools === 'function'
      && typeof page.modelContext?.executeTool === 'function';
    const update = () => {
      const state = page.documentElement.dataset.webmcpStatus;
      const supported = typeof page.modelContext?.getTools === 'function' && typeof page.modelContext?.executeTool === 'function';
      badge.textContent = !supported ? (page.modelContext ? 'WebMCP Run unavailable' : 'WebMCP unsupported') : available() ? 'WebMCP ready' : ['unavailable', 'unsupported'].includes(state) ? 'WebMCP unavailable' : 'WebMCP registering…';
      badge.dataset.state = available() ? 'ready' : 'unavailable';
      button.disabled = running || !available();
    };
    button.hidden = false;
    update();
    page.addEventListener('blog:webmcp-status', update);
    view.addEventListener('pagehide', () => controller?.abort());
    button.addEventListener('click', async () => {
      if (running || !available()) return;
      running = true;
      controller = new AbortController();
      update();
      button.setAttribute('aria-busy', 'true');
      output.hidden = false;
      result.hidden = true;
      result.textContent = '';
      message.textContent = 'Running getPostsByTag for React…';
      try {
        const value = await runReactPostsDemo(page.modelContext, controller.signal);
        result.textContent = JSON.stringify(value, null, 2);
        result.hidden = false;
        message.textContent = 'Complete. Actual WebMCP output is shown below.';
      } catch (error) {
        message.textContent = controller.signal.aborted ? 'Run canceled. You can try again.' : `Could not run: ${error instanceof Error ? error.message : 'WebMCP execution failed.'}`;
      } finally {
        running = false;
        button.removeAttribute('aria-busy');
        update();
      }
    });
  });
}
