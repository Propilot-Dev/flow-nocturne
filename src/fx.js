// Reusable visual building blocks. Each factory returns a THREE object (or a small
// controller) with an `update(dt, time)` where motion is involved.
import * as THREE from 'three';
import {
  UV_VERT, SKY_FRAG, POINTS_VERT, POINTS_FRAG, BURST_VERT, BURST_FRAG, MOON_FRAG,
  HOLO_FRAG, CROW_VERT, CROW_FRAG, FRESNEL_VERT, FRESNEL_FRAG, RING_VERT, RING_FRAG, GRID_VERT, GRID_FRAG,
} from './shaders.js';

export const CAM_Z = 10;
export const FOV = 30;

// Size of the view frustum (world units) at depth z, camera at CAM_Z looking down -z.
export function visibleAt(z, aspect) {
  const d = CAM_Z - z;
  const h = 2 * d * Math.tan(THREE.MathUtils.degToRad(FOV / 2));
  return { w: h * aspect, h };
}
// Normalised screen coords (0..1, y down like an image) → world position at depth z.
export function screenToWorld(nx, ny, z, aspect) {
  const { w, h } = visibleAt(z, aspect);
  return new THREE.Vector3((nx - 0.5) * w, (0.5 - ny) * h, z);
}

export function disposeObject(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    const mats = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
    for (const m of mats) {
      if (m.map) m.map.dispose();
      if (m.uniforms) for (const u of Object.values(m.uniforms)) if (u.value && u.value.isTexture) u.value.dispose();
      m.dispose();
    }
  });
}

const col = (c) => new THREE.Color(c);

// ---------------------------------------------------------------------------- sky
export function makeSky(aspect, o) {
  const { w, h } = visibleAt(-6, aspect);
  const mat = new THREE.ShaderMaterial({
    vertexShader: UV_VERT, fragmentShader: SKY_FRAG, depthWrite: false, depthTest: false,
    uniforms: {
      uTime: { value: 0 },
      uTop: { value: col(o.top) }, uBottom: { value: col(o.bottom) },
      uGlow: { value: col(o.glow) }, uGlowStrength: { value: o.glowStrength ?? 0 },
      uHorizon: { value: col(o.horizon ?? '#000000') }, uHorizonStrength: { value: o.horizonStrength ?? 0 },
      uVignette: { value: o.vignette ?? 0.55 },
    },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w * 1.4, h * 1.4), mat);
  mesh.position.z = -6; mesh.renderOrder = -10; mesh.frustumCulled = false;
  mesh.update = (dt, t) => { mat.uniforms.uTime.value = t; };
  return mesh;
}

// ------------------------------------------------------------------ point fields
// o: { count, bounds:[w,h,d], z, size:[min,max], vel:(rng)=>[x,y,z], colors:[a,b], tintChance, opacity, sway, additive }
export function makePoints(rng, o) {
  const n = Math.max(1, Math.round(o.count));
  const pos = new Float32Array(n * 3), vel = new Float32Array(n * 3);
  const size = new Float32Array(n), phase = new Float32Array(n), tint = new Float32Array(n);
  const [bw, bh, bd] = o.bounds;
  for (let i = 0; i < n; i++) {
    pos[i * 3] = rng.range(-bw / 2, bw / 2); pos[i * 3 + 1] = rng.range(-bh / 2, bh / 2); pos[i * 3 + 2] = rng.range(-bd / 2, bd / 2);
    const v = o.vel(rng); vel[i * 3] = v[0]; vel[i * 3 + 1] = v[1]; vel[i * 3 + 2] = v[2];
    size[i] = rng.range(o.size[0], o.size[1]); phase[i] = rng.f();
    tint[i] = rng.f() < (o.tintChance ?? 0.3) ? 1 : 0;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aVel', new THREE.BufferAttribute(vel, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
  geo.setAttribute('aTint', new THREE.BufferAttribute(tint, 1));
  const mat = new THREE.ShaderMaterial({
    vertexShader: POINTS_VERT, fragmentShader: POINTS_FRAG, transparent: true, depthWrite: false,
    blending: o.additive === false ? THREE.NormalBlending : THREE.AdditiveBlending, premultipliedAlpha: true,
    uniforms: {
      uTime: { value: 0 }, uBounds: { value: new THREE.Vector3(bw, bh, bd) },
      uPixelRatio: { value: 1 }, uScale: { value: 1 }, uSway: { value: o.sway ?? 0 },
      uColorA: { value: col(o.colors[0]) }, uColorB: { value: col(o.colors[1]) }, uOpacity: { value: o.opacity ?? 0.5 },
    },
  });
  const pts = new THREE.Points(geo, mat);
  pts.position.z = o.z ?? 0; pts.frustumCulled = false;
  pts.update = (dt, t, pr) => { mat.uniforms.uTime.value = t; mat.uniforms.uPixelRatio.value = pr; };
  return pts;
}

// ------------------------------------------------------------------- burst pool
export function makeBurst(rng, o) {
  const max = o.max ?? 600;
  const pos = new Float32Array(max * 3), life = new Float32Array(max), size = new Float32Array(max), tint = new Float32Array(max);
  const vel = new Float32Array(max * 3), maxLife = new Float32Array(max);
  let head = 0, alive = 0;
  const geo = new THREE.BufferGeometry();
  const posAttr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
  const lifeAttr = new THREE.BufferAttribute(life, 1).setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('position', posAttr); geo.setAttribute('aLife', lifeAttr);
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1)); geo.setAttribute('aTint', new THREE.BufferAttribute(tint, 1));
  const mat = new THREE.ShaderMaterial({
    vertexShader: BURST_VERT, fragmentShader: BURST_FRAG, transparent: true, depthWrite: false, premultipliedAlpha: true,
    uniforms: { uPixelRatio: { value: 1 }, uInk: { value: col(o.ink) }, uEmber: { value: col(o.ember) } },
  });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false;
  pts.spawn = (p, n = 14) => {
    for (let j = 0; j < n; j++) {
      const i = head; head = (head + 1) % max;
      pos[i * 3] = p.x + rng.range(-0.05, 0.05); pos[i * 3 + 1] = p.y + rng.range(-0.03, 0.03); pos[i * 3 + 2] = p.z;
      const a = rng.range(0, Math.PI * 2), s = rng.range(0.08, 0.45);
      vel[i * 3] = Math.cos(a) * s; vel[i * 3 + 1] = Math.sin(a) * s * 0.6 + 0.1; vel[i * 3 + 2] = rng.range(-0.1, 0.1);
      life[i] = 1; maxLife[i] = rng.range(1.0, 2.4); size[i] = rng.range(1.6, 4.2); tint[i] = rng.f() < 0.55 ? 1 : 0;
    }
    alive = max;
  };
  pts.update = (dt, t, pr) => {
    mat.uniforms.uPixelRatio.value = pr;
    if (!alive) return;
    let any = 0;
    for (let i = 0; i < max; i++) {
      if (life[i] <= 0) continue; any++;
      life[i] -= dt / maxLife[i];
      vel[i * 3 + 1] += 0.12 * dt; vel[i * 3] *= 0.985; vel[i * 3 + 1] *= 0.985;
      pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
    }
    alive = any; posAttr.needsUpdate = true; lifeAttr.needsUpdate = true;
  };
  return pts;
}

// ------------------------------------------------------------------------- moon
export function makeGridFloor(o) {
  // Holographic floor: world-space lines fading into the distance, slow scroll toward the viewer.
  const mat = new THREE.ShaderMaterial({
    vertexShader: GRID_VERT, fragmentShader: GRID_FRAG, transparent: true, depthWrite: false, premultipliedAlpha: true,
    uniforms: { uTime: { value: 0 }, uColor: { value: col(o.color) }, uOpacity: { value: o.opacity } },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(60, 36), mat);
  mesh.rotation.x = -Math.PI / 2; mesh.position.set(0, o.y, -6); mesh.renderOrder = -8; mesh.frustumCulled = false;
  mesh.update = (dt, t) => { mat.uniforms.uTime.value = t; };
  return mesh;
}

export function makeMoon(o) {
  const spread = 2.2;
  const size = (o.radius * 2 * spread) / 0.55;
  const mat = new THREE.ShaderMaterial({
    vertexShader: UV_VERT, fragmentShader: MOON_FRAG, transparent: true, depthWrite: false, premultipliedAlpha: true,
    uniforms: {
      uColor: { value: col(o.color) }, uHalo: { value: col(o.halo) }, uHaloStrength: { value: o.haloStrength },
      uTime: { value: 0 }, uSpread: { value: spread },
    },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
  mesh.position.copy(o.position); mesh.renderOrder = -5;
  mesh.update = (dt, t) => { mat.uniforms.uTime.value = t; };
  return mesh;
}

// A faint three-tomoe ring drawn on a canvas: the easter egg in the halo.
export function makeTomoeRing(o) {
  const S = 1024, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'); const cx = S / 2, R = S * 0.36;
  g.strokeStyle = o.color; g.fillStyle = o.color; g.lineCap = 'round';
  g.lineWidth = 5; g.beginPath(); g.arc(cx, cx, R, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 1.5; g.beginPath(); g.arc(cx, cx, R * 0.86, 0, Math.PI * 2); g.stroke();
  for (let k = 0; k < 3; k++) {
    const a0 = (k * Math.PI * 2) / 3;
    const hx = cx + Math.cos(a0) * R * 0.93, hy = cx + Math.sin(a0) * R * 0.93;
    g.beginPath(); g.arc(hx, hy, S * 0.034, 0, Math.PI * 2); g.fill();
    const steps = 22;
    for (let s = 0; s < steps; s++) {
      const a = a0 + (s / steps) * 0.95, a2 = a0 + ((s + 1) / steps) * 0.95;
      const rr = R * 0.93 - (s / steps) * S * 0.01;
      g.lineWidth = S * 0.06 * (1 - s / steps) + 1.5;
      g.beginPath(); g.moveTo(cx + Math.cos(a) * rr, cx + Math.sin(a) * rr); g.lineTo(cx + Math.cos(a2) * rr, cx + Math.sin(a2) * rr); g.stroke();
    }
  }
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const size = (o.radius * 2) / 0.72;
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: o.opacity, depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
  mesh.position.copy(o.position); mesh.renderOrder = -4;
  mesh.update = (dt) => { mesh.rotation.z -= dt * 0.06; };
  return mesh;
}

// ------------------------------------------------------------------- silhouette
export function makeSilhouette(texture, aspect, o) {
  const { w, h } = visibleAt(0, aspect);
  const texAspect = texture.image.width / texture.image.height;
  // cover-fit, with margin so the parallax never shows the edge
  let ph = h, pw = h * texAspect;
  if (pw < w) { pw = w; ph = w / texAspect; }
  pw *= 1.06; ph *= 1.06;
  const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, color: col(o.color), depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), mat);
  mesh.position.z = 0; mesh.renderOrder = 5; mesh.frustumCulled = false;
  mesh.texToWorld = (u, v, z = 0) => { const k = (CAM_Z - z) / CAM_Z; return new THREE.Vector3((u - 0.5) * pw * k, (0.5 - v) * ph * k, z); };
  mesh.texWidth = pw;
  return mesh;
}

// -------------------------------------------------------------------------- holo
export function makeHolo(texture, o) {
  const a = texture.image.width / texture.image.height;
  const mat = new THREE.ShaderMaterial({
    vertexShader: UV_VERT, fragmentShader: HOLO_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uMap: { value: texture }, uTime: { value: 0 }, uColor: { value: col(o.color) }, uOpacity: { value: o.opacity }, uGlitch: { value: o.glitch ?? 0.02 } },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(o.width, o.width / a), mat);
  mesh.position.copy(o.position); mesh.renderOrder = 20;
  const base = o.position.clone();
  mesh.update = (dt, t) => {
    mat.uniforms.uTime.value = t;
    mesh.position.y = base.y + Math.sin(t * 0.5) * 0.03;
    mesh.rotation.y = Math.sin(t * 0.3) * 0.14;
    mesh.rotation.x = Math.sin(t * 0.21) * 0.05;
  };
  return mesh;
}

// -------------------------------------------------------------------------- crows
function crowGeometry() {
  // 2D silhouette in XY (billboard), wingspan -0.55..0.55; the vertex shader flaps it.
  const L = [
    [-0.06, 0.03], [-0.06, -0.04], [-0.30, 0.09], [-0.28, -0.01], [-0.55, 0.16],
  ];
  const tri = [];
  const push = (a, b, c) => tri.push(...a, 0, ...b, 0, ...c, 0);
  const wing = (s) => {
    const P = L.map(([x, y]) => [x * s, y]);
    push(P[0], P[2], P[1]); push(P[1], P[2], P[3]); push(P[2], P[4], P[3]);
  };
  wing(1); wing(-1);
  push([-0.07, 0.0], [0.0, 0.07], [0.07, 0.0]); push([-0.07, 0.0], [0.07, 0.0], [0.0, -0.09]);   // body
  push([0.0, 0.05], [0.05, 0.11], [0.11, 0.08]);                                                 // head/beak
  push([0.0, -0.03], [0.05, -0.17], [-0.05, -0.17]);                                             // tail
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  return geo;
}

// o: { spawn:Vector3, exits:()=>Vector3, color, scale:[min,max], burst }
export function makeCrows(rng, count, o) {
  const n = Math.max(1, Math.round(count));
  const geo = new THREE.InstancedBufferGeometry().copy(crowGeometry());
  const phase = new Float32Array(n), flap = new Float32Array(n), fade = new Float32Array(n);
  for (let i = 0; i < n; i++) { phase[i] = rng.range(0, Math.PI * 2); flap[i] = rng.range(7.5, 11.5); }
  const fadeAttr = new THREE.InstancedBufferAttribute(fade, 1).setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phase, 1));
  geo.setAttribute('aFlap', new THREE.InstancedBufferAttribute(flap, 1));
  geo.setAttribute('aFade', fadeAttr);
  const mat = new THREE.ShaderMaterial({
    vertexShader: CROW_VERT, fragmentShader: CROW_FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uColor: { value: col(o.color) } },
  });
  const mesh = new THREE.InstancedMesh(geo, mat, n); mesh.frustumCulled = false; mesh.renderOrder = 3;
  const dummy = new THREE.Object3D(); const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
  const crows = [];
  const bez = (c, t, out) => {
    const u = 1 - t;
    out.set(0, 0, 0)
      .addScaledVector(c.p0, u * u * u).addScaledVector(c.p1, 3 * u * u * t)
      .addScaledVector(c.p2, 3 * u * t * t).addScaledVector(c.p3, t * t * t);
    return out;
  };
  const respawn = (c, t0 = 0) => {
    c.p0 = o.spawn.clone().add(new THREE.Vector3(rng.range(-0.12, 0.12), rng.range(-0.05, 0.08), 0));
    c.p3 = o.exits();
    const up = rng.range(0.5, 1.6);
    c.p1 = c.p0.clone().add(new THREE.Vector3(rng.range(-0.6, 0.6), up, rng.range(-0.4, 0.2)));
    c.p2 = c.p3.clone().lerp(c.p0, rng.range(0.25, 0.55)).add(new THREE.Vector3(0, rng.range(0.2, 1.2), rng.range(-0.6, 0.3)));
    c.dur = rng.range(16, 30); c.t = t0; c.scale = rng.range(o.scale[0], o.scale[1]); c.bob = rng.range(0, 6.28);
  };
  for (let i = 0; i < n; i++) { const c = {}; respawn(c, rng.f() < 0.6 ? rng.f() : 0); crows.push(c); }
  mesh.update = (dt, t) => {
    mat.uniforms.uTime.value = t;
    for (let i = 0; i < n; i++) {
      const c = crows[i];
      c.t += dt / c.dur;
      if (c.t >= 1) { respawn(c, 0); }
      bez(c, c.t, tmp); bez(c, Math.min(c.t + 0.01, 1), tmp2);
      const dx = tmp2.x - tmp.x, dy = tmp2.y - tmp.y;
      const bank = Math.atan2(dy, Math.abs(dx) + 1e-4) * 0.45;
      tmp.y += Math.sin(t * 1.3 + c.bob) * 0.02;
      const fin = THREE.MathUtils.smoothstep(c.t, 0, 0.07), fout = 1 - THREE.MathUtils.smoothstep(c.t, 0.86, 0.98);
      fade[i] = fin * fout;
      if (c.t > 0.9 && !c.burst && o.burst) { c.burst = true; o.burst.spawn(tmp, 10); }
      if (c.t < 0.05) c.burst = false;
      const s = c.scale * (1 - c.t * 0.45);
      dummy.position.copy(tmp); dummy.rotation.set(0, 0, bank); dummy.scale.setScalar(s); dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true; fadeAttr.needsUpdate = true;
  };
  return mesh;
}

// ------------------------------------------------------------------------ jarvis
export function makeCore(o) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: FRESNEL_VERT, fragmentShader: FRESNEL_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: col(o.color) }, uTime: { value: 0 }, uPower: { value: 2.6 }, uStrength: { value: 1.7 } },
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(o.radius, 48, 48), mat);
  mesh.position.copy(o.position);
  mesh.update = (dt, t) => { mat.uniforms.uTime.value = t; mesh.rotation.y += dt * 0.2; };
  return mesh;
}
export function makeGlowSprite(o) {
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'); const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.18, o.color); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, S, S);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: o.opacity }));
  sp.position.copy(o.position); sp.scale.setScalar(o.size);
  sp.update = (dt, t) => { sp.material.opacity = o.opacity * (0.85 + 0.15 * Math.sin(t * 1.7)); };
  return sp;
}
export function makeRing(o) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: RING_VERT, fragmentShader: RING_FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide, premultipliedAlpha: true,
    uniforms: { uColor: { value: col(o.color) }, uTime: { value: 0 }, uSegments: { value: o.segments }, uDuty: { value: o.duty }, uSpeed: { value: o.speed }, uOpacity: { value: o.opacity } },
  });
  const mesh = new THREE.Mesh(new THREE.RingGeometry(o.radius, o.radius + o.width, 160, 1), mat);
  mesh.position.copy(o.position); mesh.rotation.set(o.tilt[0], o.tilt[1], 0);
  mesh.update = (dt, t) => { mat.uniforms.uTime.value = t; mesh.rotation.z += dt * (o.spin ?? 0); mesh.rotation.y = o.tilt[1] + Math.sin(t * 0.17 + o.radius) * 0.12; };
  return mesh;
}
export function makeTicks(o) {
  const pts = [];
  for (let i = 0; i < o.count; i++) {
    const a = (i / o.count) * Math.PI * 2, L = i % o.major === 0 ? o.len * 1.9 : o.len;
    pts.push(Math.cos(a) * o.radius, Math.sin(a) * o.radius, 0, Math.cos(a) * (o.radius + L), Math.sin(a) * (o.radius + L), 0);
  }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));
  const ln = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: col(o.color), transparent: true, opacity: o.opacity, depthWrite: false }));
  ln.position.copy(o.position); ln.rotation.set(o.tilt[0], o.tilt[1], 0);
  ln.update = (dt) => { ln.rotation.z += dt * o.spin; };
  return ln;
}
export function makeWire(o) {
  const geo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(o.radius, o.detail));
  const ln = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: col(o.color), transparent: true, opacity: o.opacity, depthWrite: false }));
  ln.position.copy(o.position);
  ln.update = (dt) => { ln.rotation.y += dt * o.spin; ln.rotation.x += dt * o.spin * 0.6; };
  return ln;
}
