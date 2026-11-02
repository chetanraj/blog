export interface SectionNavigationState { active: number; expanded: boolean; hidden: boolean; }
export type SectionNavigationAction =
  | { type: 'active' | 'select'; index: number }
  | { type: 'expand' | 'collapse' | 'hide' | 'show' };

export function transitionSectionNavigation(state: SectionNavigationState, action: SectionNavigationAction, count: number): SectionNavigationState {
  switch (action.type) {
    case 'hide': return { ...state, hidden: true, expanded: false };
    case 'show': return { ...state, hidden: false, expanded: false };
    case 'expand': return state.hidden ? state : { ...state, expanded: true };
    case 'collapse': return { ...state, expanded: false };
    case 'select': return { ...state, active: Math.max(0, Math.min(count - 1, action.index)), expanded: false };
    case 'active': return { ...state, active: Math.max(0, Math.min(count - 1, action.index)) };
  }
}

export function getActiveSectionIndex(tops: number[], line: number): number {
  let active = 0;
  // Allow fractional CSS pixels after a browser anchor jump.
  tops.forEach((top, index) => { if (top <= line + 2) active = index; });
  return active;
}

export function initSectionNavigation(root: HTMLElement): void {
  if (root.dataset.enhanced) return;
  const panel = root.querySelector<HTMLElement>('[data-nav-panel]')!;
  const details = root.querySelector<HTMLDetailsElement>('[data-nav-details]')!;
  const toggle = root.querySelector<HTMLButtonElement>('[data-nav-toggle]')!;
  const hide = root.querySelector<HTMLButtonElement>('[data-nav-hide]')!;
  const show = root.querySelector<HTMLButtonElement>('[data-nav-show]')!;
  const previous = root.querySelector<HTMLButtonElement>('[data-nav-prev]')!;
  const next = root.querySelector<HTMLButtonElement>('[data-nav-next]')!;
  const track = root.querySelector<HTMLElement>('[data-focus-track]')!;
  const labels = [...root.querySelectorAll<HTMLElement>('[data-focus-label]')];
  // Read static fallback anchors as section metadata; they are not interactive after enhancement.
  const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-section-link]')];
  const headings = links.map(link => document.getElementById(decodeURIComponent(link.hash.slice(1))));
  const body = root.closest('.blog-post-content')?.querySelector<HTMLElement>('.blog-post-body');
  if (!links.length || headings.some(heading => !heading) || !body) return;
  const sections = headings as HTMLElement[];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let state: SectionNavigationState = { active: 0, expanded: false, hidden: false };
  let scheduled = 0;

  function measure() {
    body!.style.setProperty('--article-nav-clearance', `${root.getBoundingClientRect().height + 24}px`);
  }
  function render() {
    panel.hidden = state.hidden;
    show.hidden = !state.hidden;
    if (details.open !== state.expanded) details.open = state.expanded;
    toggle.setAttribute('aria-expanded', String(state.expanded));
    const current = labels[state.active].textContent || '';
    toggle.setAttribute('aria-label', `${current}, section ${state.active + 1} of ${links.length}. ${state.expanded ? 'Collapse' : 'Expand'} sections`);
    root.querySelector<HTMLElement>('[data-nav-current]')!.textContent = current;
    root.querySelector<HTMLElement>('[data-nav-position]')!.textContent = `${String(state.active + 1).padStart(2, '0')}/${String(links.length).padStart(2, '0')}`;
    track.style.transform = `translateY(${28 - state.active * 32}px)`;
    labels.forEach((label, index) => label.classList.toggle('is-active', index === state.active));
    previous.disabled = state.active === 0;
    next.disabled = state.active === links.length - 1;
    measure();
  }
  function dispatch(action: SectionNavigationAction) {
    state = transitionSectionNavigation(state, action, links.length);
    render();
  }
  function jump(index: number, updateHistory = true, animate = true, collapse = true) {
    // Hash navigation collapses before anchor measurement; stepping keeps the camera visible.
    dispatch({ type: collapse ? 'select' : 'active', index });
    const heading = sections[state.active];
    if (updateHistory && window.location.hash !== links[state.active].hash) {
      window.history.pushState(null, '', links[state.active].hash);
    }
    if (collapse) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    } else {
      // Keep keyboard focus in the expanded control so stepping and Escape remain available.
      const focused = document.activeElement;
      if (focused === previous && previous.disabled) next.focus({ preventScroll: true });
      if (focused === next && next.disabled) previous.focus({ preventScroll: true });
    }
    heading.scrollIntoView({ behavior: animate && !reducedMotion.matches ? 'smooth' : 'instant', block: 'start' });
  }
  function syncActive() {
    scheduled = 0;
    if (state.expanded) return;
    const index = getActiveSectionIndex(sections.map(section => section.getBoundingClientRect().top), root.getBoundingClientRect().bottom + 24);
    if (index !== state.active) dispatch({ type: 'active', index });
  }
  function onScroll() {
    if (!scheduled) scheduled = requestAnimationFrame(syncActive);
  }
  function onResize() { measure(); onScroll(); }
  function onHashChange() {
    const index = links.findIndex(link => link.hash === window.location.hash);
    if (index >= 0) jump(index, false, false);
  }

  toggle.addEventListener('click', () => dispatch({ type: state.expanded ? 'collapse' : 'expand' }));
  details.addEventListener('toggle', () => {
    if (details.open !== state.expanded) dispatch({ type: details.open ? 'expand' : 'collapse' });
  });
  hide.addEventListener('click', () => { dispatch({ type: 'hide' }); show.focus(); });
  show.addEventListener('click', () => { dispatch({ type: 'show' }); toggle.focus(); });
  previous.addEventListener('click', () => jump(state.active - 1, true, true, false));
  next.addEventListener('click', () => jump(state.active + 1, true, true, false));
  root.addEventListener('keydown', event => {
    if (event.key === 'Escape' && state.expanded) {
      event.preventDefault(); dispatch({ type: 'collapse' }); toggle.focus();
    }
  });
  document.body.classList.add('has-section-navigation');
  root.querySelector<HTMLElement>('[data-nav-fallback]')!.hidden = true;
  root.dataset.enhanced = 'true';
  root.querySelector<HTMLElement>('[data-nav-compact]')!.hidden = false;
  root.querySelector<HTMLElement>('[data-focus-controls]')!.hidden = false;
  hide.hidden = false;
  render();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('hashchange', onHashChange);
  const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(onResize);
  observer?.observe(root);
  requestAnimationFrame(() => { onHashChange(); syncActive(); });
  window.addEventListener('pagehide', event => {
    if (event.persisted) return; // Keep navigation working after a back/forward-cache restore.
    observer?.disconnect();
    cancelAnimationFrame(scheduled);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('hashchange', onHashChange);
  });
}
