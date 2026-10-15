// Flow Nocturne — animated desktop wallpaper (Lively Wallpaper, Three.js).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { settings, onSettingChange, applyUrlOverrides } from './settings.js';
import { makeRng } from './rng.js';
import { buildScene } from './scenes.js';
import { CAM_Z, FOV } from './fx.js';
import logoUrl from '../assets/flow-logo.png';
import silhouetteUrl from '../assets/silhouette.png';
import bebasUrl from '../fonts/BebasNeue-Regular.ttf';
import monoUrl from '../fonts/DMMono-Regular.ttf';

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'low-power', stencil: false });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x06070b, 1);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
camera.position.set(0, 0, CAM_Z);

const composer = new EffectComposer(renderer);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.42, 0.55, 0.78);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(bloomPass);
composer.addPass(new OutputPass());

const app = { renderer, scene, camera, aspect: 1, pixelRatio: 1, time: 0, current: null, paused: false, dirty: true, tex: {} };
const mouse = new THREE.Vector2(); let mouseAt = -1e9;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const freezeAt = new URLSearchParams(location.search).get('t');

// ---------------------------------------------------------------- settings → app
function motionScale() { return reduceMotion ? 0 : settings.motion / 60; }
function applyExposure() { renderer.toneMappingExposure = 1.25 * (settings.brightness / 100); app.dirty = true; }
function applyBloom() { bloomPass.enabled = settings.bloom && !settings.eco; app.dirty = true; }
function applyClock() { document.getElementById('clock').hidden = !settings.showClock; }
function applySceneClass() { document.body.dataset.scene = String(settings.scene); }

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  if (!(w > 0 && h > 0)) return;                             // hidden/zero-size host: keep last layout
  app.pixelRatio = settings.eco ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
  renderer.setPixelRatio(app.pixelRatio);
  renderer.setSize(w, h, false);
  composer.setPixelRatio(app.pixelRatio);
  composer.setSize(w, h);
  app.aspect = w / h; camera.aspect = app.aspect; camera.updateProjectionMatrix();
  app.dirty = true;
}

let seed = 1337;
function rebuild() {
  if (!app.tex.logo || !app.tex.silhouette) return;          // a resize can fire before the textures are in
  if (app.current) { scene.remove(app.current.group); app.current.dispose(); }
  app.current = buildScene(settings.scene, app, makeRng(seed), app.tex);
  scene.add(app.current.group);
  applySceneClass();
  app.dirty = true;
}
let rebuildTimer = 0;
const scheduleRebuild = () => { clearTimeout(rebuildTimer); rebuildTimer = setTimeout(rebuild, 160); };

onSettingChange((key) => {
  switch (key) {
    case 'scene': case 'density': case 'accent': case 'nightComfort': scheduleRebuild(); break;
    case 'brightness': applyExposure(); break;
    case 'bloom': applyBloom(); break;
    case 'eco': resize(); applyBloom(); break;
    case 'showLogo': if (app.current) app.current.setLogoVisible(settings.showLogo); app.dirty = true; break;
    case 'showClock': applyClock(); break;
    default: app.dirty = true;
  }
});

// Lively: playback pause/resume (needs "--pause-event true" in LivelyInfo.json)
window.livelyWallpaperPlaybackChanged = (data) => { try { app.paused = !!JSON.parse(data).IsPaused; } catch { /* ignore */ } };

// ---------------------------------------------------------------------- inputs
window.addEventListener('mousemove', (e) => {
  mouse.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
  mouseAt = performance.now();
});
let resizeTimer = 0;
window.addEventListener('resize', () => { resize(); clearTimeout(resizeTimer); resizeTimer = setTimeout(rebuild, 250); });
canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
canvas.addEventListener('webglcontextrestored', () => rebuild());

const camTarget = new THREE.Vector2();
function updateCamera(dt, t) {
  if (settings.parallax) {
    const live = performance.now() - mouseAt < 6000;
    if (live) camTarget.copy(mouse); else camTarget.set(Math.sin(t * 0.07) * 0.6, Math.sin(t * 0.053) * 0.4);
  } else camTarget.set(0, 0);
  const k = 1 - Math.pow(0.001, dt);                         // frame-rate independent lerp
  const nx = THREE.MathUtils.lerp(camera.position.x, camTarget.x * 0.42, k * 0.5);
  const ny = THREE.MathUtils.lerp(camera.position.y, camTarget.y * 0.26, k * 0.5);
  if (Math.abs(nx - camera.position.x) > 1e-5 || Math.abs(ny - camera.position.y) > 1e-5) app.dirty = true;
  camera.position.x = nx; camera.position.y = ny;
  camera.lookAt(0, 0, 0);
}

// ----------------------------------------------------------------------- clock
function tickClock() {
  const d = new Date();
  document.getElementById('clock-time').textContent = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('clock-date').textContent = d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
}

// ------------------------------------------------------------------------ loop
let last = performance.now(), acc = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min((now - last) / 1000, 0.05); last = now;
  if (app.paused || document.hidden || !app.current) return;
  if (settings.eco) { acc += dt; if (acc < 1 / 30) return; dt = acc; acc = 0; }
  const ts = motionScale();
  app.time += dt * ts;
  updateCamera(dt, app.time);
  if (ts > 0) { app.current.update(dt * ts, app.time, app.pixelRatio); app.dirty = true; }
  if (!app.dirty) return;
  composer.render(); app.dirty = false;
}

// ------------------------------------------------------------------------ boot
function loadTexture(url) {
  return new Promise((res, rej) => new THREE.TextureLoader().load(url, (t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; res(t); }, undefined, rej));
}
async function loadFonts() {
  try {
    const faces = [new FontFace('Bebas Neue', `url(${bebasUrl})`), new FontFace('DM Mono', `url(${monoUrl})`)];
    for (const f of faces) { await f.load(); document.fonts.add(f); }
  } catch (e) { console.warn('fonts', e); }
}
function textLogoTexture() {
  // Fallback if the PNG ever fails: the word-mark in the brand display face.
  const c = document.createElement('canvas'); c.width = 1024; c.height = 300;
  const g = c.getContext('2d'); g.fillStyle = '#fff'; g.font = '260px "Bebas Neue", Impact, sans-serif';
  g.textBaseline = 'middle'; g.textAlign = 'center'; g.fillText('FLOW', 512, 160);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

(async () => {
  applyUrlOverrides();
  await loadFonts();
  const [logo, silhouette] = await Promise.all([loadTexture(logoUrl).catch(() => textLogoTexture()), loadTexture(silhouetteUrl)]);
  app.tex = { logo, silhouette };
  resize(); applyExposure(); applyBloom(); applyClock();
  rebuild();
  tickClock(); setInterval(tickClock, 1000);

  if (freezeAt !== null) {
    // Deterministic freeze harness: step the simulation to t=N, draw one frame, stop.
    const T = Math.max(0, parseFloat(freezeAt) || 0);
    for (let t = 0; t < T; t += 1 / 60) { app.time = t; app.current.update(1 / 60, t, app.pixelRatio); }
    camera.position.set(0, 0, CAM_Z); camera.lookAt(0, 0, 0);
    composer.render();
    window.__ready = true;
    return;
  }
  window.__ready = true;
  requestAnimationFrame(frame);
})();
