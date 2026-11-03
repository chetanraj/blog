/** Copy the original source, not the highlighted HTML or a trimmed DOM preview. */
export async function copyCodeSource(source: string, clipboard: Pick<Clipboard, 'writeText'> | undefined): Promise<boolean> {
  try {
    if (!clipboard?.writeText) return false;
    await clipboard.writeText(source);
    return true;
  } catch {
    return false;
  }
}

export function initCodePresenters(root: ParentNode): void {
  root.querySelectorAll<HTMLElement>('[data-code-presenter]').forEach(panel => {
    if (panel.dataset.copyBound) return;
    const button = panel.querySelector<HTMLButtonElement>('[data-code-copy]');
    const status = panel.querySelector<HTMLElement>('[data-code-status]');
    const raw = panel.querySelector('[data-code-source]')?.textContent;
    if (!button || !status || !raw || !navigator.clipboard?.writeText) return;
    let source: unknown;
    try { source = JSON.parse(raw); } catch { return; }
    if (typeof source !== 'string') return;
    panel.dataset.copyBound = 'true';
    button.hidden = false;
    button.addEventListener('click', async () => {
      if (button.disabled) return;
      button.disabled = true;
      delete button.dataset.copied;
      status.textContent = '';
      const copied = await copyCodeSource(source as string, navigator.clipboard);
      button.disabled = false;
      button.dataset.copied = String(copied);
      status.textContent = copied ? 'Copied' : 'Copy unavailable. Select the code to copy it.';
    });
  });
}
