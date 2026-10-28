/** Selected topics narrow results together; other matching topics remain available. */
export function getTopicFilterState(tagsByNote: string[][], selected: Set<string>) {
  const matches = tagsByNote.map(tags => [...selected].every(topic => tags.includes(topic)));
  const available = new Set(tagsByNote.flatMap((tags, index) => matches[index] ? tags : []));
  return { matches, available, count: matches.filter(Boolean).length };
}

export function initTopicFilters(writing: HTMLElement) {
  const buttons = [...writing.querySelectorAll<HTMLButtonElement>('[data-topic]')];
  const reset = writing.querySelector<HTMLButtonElement>('[data-topic-reset]');
  const notes = [...writing.querySelectorAll<HTMLElement>('[data-note]')];
  const tagsByNote: string[][] = notes.map(note => JSON.parse(note.dataset.topics || '[]'));
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
      button.disabled = !pressed && !available.has(topic);
    });
    reset?.setAttribute('aria-pressed', String(selected.size === 0));
    if (empty) empty.hidden = count > 0;
    if (results) {
      results.textContent = `${count} note${count === 1 ? '' : 's'}${selected.size ? ` tagged ${[...selected].join(' + ')}` : ''}`;
    }
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    if (button.disabled) return;
    const topic = button.dataset.topic!;
    if (selected.has(topic)) selected.delete(topic);
    else selected.add(topic);
    render();
  }));
  reset?.addEventListener('click', () => { selected.clear(); render(); });
  render();
}
