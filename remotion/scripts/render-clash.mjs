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

// Render horizontal
const horizComp = await selectComposition({
  serveUrl: bundled,
  id: "heem-clash-horizontal",
  puppeteerInstance: browser,
});

console.log("Rendering horizontal clash video...");
await renderMedia({
  composition: horizComp,
  serveUrl: bundled,
  codec: "h264",
  outputLocation: "/mnt/documents/heem-clash-horizontal.mp4",
  puppeteerInstance: browser,
  muted: true,
  concurrency: 1,
});
console.log("Horizontal done!");

// Render vertical
const vertComp = await selectComposition({
  serveUrl: bundled,
  id: "heem-clash-vertical",
  puppeteerInstance: browser,
});

console.log("Rendering vertical clash video...");
await renderMedia({
  composition: vertComp,
  serveUrl: bundled,
  codec: "h264",
  outputLocation: "/mnt/documents/heem-clash-vertical.mp4",
  puppeteerInstance: browser,
  muted: true,
  concurrency: 1,
});
console.log("Vertical done!");

await browser.close({ silent: false });
console.log("All clash renders complete!");
