export interface ArticleShareData { title: string; text: string; url: string; }
interface ShareNavigator {
  share?: (data: ArticleShareData) => Promise<void>;
  canShare?: (data: ArticleShareData) => boolean;
}
export type ShareResult = 'handed-off' | 'cancelled' | 'failed';

export function supportsArticleShare(api: ShareNavigator, data: ArticleShareData): boolean {
  if (typeof api.share !== 'function') return false;
  try { return !api.canShare || api.canShare(data); } catch { return false; }
}

/** Prefer the device chooser on touch-first devices, not merely narrow windows. */
export function shouldUseNativeXShare(api: ShareNavigator, data: ArticleShareData, coarsePointer: boolean): boolean {
  return coarsePointer && supportsArticleShare(api, data);
}

export async function shareArticle(api: ShareNavigator, data: ArticleShareData): Promise<ShareResult> {
  try {
    if (!api.share) return 'failed';
    // Invoke before the first await, while the initiating click still has transient activation.
    await api.share(data);
    return 'handed-off'; // This does not prove the recipient received or published anything.
  } catch (error) {
    return error && typeof error === 'object' && 'name' in error && error.name === 'AbortError'
      ? 'cancelled' : 'failed';
  }
}

export async function copyArticleLink(api: { clipboard?: { writeText: (text: string) => Promise<void> } }, url: string): Promise<boolean> {
  try {
    if (!api.clipboard?.writeText) return false;
    await api.clipboard.writeText(url);
    return true;
  } catch { return false; }
}

export function initPostShare(root: HTMLElement): void {
  if (root.dataset.shareBound) return;
  root.dataset.shareBound = 'true';
  const native = root.querySelector<HTMLButtonElement>('[data-native-share]')!;
  const x = root.querySelector<HTMLAnchorElement>('[data-x-share]')!;
  const fallback = root.querySelector<HTMLElement>('[data-x-fallback]')!;
  const coarsePointer = window.matchMedia('(pointer: coarse)');
  const copy = root.querySelector<HTMLButtonElement>('[data-copy-url]')!;
  const status = root.querySelector<HTMLElement>('[data-share-status]')!;
  const manual = root.querySelector<HTMLElement>('[data-manual-copy]')!;
  const input = manual.querySelector<HTMLInputElement>('input')!;
  const data = { title: root.dataset.shareTitle || '', text: root.dataset.shareTitle || '', url: copy.dataset.copyUrl || '' };
  native.hidden = !supportsArticleShare(navigator, data);
  copy.hidden = false;
  const updateXLabel = () => {
    const label = shouldUseNativeXShare(navigator, data, coarsePointer.matches)
      ? 'Share via your device (choose X)' : 'Share on X (opens website)';
    x.setAttribute('aria-label', label);
    x.title = label;
  };
  updateXLabel();
  coarsePointer.addEventListener('change', updateXLabel);
  x.addEventListener('click', async (event) => {
    // Keep modified clicks and desktop/unsupported browsers as ordinary web links.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!shouldUseNativeXShare(navigator, data, coarsePointer.matches)) return;
    event.preventDefault();
    if (native.disabled) return;
    native.disabled = true;
    x.setAttribute('aria-disabled', 'true');
    status.textContent = '';
    fallback.hidden = true;
    const result = await shareArticle(navigator, data);
    native.disabled = false;
    x.removeAttribute('aria-disabled');
    if (result === 'failed') {
      status.textContent = 'Device sharing is unavailable. Open X on the web or copy the link.';
      fallback.hidden = false;
    }
    // Never open another window after cancellation or an asynchronous failure.
  });
  let resetTimer: ReturnType<typeof setTimeout>;
  native.addEventListener('click', async () => {
    if (native.disabled) return;
    native.disabled = true;
    status.textContent = '';
    const result = await shareArticle(navigator, data);
    native.disabled = false;
    if (result === 'failed') status.textContent = 'Sharing is unavailable. Try X, LinkedIn, or copy the link.';
    // Cancellation is quiet; resolving only confirms OS handoff, not a successful post.
  });
  copy.addEventListener('click', async () => {
    if (copy.disabled) return;
    copy.disabled = true;
    clearTimeout(resetTimer);
    copy.classList.remove('is-copied');
    copy.setAttribute('aria-label', 'Copy link');
    status.textContent = '';
    const copied = await copyArticleLink(navigator, data.url);
    copy.disabled = false;
    manual.hidden = copied;
    if (copied) {
      status.textContent = 'Link copied.';
      copy.classList.add('is-copied');
      copy.setAttribute('aria-label', 'Link copied');
      resetTimer = setTimeout(() => {
        copy.classList.remove('is-copied');
        copy.setAttribute('aria-label', 'Copy link');
      }, 1600);
    } else {
      status.textContent = 'Could not copy automatically. Select and copy the link below.';
      input.focus();
      input.select();
    }
  });
}
