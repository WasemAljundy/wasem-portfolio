import { chromium } from "@playwright/test";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const origin = process.argv[2] ?? process.env.PERFORMANCE_ORIGIN ?? "http://127.0.0.1:3000";
const routePath = process.argv[3] ?? process.env.PERFORMANCE_PATH ?? "/work/jood";
const samples = Number.parseInt(process.argv[4] ?? process.env.PERFORMANCE_SAMPLES ?? "3", 10);
const requestedViewport = process.argv[5] ?? process.env.PERFORMANCE_VIEWPORT;
const protectionBypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
const configuredViewports = [
  { label: "mobile", width: 375, height: 812 },
  { label: "desktop", width: 1440, height: 900 },
];
const viewports = requestedViewport
  ? configuredViewports.filter(({ label }) => label === requestedViewport)
  : configuredViewports;

if (viewports.length === 0) {
  throw new Error(`Unknown viewport \"${requestedViewport}\". Use mobile or desktop.`);
}

function median(values) {
  const sorted = [...values].sort((left, right) => left - right);
  return sorted[Math.floor(sorted.length / 2)];
}

const localChromium = resolve(
  ".playwright-browsers/chromium_headless_shell-1234/chrome-headless-shell-win64/chrome-headless-shell.exe",
);
const browser = await chromium.launch(
  existsSync(localChromium) ? { executablePath: localChromium } : undefined,
);

try {
  for (const viewport of viewports) {
    const results = [];
    for (let sample = 0; sample < samples; sample += 1) {
      const context = await browser.newContext({
        viewport,
        ...(protectionBypass
          ? {
              extraHTTPHeaders: {
                "x-vercel-protection-bypass": protectionBypass,
                "x-vercel-set-bypass-cookie": "true",
              },
            }
          : {}),
      });
      const page = await context.newPage();
      await page.addInitScript(() => {
        window.__portfolioMetrics = { cls: 0, lcp: 0 };
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) window.__portfolioMetrics.lcp = entry.startTime;
        }).observe({ type: "largest-contentful-paint", buffered: true });
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) window.__portfolioMetrics.cls += entry.value;
          }
        }).observe({ type: "layout-shift", buffered: true });
      });
      await page.goto(`${origin}${routePath}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(1_000);
      results.push(
        await page.evaluate(() => {
          const resources = performance.getEntriesByType("resource");
          const transferred = (type) =>
            Math.round(
              resources
                .filter((entry) => entry.initiatorType === type)
                .reduce((sum, entry) => sum + (entry.transferSize || entry.encodedBodySize), 0) /
                1024,
            );
          return {
            ...window.__portfolioMetrics,
            cssKb: transferred("css"),
            imageKb: transferred("img"),
            jsKb: transferred("script"),
          };
        }),
      );
      await context.close();
    }

    console.log(
      JSON.stringify({
        routePath,
        viewport,
        samples,
        median: {
          lcpMs: Math.round(median(results.map((result) => result.lcp))),
          cls: Number(median(results.map((result) => result.cls)).toFixed(4)),
          imageKb: median(results.map((result) => result.imageKb)),
          jsKb: median(results.map((result) => result.jsKb)),
          cssKb: median(results.map((result) => result.cssKb)),
        },
        runs: results,
      }),
    );
  }
} finally {
  await browser.close();
}
