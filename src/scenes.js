// The three scenes. Each returns { group, update(dt, time, pixelRatio), setLogoVisible(bool), dispose() }.
import * as THREE from 'three';
import { settings } from './settings.js';
import {
  screenToWorld, visibleAt, disposeObject, makeSky, makePoints, makeBurst, makeMoon, makeTomoeRing,
  makeSilhouette, makeHolo, makeCrows, makeCore, makeGlowSprite, makeRing, makeTicks, makeWire, makeGridFloor,
} from './fx.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function finish(group, parts, logo) {
  return {
    group,
    update(dt, t, pr) { for (const p of parts) if (p.update) p.update(dt, t, pr); },
    setLogoVisible(v) { if (logo) logo.visible = v; },
    dispose() { disposeObject(group); },
  };
}

// 0 — Nuit Flow (neutre) : encre, poussière en profondeur, marque holographique. Pour bosser.
function nuitFlow(app, rng, tex) {
  const { aspect } = app; const accent = settings.accent; const df = settings.density / 55;
  const group = new THREE.Group(); const parts = [];
  const add = (o) => { group.add(o); parts.push(o); return o; };
  add(makeSky(aspect, { top: '#0a0d16', bottom: '#07080c', glow: accent, glowStrength: 0.09, vignette: 0.5 }));
  add(makeGridFloor({ y: -2.6, color: accent, opacity: 0.07 }));
  add(makePoints(rng, { count: 170 * df, bounds: [18, 11, 2], z: -5, size: [0.9, 1.9], vel: () => [0, 0, 0], colors: ['#dfe6ff', '#ffd9b0'], tintChance: 0.25, opacity: 0.4 }));
  add(makePoints(rng, { count: 330 * df, bounds: [15, 9.5, 8], z: -2, size: [1.8, 4.8], vel: (r) => [r.range(-0.04, 0.04), r.range(0.015, 0.07), 0], colors: [settings.nightComfort ? '#d6cfc4' : '#c8d2ff', accent], tintChance: 0.3, opacity: 0.8, sway: 0.15 }));
  const logo = add(makeHolo(tex.logo, { position: screenToWorld(0.865, 0.86, 0, aspect), width: 1.45, color: accent, opacity: 0.55, glitch: 0.015 }));
  logo.visible = settings.showLogo;
  return finish(group, parts, logo);
}

// 1 — Uchiha : hommage au fond d'origine, version nuit. Lune douce, silhouette, corbeaux, braises.
function uchiha(app, rng, tex) {
  const { aspect } = app; const accent = settings.accent; const df = settings.density / 55; const warm = settings.nightComfort;
  const group = new THREE.Group(); const parts = [];
  const add = (o) => { group.add(o); parts.push(o); return o; };
  add(makeSky(aspect, { top: '#090a14', bottom: '#0e0a10', glow: '#6b0e22', glowStrength: 0.06, horizon: '#4a0a16', horizonStrength: 0.08, vignette: 0.62 }));
  const sil = add(makeSilhouette(tex.silhouette, aspect, { color: '#05060c' }));
  // moon measured on the original artwork (texture coords) and pushed back in depth
  const moonPos = sil.texToWorld(0.4915, 0.3508, -3);
  const moonR = 0.1608 * sil.texWidth * ((10 + 3) / 10);
  add(makeMoon({ position: moonPos, radius: moonR, color: warm ? '#e6dccb' : '#e9e9e4', halo: warm ? '#b48b6e' : '#9fa9c2', haloStrength: warm ? 0.3 : 0.34 }));
  add(makeTomoeRing({ position: moonPos.clone().add(V(0, 0, 0.05)), radius: moonR * 1.0, color: '#7a0f1f', opacity: 0.11 }));
  add(makePoints(rng, { count: 140 * df, bounds: [18, 11, 2], z: -5, size: [0.8, 1.6], vel: () => [0, 0, 0], colors: ['#d8d4e6', '#ffd9b0'], tintChance: 0.3, opacity: 0.26 }));
  const burst = add(makeBurst(rng, { ink: '#0b0c16', ember: accent, max: 500 }));
  const spawn = sil.texToWorld(0.49, 0.41, -0.8);
  const exits = () => {
    const r = rng.f();
    if (r < 0.62) return screenToWorld(rng.range(-0.25, -0.05), rng.range(0.02, 0.35), -2.6, aspect);
    if (r < 0.88) return screenToWorld(rng.range(1.05, 1.25), rng.range(0.0, 0.3), -2.6, aspect);
    return screenToWorld(rng.range(0.2, 0.8), rng.range(-0.3, -0.12), -2.4, aspect);
  };
  add(makeCrows(rng, 24 * df, { spawn, exits, color: '#07080f', scale: [0.2, 0.34], burst }));
  const { w, h } = visibleAt(0, aspect);
  add(makePoints(rng, { count: 130 * df, bounds: [w * 1.2, h * 1.3, 3], z: -0.5, size: [2.6, 5.6], vel: (r) => [r.range(-0.05, 0.05), r.range(0.1, 0.32), 0], colors: [accent, '#ffd6a0'], tintChance: 0.35, opacity: 0.6, sway: 0.12 }));
  add(makePoints(rng, { count: 120 * df, bounds: [15, 9.5, 6], z: -1.5, size: [1.0, 2.4], vel: (r) => [r.range(-0.03, 0.03), r.range(0.01, 0.05), 0], colors: ['#9aa0bd', accent], tintChance: 0.2, opacity: 0.22, sway: 0.1 }));
  const logo = add(makeHolo(tex.logo, { position: screenToWorld(0.885, 0.9, 0.4, aspect), width: 1.1, color: accent, opacity: 0.42, glitch: 0.012 }));
  logo.visible = settings.showLogo;
  return finish(group, parts, logo);
}

// 2 — Jarvis : HUD holographique. Cœur fresnel, anneaux segmentés, graduations, filaire.
function jarvis(app, rng, tex) {
  const { aspect } = app; const accent = settings.accent; const df = settings.density / 55;
  const group = new THREE.Group(); const parts = [];
  const add = (o) => { group.add(o); parts.push(o); return o; };
  add(makeSky(aspect, { top: '#070a12', bottom: '#0b0a0d', glow: accent, glowStrength: 0.09, horizon: accent, horizonStrength: 0.03, vignette: 0.66 }));
  const c = V(0, 0.15, 0);
  add(makeGlowSprite({ position: c, color: accent, size: 2.4, opacity: 0.55 }));
  add(makeCore({ position: c, radius: 0.42, color: accent }));
  const rings = [
    { radius: 0.72, width: 0.03, segments: 24, duty: 0.55, speed: 0.06, opacity: 0.6, tilt: [0, 0], spin: 0.05 },
    { radius: 1.02, width: 0.012, segments: 3, duty: 0.4, speed: -0.03, opacity: 0.42, tilt: [1.15, 0.2], spin: -0.12 },
    { radius: 1.38, width: 0.02, segments: 64, duty: 0.6, speed: 0.02, opacity: 0.3, tilt: [0.9, -0.5], spin: 0.08 },
    { radius: 1.86, width: 0.014, segments: 8, duty: 0.82, speed: -0.015, opacity: 0.32, tilt: [1.5, 0.1], spin: 0.04 },
    { radius: 2.5, width: 0.01, segments: 140, duty: 0.5, speed: 0.01, opacity: 0.16, tilt: [0.3, 0.2], spin: -0.02 },
  ];
  for (const r of rings) add(makeRing({ ...r, color: accent, position: c }));
  add(makeTicks({ position: c, radius: 2.08, count: 72, major: 6, len: 0.06, color: accent, opacity: 0.3, tilt: [0.3, 0.2], spin: -0.03 }));
  add(makeTicks({ position: c, radius: 1.52, count: 36, major: 9, len: 0.1, color: accent, opacity: 0.22, tilt: [0.9, -0.5], spin: 0.05 }));
  add(makeWire({ position: c, radius: 0.95, detail: 1, color: accent, opacity: 0.2, spin: 0.09 }));
  add(makeWire({ position: c, radius: 1.75, detail: 0, color: accent, opacity: 0.07, spin: -0.04 }));
  add(makePoints(rng, { count: 240 * df, bounds: [15, 9.5, 7], z: -2, size: [0.9, 2.4], vel: (r) => [r.range(-0.03, 0.03), r.range(0.01, 0.04), 0], colors: ['#ffe2c2', accent], tintChance: 0.5, opacity: 0.4, sway: 0.08 }));
  add(makePoints(rng, { count: 120 * df, bounds: [18, 11, 2], z: -5, size: [0.8, 1.5], vel: () => [0, 0, 0], colors: ['#dfe6ff', accent], tintChance: 0.3, opacity: 0.25 }));
  const logo = add(makeHolo(tex.logo, { position: screenToWorld(0.5, 0.82, 0, aspect), width: 1.7, color: accent, opacity: 0.6, glitch: 0.03 }));
  logo.visible = settings.showLogo;
  return finish(group, parts, logo);
}

export const SCENES = [nuitFlow, uchiha, jarvis];
export function buildScene(id, app, rng, tex) {
  const fn = SCENES[id] || SCENES[0];
  return fn(app, rng, tex);
}
