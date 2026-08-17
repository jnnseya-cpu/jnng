/**
 * PWA asset generator — splash screens + PNG icons.
 * Renders the brand splash (obsidian ground, gold monogram + wordmark) with
 * headless Chromium and screenshots it at every iOS device resolution, both
 * orientations, into public/splash/. Also renders the PNG app icons the
 * manifest needs for Android's generated splash (512px any + maskable) and
 * the apple-touch-icon.
 * Also writes src/lib/splash-screens.json — the apple-touch-startup-image
 * {url, media} list the layout metadata imports, so links and files can
 * never drift apart.
 * The generated files are committed — this script only reruns when the brand
 * changes. Run: npm run pwa-assets   (CHROME_PATH=/opt/pw-browsers/chromium)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright-core";

const OBSIDIAN = "#050709";
const MIDNIGHT = "#081421";
const GOLD = "#C9A55C";
const PAPER = "#F7F8FA";

// css-px width × height @ devicePixelRatio — the iOS device matrix.
const DEVICES = [
  [375, 667, 2], // iPhone SE 2/3, 6–8
  [414, 736, 3], // iPhone 8 Plus
  [375, 812, 3], // iPhone X/XS/11 Pro, 12/13 mini
  [390, 844, 3], // iPhone 12/13/14
  [393, 852, 3], // iPhone 14 Pro, 15, 16
  [402, 874, 3], // iPhone 16 Pro
  [414, 896, 2], // iPhone XR/11
  [414, 896, 3], // iPhone XS Max/11 Pro Max
  [428, 926, 3], // iPhone 12/13 Pro Max, 14 Plus
  [430, 932, 3], // iPhone 14 Pro Max, 15/16 Plus
  [440, 956, 3], // iPhone 16 Pro Max
  [768, 1024, 2], // iPad mini, 9.7"
  [810, 1080, 2], // iPad 10.2"
  [820, 1180, 2], // iPad Air 10.9", iPad 10th gen
  [834, 1194, 2], // iPad Pro 11"
  [1024, 1366, 2], // iPad Pro 12.9"
];

const splashHtml = (w, h) => {
  const unit = Math.min(w, h);
  const tile = Math.round(unit * 0.22);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; }
  body { width:${w}px; height:${h}px; background:${OBSIDIAN};
    display:flex; align-items:center; justify-content:center;
    font-family:'Sora','Segoe UI',system-ui,sans-serif; }
  .stack { display:flex; flex-direction:column; align-items:center; gap:${Math.round(unit * 0.055)}px; }
  .tile { width:${tile}px; height:${tile}px; border-radius:${Math.round(tile * 0.22)}px;
    background:${MIDNIGHT}; border:2px solid rgba(201,165,92,.6);
    display:flex; align-items:center; justify-content:center;
    color:${GOLD}; font-weight:700; font-size:${Math.round(tile * 0.42)}px; }
  .word { color:${PAPER}; letter-spacing:.28em; font-weight:700;
    font-size:${Math.round(unit * 0.045)}px; }
  .word b { color:${GOLD}; font-weight:700; }
  .rule { width:${Math.round(unit * 0.14)}px; height:2px; background:${GOLD}; opacity:.5; }
  </style></head><body><div class="stack">
    <div class="tile">N</div>
    <div class="word">GROUPE&nbsp;<b>NSEYA</b></div>
    <div class="rule"></div>
  </div></body></html>`;
};

// Full-bleed icon; pad=true keeps the monogram inside the maskable safe zone.
const iconHtml = (size, pad) => {
  const glyph = Math.round(size * (pad ? 0.34 : 0.42));
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; }
  body { width:${size}px; height:${size}px; background:${MIDNIGHT};
    display:flex; align-items:center; justify-content:center;
    font-family:'Sora','Segoe UI',system-ui,sans-serif; }
  span { color:${GOLD}; font-weight:700; font-size:${glyph}px; }
  </style></head><body><span>N</span></body></html>`;
};

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH });
mkdirSync(new URL("../public/splash/", import.meta.url), { recursive: true });
mkdirSync(new URL("../public/icons/", import.meta.url), { recursive: true });

const shoot = async (html, w, h, dpr, path) => {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dpr });
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.screenshot({ path: new URL(`../public/${path}`, import.meta.url).pathname });
  await page.close();
  console.log(`✓ public/${path}`);
};

const startupImages = [];
for (const [w, h, dpr] of DEVICES) {
  await shoot(splashHtml(w, h), w, h, dpr, `splash/splash-${w * dpr}x${h * dpr}.png`);
  await shoot(splashHtml(h, w), h, w, dpr, `splash/splash-${h * dpr}x${w * dpr}.png`);
  const base = `(device-width: ${w}px) and (device-height: ${h}px) and (-webkit-device-pixel-ratio: ${dpr})`;
  startupImages.push(
    { url: `/splash/splash-${w * dpr}x${h * dpr}.png`, media: `${base} and (orientation: portrait)` },
    { url: `/splash/splash-${h * dpr}x${w * dpr}.png`, media: `${base} and (orientation: landscape)` },
  );
}
writeFileSync(new URL("../src/lib/splash-screens.json", import.meta.url), JSON.stringify(startupImages, null, 2) + "\n");
console.log(`✓ src/lib/splash-screens.json (${startupImages.length} entries)`);

await shoot(iconHtml(192, false), 192, 192, 1, "icons/icon-192.png");
await shoot(iconHtml(512, false), 512, 512, 1, "icons/icon-512.png");
await shoot(iconHtml(512, true), 512, 512, 1, "icons/icon-512-maskable.png");
await shoot(iconHtml(180, false), 180, 180, 1, "../src/app/apple-icon.png");

await browser.close();
console.log("PWA assets generated.");
