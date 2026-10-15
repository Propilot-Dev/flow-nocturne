// GLSL sources. Everything noise-based shares the same hash/fbm block.
export const NOISE = /* glsl */ `
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0)), c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
    return v;
  }
`;

export const UV_VERT = /* glsl */ `
  varying vec2 vUv;
  void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

// --- Sky: ink gradient, slow nebular drift, breathing accent glow, horizon band -------
export const SKY_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime; uniform vec3 uTop; uniform vec3 uBottom;
  uniform vec3 uGlow; uniform float uGlowStrength;
  uniform vec3 uHorizon; uniform float uHorizonStrength; uniform float uVignette;
  varying vec2 vUv;
  ${NOISE}
  void main(){
    vec2 uv = vUv;
    vec3 col = mix(uBottom, uTop, smoothstep(0.0, 1.0, uv.y));
    float n = fbm(uv * 2.5 + vec2(uTime * 0.012, -uTime * 0.008));
    col += (n - 0.5) * 0.03;
    float breathe = 0.8 + 0.2 * sin(uTime * 0.25);
    float g = exp(-pow(length((uv - vec2(0.5, -0.1)) * vec2(1.0, 1.6)), 1.6) * 2.2);
    col += uGlow * g * uGlowStrength * breathe;
    col += uHorizon * uHorizonStrength * smoothstep(0.42, 0.0, uv.y) * (0.7 + 0.3 * n);
    float v = 1.0 - uVignette * smoothstep(0.35, 1.1, length((uv - 0.5) * vec2(1.25, 1.0)));
    col *= v;
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;   // dither against banding
    gl_FragColor = vec4(col, 1.0);
  }
`;

// --- Points: stars / dust / embers. GPU-driven drift that wraps inside a box ----------
export const POINTS_VERT = /* glsl */ `
  attribute float aSize; attribute float aPhase; attribute vec3 aVel; attribute float aTint;
  uniform float uTime; uniform vec3 uBounds; uniform float uPixelRatio; uniform float uScale; uniform float uSway;
  varying float vAlpha; varying float vTint;
  void main(){
    vec3 p = position + aVel * uTime;
    p.x += sin(uTime * (0.5 + aPhase) + aPhase * 6.2831) * uSway;
    p = mod(p + uBounds * 0.5, uBounds) - uBounds * 0.5;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float tw = 0.6 + 0.4 * sin(uTime * (0.7 + aPhase * 1.1) + aPhase * 6.2831);
    vAlpha = tw; vTint = aTint;
    gl_PointSize = aSize * uScale * uPixelRatio * (9.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;
export const POINTS_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColorA; uniform vec3 uColorB; uniform float uOpacity;
  varying float vAlpha; varying float vTint;
  void main(){
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    float a = smoothstep(0.5, 0.05, d); a *= a;
    vec3 col = mix(uColorA, uColorB, vTint);
    float k = a * vAlpha * uOpacity;
    gl_FragColor = vec4(col * k, k);
  }
`;

// --- Burst particles (CPU pool): a crow dissolving into ink that cools into ember -----
export const BURST_VERT = /* glsl */ `
  attribute float aLife; attribute float aSize; attribute float aTint;
  uniform float uPixelRatio;
  varying float vLife; varying float vTint;
  void main(){
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vLife = aLife; vTint = aTint;
    gl_PointSize = aSize * uPixelRatio * (9.0 / -mv.z) * (0.4 + 0.6 * aLife);
    gl_Position = projectionMatrix * mv;
  }
`;
export const BURST_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uInk; uniform vec3 uEmber;
  varying float vLife; varying float vTint;
  void main(){
    if (vLife <= 0.0) discard;
    vec2 c = gl_PointCoord - 0.5; float d = length(c);
    float a = smoothstep(0.5, 0.1, d) * vLife;
    vec3 col = mix(uInk, uEmber, vTint * (1.0 - vLife));
    gl_FragColor = vec4(col * a, a);
  }
`;

// --- Moon: disc + maria + limb darkening + wide soft halo (premultiplied alpha) -------
export const MOON_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor; uniform vec3 uHalo; uniform float uHaloStrength; uniform float uTime; uniform float uSpread;
  varying vec2 vUv;
  ${NOISE}
  void main(){
    vec2 p = (vUv - 0.5) * 2.0 * uSpread;
    float r = length(p);
    float disc = 1.0 - smoothstep(0.545, 0.56, r);
    float n = fbm(p * 2.6 + vec2(3.7, 1.3));
    float n2 = fbm(p * 6.0 + 11.0);
    float maria = smoothstep(0.52, 0.74, n);                 // darker seas, never bright patches
    vec3 surf = uColor * (1.0 - 0.09 * maria) * (0.97 + 0.03 * n2);
    surf *= 0.84 + 0.16 * (1.0 - smoothstep(0.2, 0.56, r));
    float halo = exp(-max(r - 0.55, 0.0) * 4.2) * uHaloStrength * (1.0 - disc);
    halo *= 0.95 + 0.05 * sin(uTime * 0.6);
    vec3 col = surf * disc + uHalo * halo;
    float a = max(disc, halo);
    gl_FragColor = vec4(col, a);
  }
`;

// --- Holographic floor grid (world-space lines, slow scroll toward the viewer) --------
export const GRID_VERT = /* glsl */ `
  varying vec3 vW;
  void main(){ vW = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
export const GRID_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime; uniform vec3 uColor; uniform float uOpacity;
  varying vec3 vW;
  void main(){
    vec2 g = vec2(vW.x * 0.5, vW.z * 0.5 + uTime * 0.06);
    vec2 f = abs(fract(g) - 0.5);
    vec2 fw = fwidth(g) * 1.2;
    vec2 l = 1.0 - smoothstep(vec2(0.0), fw, f);
    float line = max(l.x, l.y);
    float fade = smoothstep(-20.0, -7.0, vW.z) * (1.0 - smoothstep(-3.0, 3.0, vW.z));
    float a = line * fade * uOpacity;
    gl_FragColor = vec4(uColor * a, a);
  }
`;

// --- Holographic plane: scanlines, chromatic split, light sweep, glitch rows ---------
export const HOLO_FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D uMap; uniform float uTime; uniform vec3 uColor; uniform float uOpacity; uniform float uGlitch;
  varying vec2 vUv;
  float h1(float n){ return fract(sin(n) * 43758.5453); }
  void main(){
    vec2 uv = vUv;
    float t8 = floor(uTime * 6.0);
    float row = floor(uv.y * 32.0);
    float g = step(1.0 - uGlitch, h1(row * 1.7 + t8));
    uv.x += g * (h1(row * 3.1 + t8) - 0.5) * 0.05;
    float ca = 0.0035 + g * 0.012;
    float r = texture2D(uMap, uv + vec2(ca, 0.0)).a;
    float gg = texture2D(uMap, uv).a;
    float b = texture2D(uMap, uv - vec2(ca, 0.0)).a;
    vec4 tex = texture2D(uMap, uv);
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    float scan = 0.84 + 0.16 * sin(uv.y * 260.0 - uTime * 5.0);
    float sw = fract(uTime * 0.11) * 2.6 - 0.8;
    float sweep = smoothstep(0.22, 0.0, abs(uv.x - sw - uv.y * 0.35));
    float flicker = 0.94 + 0.06 * sin(uTime * 21.0) * sin(uTime * 7.3);
    vec3 base = mix(uColor * 0.85, vec3(1.0, 0.97, 0.92), lum * 0.55);
    vec3 col = base * scan * flicker + vec3(0.95, 0.97, 1.0) * sweep * 0.45;
    vec3 chroma = vec3(r, gg, b) * col;
    float a = max(max(r, gg), b) * uOpacity;
    gl_FragColor = vec4(chroma * a, a);
  }
`;

// --- Crow: instanced billboard silhouette, wings flap in the vertex shader -----------
export const CROW_VERT = /* glsl */ `
  attribute float aPhase; attribute float aFade; attribute float aFlap;
  uniform float uTime;
  varying float vFade;
  void main(){
    vec3 p = position;
    float w = abs(p.x) / 0.55;
    float glide = 0.35 + 0.65 * smoothstep(-0.2, 0.6, sin(uTime * 0.37 + aPhase * 3.0));
    float flap = sin(uTime * aFlap + aPhase) * glide;
    p.y += pow(w, 1.6) * flap * 0.42 - w * 0.06;
    p.z += w * flap * 0.12;
    vFade = aFade;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
  }
`;
export const CROW_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying float vFade;
  void main(){ if (vFade <= 0.001) discard; gl_FragColor = vec4(uColor, vFade); }
`;

// --- Jarvis: fresnel core and dashed rings -------------------------------------------
export const FRESNEL_VERT = /* glsl */ `
  varying vec3 vN; varying vec3 vV;
  void main(){
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;
export const FRESNEL_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor; uniform float uTime; uniform float uPower; uniform float uStrength;
  varying vec3 vN; varying vec3 vV;
  void main(){
    float fr = pow(1.0 - clamp(dot(vN, vV), 0.0, 1.0), uPower);
    float pulse = 0.85 + 0.15 * sin(uTime * 1.7);
    vec3 col = uColor * (0.05 + fr * uStrength * pulse) + vec3(1.0, 0.93, 0.85) * fr * fr * 0.35;
    gl_FragColor = vec4(col, 1.0);
  }
`;
export const RING_VERT = /* glsl */ `
  varying vec3 vPos;
  void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
export const RING_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor; uniform float uTime; uniform float uSegments; uniform float uDuty; uniform float uSpeed; uniform float uOpacity;
  varying vec3 vPos;
  void main(){
    float ang = atan(vPos.y, vPos.x) / 6.2831853 + 0.5;
    float seg = fract(ang * uSegments + uTime * uSpeed);
    float on = smoothstep(0.0, 0.06, seg) * (1.0 - smoothstep(uDuty - 0.06, uDuty, seg));
    float a = on * uOpacity;
    gl_FragColor = vec4(uColor * a * 1.5, a);
  }
`;
