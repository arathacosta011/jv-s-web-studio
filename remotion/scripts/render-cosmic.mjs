import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition, openBrowser } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const bundled = await bundle({
  entryPoint: path.resolve(__dirname, "../src/index.ts"),
  webpackOverride: (config) => config,
});

const browser = await openBrowser("chrome", {
  browserExecutable: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/bin/chromium",
  chromiumOptions: {
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
  },
  chromeMode: "chrome-for-testing",
});

// Horizontal
const horizComp = await selectComposition({
  serveUrl: bundled,
  id: "heem-cosmic-horizontal",
  puppeteerInstance: browser,
});

console.log("Rendering cosmic horizontal...");
await renderMedia({
  composition: horizComp,
  serveUrl: bundled,
  codec: "h264",
  outputLocation: "/mnt/documents/heem-cosmic-horizontal.mp4",
  puppeteerInstance: browser,
  muted: true,
  concurrency: 1,
});
console.log("Horizontal done!");

// Vertical
const vertComp = await selectComposition({
  serveUrl: bundled,
  id: "heem-cosmic-vertical",
  puppeteerInstance: browser,
});

console.log("Rendering cosmic vertical...");
await renderMedia({
  composition: vertComp,
  serveUrl: bundled,
  codec: "h264",
  outputLocation: "/mnt/documents/heem-cosmic-vertical.mp4",
  puppeteerInstance: browser,
  muted: true,
  concurrency: 1,
});
console.log("Vertical done!");

await browser.close({ silent: false });
console.log("All cosmic renders complete!");
