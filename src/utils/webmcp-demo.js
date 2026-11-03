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
    const label = panel.querySelector('[data-demo-label]');
    const tooltip = panel.querySelector('[data-demo-tooltip]');
    const button = panel.querySelector('[data-demo-run]');
    const output = panel.querySelector('[data-demo-output]');
    const message = panel.querySelector('[data-demo-message]');
    const result = panel.querySelector('[data-demo-result]');
    let running = false;
    let lastRun = 'none';
    let controller;
    const available = () => page.documentElement.dataset.webmcpStatus === 'ready'
      && typeof page.modelContext?.getTools === 'function'
      && typeof page.modelContext?.executeTool === 'function';
    const update = () => {
      const state = page.documentElement.dataset.webmcpStatus;
      const supported = typeof page.modelContext?.getTools === 'function' && typeof page.modelContext?.executeTool === 'function';
      const ready = available();
      const unavailable = !supported || ['unavailable', 'unsupported'].includes(state);
      const indicatorState = unavailable ? 'unavailable' : running || !ready ? 'checking' : lastRun === 'failed' ? 'failed' : 'ready';
      const description = {
        unavailable: 'WebMCP unavailable in this browser session.',
        checking: running ? 'WebMCP example is running.' : 'Checking WebMCP registration.',
        failed: 'The last WebMCP run failed. Read the output below and retry.',
        ready: lastRun === 'success' ? 'WebMCP available. The last run succeeded.' : 'WebMCP available. The blog tools are registered.',
      }[indicatorState];
      label.textContent = description;
      tooltip.textContent = description;
      badge.dataset.state = indicatorState;
      button.disabled = running || !available();
    };
    let tooltipHovered = false;
    const dismissTooltip = () => { delete badge.dataset.tooltipOpen; badge.dataset.tooltipDismissed = 'true'; };
    badge.addEventListener('pointerenter', () => { tooltipHovered = true; delete badge.dataset.tooltipDismissed; });
    badge.addEventListener('pointerleave', () => { tooltipHovered = false; });
    badge.addEventListener('focus', () => { delete badge.dataset.tooltipDismissed; });
    badge.addEventListener('blur', dismissTooltip);
    badge.addEventListener('click', () => {
      if (badge.dataset.tooltipOpen === 'true') dismissTooltip();
      else { delete badge.dataset.tooltipDismissed; badge.dataset.tooltipOpen = 'true'; }
    });
    page.addEventListener('keydown', event => {
      if (event.key === 'Escape' && (tooltipHovered || page.activeElement === badge || badge.dataset.tooltipOpen === 'true')) { dismissTooltip(); event.preventDefault(); }
    });
    page.addEventListener('pointerdown', event => { if (!badge.contains(event.target)) dismissTooltip(); });
    button.hidden = false;
    update();
    page.addEventListener('blog:webmcp-status', update);
    view.addEventListener('pagehide', () => controller?.abort());
    button.addEventListener('click', async () => {
      if (running || !available()) return;
      running = true;
      lastRun = 'none';
      controller = new AbortController();
      update();
      button.setAttribute('aria-busy', 'true');
      output.hidden = false;
      result.hidden = true;
      result.textContent = '';
      message.textContent = 'Running getPostsByTag for React…';
      try {
        const value = await runReactPostsDemo(page.modelContext, controller.signal);
        lastRun = 'success';
        result.textContent = JSON.stringify(value, null, 2);
        result.hidden = false;
        message.textContent = 'Complete. Actual WebMCP output is shown below.';
      } catch (error) {
        lastRun = controller.signal.aborted ? 'none' : 'failed';
        message.textContent = controller.signal.aborted ? 'Run canceled. You can try again.' : `Could not run: ${error instanceof Error ? error.message : 'WebMCP execution failed.'}`;
      } finally {
        running = false;
        button.removeAttribute('aria-busy');
        update();
      }
    });
  });
}
