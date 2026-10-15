// Single source of truth for every user-facing knob.
// Keys mirror LivelyProperties.json (Lively calls livelyPropertyListener(name, val)).
const DEFAULTS = {
  scene: 1,            // 0 Nuit Flow (neutre) · 1 Uchiha · 2 Jarvis
  brightness: 70,      // 20..120 (%)
  motion: 60,          // 0..100 (0 = image fixe)
  density: 55,         // 0..100 particules
  parallax: true,
  showLogo: true,
  showClock: false,
  accent: '#FF7A00',   // orange Flow
  nightComfort: true,  // lune plus chaude, moins de bleu
  bloom: true,
  eco: false,          // 30 fps, pas de bloom, dpr 1
};

const listeners = new Set();
export const settings = { ...DEFAULTS };

function coerce(key, val) {
  const d = DEFAULTS[key];
  if (typeof d === 'boolean') return val === true || val === 'true' || val === 1 || val === '1';
  if (typeof d === 'number') { const n = Number(val); return Number.isFinite(n) ? n : d; }
  return String(val);
}

export function setSetting(key, val) {
  if (!(key in DEFAULTS)) return;
  const v = coerce(key, val);
  if (settings[key] === v) return;
  settings[key] = v;
  for (const cb of listeners) cb(key, v);
}
export function onSettingChange(cb) { listeners.add(cb); return () => listeners.delete(cb); }

// URL overrides for local testing: index.html?scene=2&brightness=90&bloom=0
export function applyUrlOverrides() {
  const q = new URLSearchParams(location.search);
  for (const key of Object.keys(DEFAULTS)) if (q.has(key)) setSetting(key, q.get(key));
}

// Lively Wallpaper bridge (called once per key on load, then on every change).
window.livelyPropertyListener = (name, val) => setSetting(name, val);
