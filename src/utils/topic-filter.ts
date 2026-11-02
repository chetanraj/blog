/** Selected topics narrow results together; other matching topics remain available. */
export function getTopicFilterState(tagsByNote: string[][], selected: Set<string>) {
  const matches = tagsByNote.map(tags => [...selected].every(topic => tags.includes(topic)));
  const available = new Set(tagsByNote.flatMap((tags, index) => matches[index] ? tags : []));
  return { matches, available, count: matches.filter(Boolean).length };
}

function parseTopics(value: string | undefined): string[] {
  try {
    const topics: unknown = JSON.parse(value || '[]');
    return Array.isArray(topics) ? topics.filter((topic): topic is string => typeof topic === 'string') : [];
  } catch {
    // A malformed note must not disable filtering for the rest of the page.
    return [];
  }
}

export function initTopicFilters(writing: HTMLElement, { single = false } = {}) {
  const buttons = [...writing.querySelectorAll<HTMLButtonElement>('[data-topic]')];
  const reset = writing.querySelector<HTMLButtonElement>('[data-topic-reset]');
  const notes = [...writing.querySelectorAll<HTMLElement>('[data-note]')];
  const tagsByNote = notes.map(note => parseTopics(note.dataset.topics));
  const results = writing.querySelector<HTMLElement>('.filter-results');
  const empty = writing.querySelector<HTMLElement>('.filter-empty');
  const selected = new Set<string>();

  function render() {
    const { matches, available, count } = getTopicFilterState(tagsByNote, selected);
    notes.forEach((note, index) => { note.hidden = !matches[index]; });
    buttons.forEach(button => {
      const topic = button.dataset.topic!;
      const pressed = selected.has(topic);
      button.setAttribute('aria-pressed', String(pressed));
      // Selected topics must always be removable, even if no notes match.
      button.disabled = !pressed && !(single ? tagsByNote.some(tags => tags.includes(topic)) : available.has(topic));
    });
    reset?.setAttribute('aria-pressed', String(selected.size === 0));
    if (empty) empty.hidden = count > 0;
    if (results) {
      results.textContent = `${count} note${count === 1 ? '' : 's'}${selected.size ? `${single ? ' in' : ' tagged'} ${[...selected].join(' + ')}` : ''}`;
    }
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    if (button.disabled) return;
    const topic = button.dataset.topic!;
    if (selected.has(topic)) selected.delete(topic);
    else { if (single) selected.clear(); selected.add(topic); }
    render();
  }));
  reset?.addEventListener('click', () => { selected.clear(); render(); });
  render();
}
