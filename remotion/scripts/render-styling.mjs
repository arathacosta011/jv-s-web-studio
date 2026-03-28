import { bundle } from "@remotion/bundler";
import {
  renderMedia,
  selectComposition,
  openBrowser,
} from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function render(compositionId, outputPath) {
  console.log(`Rendering ${compositionId}...`);

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

  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
    puppeteerInstance: browser,
  });

  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: "h264",
    outputLocation: outputPath,
    puppeteerInstance: browser,
    muted: true,
    concurrency: 1,
  });

  await browser.close({ silent: false });
  console.log(`Done: ${outputPath}`);
}

// Render styling product videos
await render("heem-styling-horizontal", "/mnt/documents/heem-styling-horizontal.mp4");
await render("heem-styling-vertical", "/mnt/documents/heem-styling-vertical.mp4");
