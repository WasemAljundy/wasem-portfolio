import assert from "node:assert/strict";
import test from "node:test";

import { parseSiteUrl, resolveSiteUrl } from "../../src/config/site";

test("site URLs are normalized to a safe HTTP origin", () => {
  assert.equal(parseSiteUrl("https://portfolio.example/work/jood"), "https://portfolio.example");
  assert.throws(() => parseSiteUrl("file:///C:/portfolio"), /HTTP or HTTPS/);
});

test("an explicit custom domain overrides Vercel's production host", () => {
  assert.equal(
    resolveSiteUrl({
      configuredUrl: "https://wasem.example",
      vercelProductionHost: "portfolio-production.test",
    }),
    "https://wasem.example",
  );
});

test("Vercel's stable production host supplies deployment-aware metadata", () => {
  assert.equal(
    resolveSiteUrl({ vercelProductionHost: "portfolio-production.test" }),
    "https://portfolio-production.test",
  );
  assert.equal(resolveSiteUrl({}), undefined);
});
