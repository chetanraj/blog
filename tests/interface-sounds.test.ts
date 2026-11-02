import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createInterfaceSounds, SOUND_PREFERENCE_KEY } from '../src/utils/interface-sounds.ts';
function setup(options: { stored?: string; blockedStorage?: boolean; unsupported?: boolean; suspended?: boolean; rejectResume?: boolean; delayed?: boolean } = {}) {
  const values = new Map(options.stored ? [[SOUND_PREFERENCE_KEY, options.stored]] : []);
  const tones: any[] = [];
  let contexts = 0; let resumes = 0; let release: (() => void) | undefined;
  const storage = { getItem(key: string) { if (options.blockedStorage) throw Error('denied'); return values.get(key) ?? null; }, setItem(key: string, value: string) { if (options.blockedStorage) throw Error('denied'); values.set(key, value); } };
  const audio: any = { state: options.suspended ? 'suspended' : 'running', currentTime: 2, destination: {}, async resume() { resumes++; if (options.rejectResume) throw Error('blocked'); if (options.delayed) await new Promise<void>(resolve => { release = resolve; }); audio.state = 'running'; }, createOscillator() { const tone: any = { frequency: {}, connect() {}, disconnect() { tone.disconnected = true; }, start(time: number) { tone.startTime = time; }, stop(time?: number) { tone.stops.push(time); }, stops: [] }; tones.push(tone); return tone; }, createGain() { const tone = tones.at(-1); return { connect() {}, disconnect() { tone.gainDisconnected = true; }, gain: { setValueAtTime(value: number, time: number) { tone.gainStart = [value, time]; }, exponentialRampToValueAtTime(value: number, time: number) { tone.gainEnd = [value, time]; } } }; } };
  const controller = createInterfaceSounds({ storage, createContext: options.unsupported ? undefined : () => { contexts++; return audio; } });
  return { controller, tones, values, audio, counts: () => ({ contexts, resumes }), release: () => release?.() };
}
test('default silent, persists preference, original theme beep and subtler focus tick', async () => {
  const app = setup();
  assert.equal(app.controller.isEnabled(), false);
  await app.controller.play('theme'); assert.equal(app.counts().contexts, 0);
  app.controller.setEnabled(true); assert.equal(app.values.get(SOUND_PREFERENCE_KEY), 'on');
  await app.controller.play('theme'); await app.controller.play('focus');
  assert.equal(app.counts().contexts, 1);
  const [theme, focus] = app.tones;
  assert.equal(theme.frequency.value, 800); assert.equal(theme.type, 'sine');
  assert.deepEqual(theme.gainStart, [0.3, 2]); assert.deepEqual(theme.gainEnd, [0.01, 2.1]);
  assert.equal(theme.stops[0], 2.1); assert.equal(focus.stops[0], 2.035);
  assert.equal(focus.frequency.value, 1200); assert.ok(focus.gainStart[0] < theme.gainStart[0]);
  theme.onended(); assert.ok(theme.disconnected && theme.gainDisconnected);
  app.controller.setEnabled(false); assert.equal(app.values.get(SOUND_PREFERENCE_KEY), 'off');
  assert.equal(focus.stops.at(-1), undefined);
  await app.controller.play('focus'); assert.equal(app.tones.length, 2);
});
test('stored opt-in loads silently and repeated clicks reuse resumed context', async () => {
  const app = setup({ stored: 'on', suspended: true });
  assert.equal(app.controller.isEnabled(), true); assert.equal(app.counts().contexts, 0);
  await app.controller.play('theme'); await app.controller.play('focus');
  assert.deepEqual(app.counts(), { contexts: 1, resumes: 1 }); assert.equal(app.tones.length, 2);
});
test('mute while resume is pending suppresses queued sound', async () => {
  const app = setup({ stored: 'on', suspended: true, delayed: true });
  const pending = app.controller.play('focus'); app.controller.setEnabled(false); app.release(); await pending;
  assert.equal(app.tones.length, 0);
});
test('unavailable audio, denied resume or storage failures stay harmless', async () => {
  for (const options of [{ unsupported: true }, { suspended: true, rejectResume: true }, { blockedStorage: true }]) {
    const app = setup(options); app.controller.setEnabled(true); await app.controller.play('theme'); app.controller.setEnabled(false); await app.controller.play('focus');
    assert.equal(app.controller.isEnabled(), false);
  }
});
test('external preference updates do not persist recursively or create audio', () => {
  const app = setup(); app.controller.setEnabled(true, false);
  assert.equal(app.controller.isEnabled(), true); assert.equal(app.values.size, 0); assert.equal(app.counts().contexts, 0);
});
test('sound wiring is explicit-click only; shared controls are accessible and hidden without JS', () => {
  const source = readFileSync(new URL('../src/utils/interface-sounds.ts', import.meta.url), 'utf8');
  assert.match(source, /document\.addEventListener\('click'/); assert.match(source, /#themeButton/);
  assert.match(source, /data-nav-prev/); assert.match(source, /hasAttribute\('disabled'\)/);
  assert.doesNotMatch(source, /addEventListener\('(scroll|hashchange|load|change)'/);
  const button = readFileSync(new URL('../src/components/SoundToggle.astro', import.meta.url), 'utf8');
  assert.match(button, /aria-pressed="false"/); assert.match(button, /data-sound-toggle[^>]* hidden/);
  assert.doesNotMatch(button, /data-sound-label|>Sound (on|off)</);
  assert.match(button, /title="Turn interface sounds on"/);
  assert.match(button, /width:44px; height:44px/);
  assert.match(source, /button\.title = sounds\.isEnabled\(\)/);
});
