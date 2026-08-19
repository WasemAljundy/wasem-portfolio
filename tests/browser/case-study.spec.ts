import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Locator, type Page } from "@playwright/test";

async function expectDecodedImages(scope: Locator) {
  const images = scope.locator("img:visible");
  for (let index = 0; index < (await images.count()); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((element) => (element as HTMLImageElement).naturalWidth),
    ).toBeGreaterThan(0);
  }
}

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
}

test("homepage to Jood to next-project journey remains coherent", async ({ page }) => {
  await page.goto("/");
  const jood = page.locator("#jood");
  await expect(jood.getByRole("heading", { level: 3, name: "Jood" })).toBeVisible();
  await jood.getByRole("link", { name: /See architecture and release story/ }).click();

  await expect(page).toHaveURL(/\/work\/jood$/);
  await expect(page.getByRole("heading", { level: 1, name: "Jood" })).toBeVisible();
  await expect(page.locator("#transaction-flow")).toBeVisible();
  await page.getByRole("link", { name: "View Eureeca" }).click();

  await expect(page).toHaveURL(/\/work\/eureeca$/);
  await expect(page.getByRole("heading", { level: 1, name: "Eureeca" })).toBeVisible();
  await expect(page.locator("#transaction-flow")).toHaveCount(0);
  await expect(page.locator("#engineering-decisions")).toHaveCount(0);
});

test("Jood exposes project metadata, truthful structured data, and safe store links", async ({
  page,
  request,
}) => {
  await page.goto("/work/jood");
  await expect(page).toHaveTitle(/Jood Flutter Case Study/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /booking, payment, QR, account, and cross-platform release journeys/,
  );
  const socialImage = await request.get("/api/og?project=jood");
  expect(socialImage.ok()).toBeTruthy();
  expect(socialImage.headers()["content-type"]).toContain("image/png");

  const structuredData = JSON.parse(
    (await page.locator('article > script[type="application/ld+json"]').textContent()) ?? "{}",
  ) as Record<string, unknown>;
  expect(structuredData["@type"]).toBe("SoftwareApplication");
  expect(structuredData.name).toBe("Jood");
  expect(structuredData.applicationCategory).toBe("MobileApplication");

  for (const label of ["Google Play", "App Store"]) {
    const link = page.getByRole("link", { name: new RegExp(label) }).first();
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

for (const width of [375, 768, 1024, 1440]) {
  test(`Jood case study renders without overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    await page.goto("/work/jood");
    await expectDecodedImages(page.locator("main"));
    await expectNoHorizontalOverflow(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
    await page.screenshot({
      path: `test-results/milestone-2c-jood-full-${width}.png`,
      fullPage: true,
    });
  });
}

test("Milestone 2C focused review surfaces preserve the homepage transition", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
  const homepageJood = page.locator("#jood");
  await expectDecodedImages(homepageJood);
  await homepageJood.screenshot({ path: "test-results/milestone-2c-homepage-jood-entry.png" });
  await homepageJood.getByRole("link", { name: /See architecture and release story/ }).click();

  const hero = page.locator("#case-study-hero");
  await expectDecodedImages(hero);
  await hero.screenshot({ path: "test-results/milestone-2c-jood-hero.png" });
  await page.addStyleTag({
    content: ".site-header, .skip-link, nextjs-portal { display: none !important; }",
  });

  for (const [selector, filename] of [
    ["#transaction-flow", "milestone-2c-jood-transaction-flow.png"],
    ["#engineering-approach", "milestone-2c-jood-engineering-approach.png"],
    ["#engineering-decisions", "milestone-2c-jood-engineering-decisions.png"],
    ["#product-gallery", "milestone-2c-jood-gallery.png"],
    ["#case-study-ending", "milestone-2c-jood-outcome-next.png"],
  ] as const) {
    const section = page.locator(selector);
    await expectDecodedImages(section);
    await section.screenshot({ path: `test-results/${filename}` });
  }
});

test("Jood case study has no serious automated accessibility violations", async ({ page }) => {
  await page.goto("/work/jood");
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );
  expect(serious).toEqual([]);
});

test("Jood remains usable at a 200% browser-zoom equivalent viewport", async ({ page }) => {
  await page.setViewportSize({ width: 384, height: 900 });
  await page.goto("/work/jood");
  await expectNoHorizontalOverflow(page);
  await expect(page.getByRole("link", { name: /View Eureeca/ })).toBeVisible();
});
