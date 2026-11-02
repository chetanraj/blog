export const SOUND_PREFERENCE_KEY = 'blog-interface-sounds';
export type SoundKind = 'theme' | 'focus';
interface SoundEnvironment { storage?: Pick<Storage, 'getItem' | 'setItem'>; createContext?: () => AudioContext; }

// One context per page, created only after an enabled user action.
export function createInterfaceSounds(environment: SoundEnvironment) {
  let enabled = false;
  try { enabled = environment.storage?.getItem(SOUND_PREFERENCE_KEY) === 'on'; } catch { /* Private/storage-restricted browsing. */ }
  let context: AudioContext | undefined;
  const active = new Set<OscillatorNode>();
  let generation = 0;
  function setEnabled(next: boolean, persist = true) {
    enabled = next;
    generation++;
    if (!enabled) {
      for (const oscillator of active) { try { oscillator.stop(); } catch { /* Already ended. */ } }
      active.clear();
    }
    if (persist) {
      try { environment.storage?.setItem(SOUND_PREFERENCE_KEY, next ? 'on' : 'off'); } catch { /* Keep the in-page preference working. */ }
    }
  }
  async function play(kind: SoundKind) {
    if (!enabled || !environment.createContext) return;
    const requestGeneration = generation;
    try {
      if (!context || context.state === 'closed') context = environment.createContext();
      const audio = context;
      if (audio.state === 'suspended') await audio.resume();
      // Mute during a delayed resume must not allow a queued tone through.
      if (!enabled || requestGeneration !== generation || audio.state !== 'running') return;
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const duration = kind === 'theme' ? 0.1 : 0.035;
      oscillator.type = 'sine';
      oscillator.frequency.value = kind === 'theme' ? 800 : 1200;
      oscillator.connect(gain);
      gain.connect(audio.destination);
      gain.gain.setValueAtTime(kind === 'theme' ? 0.3 : 0.045, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(kind === 'theme' ? 0.01 : 0.001, audio.currentTime + duration);
      oscillator.onended = () => { active.delete(oscillator); oscillator.disconnect(); gain.disconnect(); };
      active.add(oscillator);
      oscillator.start(audio.currentTime);
      oscillator.stop(audio.currentTime + duration);
    } catch { /* Sound is optional: navigation/theme changes must never depend on it. */ }
  }
  return { isEnabled: () => enabled, setEnabled, play };
}

export function initInterfaceSounds() {
  const root = document.documentElement;
  if (root.dataset.soundControlsReady) return;
  root.dataset.soundControlsReady = 'true';
  let storage: Storage | undefined;
  try { storage = window.localStorage; } catch { /* Storage can be denied. */ }
  const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  const sounds = createInterfaceSounds({ storage, createContext: AudioContextClass ? () => new AudioContextClass() : undefined });
  function render() {
    document.querySelectorAll<HTMLButtonElement>('[data-sound-toggle]').forEach(button => {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(sounds.isEnabled()));
      button.setAttribute('aria-label', sounds.isEnabled() ? 'Turn interface sounds off' : 'Turn interface sounds on');
      const label = button.querySelector('[data-sound-label]');
      if (label) label.textContent = sounds.isEnabled() ? 'Sound on' : 'Sound off';
      button.querySelectorAll<HTMLElement>('[data-sound-icon]').forEach(icon => { icon.hidden = icon.dataset.soundIcon !== (sounds.isEnabled() ? 'on' : 'off'); });
    });
  }
  render();
  document.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || !(event.target instanceof Element)) return;
    const soundToggle = event.target.closest('[data-sound-toggle]');
    if (soundToggle) {
      sounds.setEnabled(!sounds.isEnabled()); render();
      if (sounds.isEnabled()) void sounds.play('focus');
      return;
    }
    if (event.target.closest('#themeButton')) { void sounds.play('theme'); return; }
    const control = event.target.closest<HTMLElement>('[data-nav-prev], [data-nav-next], [data-nav-toggle], [data-nav-hide], [data-nav-show], [data-section-link], .section-nav-summary');
    if (control && !control.hasAttribute('disabled') && control.closest('[data-section-navigation]')) void sounds.play('focus');
  });
  window.addEventListener('storage', event => {
    if (event.key !== SOUND_PREFERENCE_KEY && event.key !== null) return;
    sounds.setEnabled(event.key === SOUND_PREFERENCE_KEY && event.newValue === 'on', false); render();
  });
}
