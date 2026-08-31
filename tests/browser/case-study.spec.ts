import AxeBuilder from "@axe-core/playwright";
import { devices, expect, test, type Locator, type Page } from "@playwright/test";

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
  await expect(page.locator("#engineering-decisions")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "A team contribution, framed at its actual scale." }),
  ).toBeVisible();
});

const milestone4BStudies = [
  { slug: "sezon-store", heading: "Sezon Store", flow: "#commerce-flow" },
  { slug: "eureeca", heading: "Eureeca", flow: null },
  { slug: "aura-fit", heading: "Aura Fit", flow: "#personalization-flow" },
  { slug: "aid-for-palestine", heading: "Aid for Palestine", flow: "#aid-system-flow" },
] as const;

const milestone5Studies = [
  { slug: "taseese", heading: "Taseese – تأسيس", flow: "#learning-journey" },
  { slug: "eisal", heading: "Eisal", flow: "#document-journey" },
  { slug: "gader", heading: "Gader – جدير", flow: "#consultation-journey" },
] as const;

for (const study of milestone5Studies) {
  test(`${study.heading} renders an evidence-bounded authored narrative`, async ({ page }) => {
    await page.goto(`/work/${study.slug}`);
    await expect(page.getByRole("heading", { level: 1, name: study.heading })).toBeVisible();
    await expect(page.locator("#product-challenge")).toBeVisible();
    await expect(page.locator("#project-ownership")).toBeVisible();
    await expect(page.locator(study.flow)).toBeVisible();
    await expect(page.locator("#engineering-decisions")).toBeVisible();
    await expect(page.locator("#product-states")).toBeVisible();
    await expect(page.locator("#case-study-outcome")).toBeVisible();
    await expectDecodedImages(page.locator("main"));
  });
}

test("case-study navigator derives present sections and enhances native anchors", async ({
  page,
}) => {
  await page.goto("/work/taseese");
  const navigator = page.getByRole("navigation", { name: "Case study sections" });
  await expect(navigator.getByRole("link", { name: "Overview" })).toHaveAttribute(
    "href",
    "#project-overview",
  );
  await expect(navigator.getByRole("link", { name: "Product flow" })).toHaveAttribute(
    "href",
    "#learning-journey",
  );
  await expect(navigator.getByRole("link", { name: "Technology" })).toHaveCount(0);

  await navigator.getByRole("link", { name: "Ownership" }).click();
  await expect(page).toHaveURL(/#project-ownership$/);
  const heading = page.getByRole("heading", {
    name: "One product surface, carried from structure to release.",
  });
  await expect(heading).toBeVisible();
  const box = await heading.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.y).toBeGreaterThan(0);

  await navigator.getByRole("link", { name: "Outcome" }).click();
  await expect(page).toHaveURL(/#case-study-outcome$/);
  await expect(navigator.getByRole("link", { name: "Outcome" })).toHaveAttribute(
    "aria-current",
    "location",
  );
});

test("Featured next-project sequence ends at Gader with recruiter continuation", async ({
  page,
}) => {
  for (const [slug, next] of [
    ["jood", "Eureeca"],
    ["eureeca", "Taseese – تأسيس"],
    ["taseese", "Aura Fit"],
    ["aura-fit", "Eisal"],
    ["eisal", "Gader – جدير"],
  ] as const) {
    await page.goto(`/work/${slug}`);
    await expect(page.getByRole("link", { name: `View ${next}` })).toHaveAttribute(
      "href",
      `/work/${next === "Taseese – تأسيس" ? "taseese" : next === "Aura Fit" ? "aura-fit" : next === "Gader – جدير" ? "gader" : next.toLowerCase()}`,
    );
  }

  await page.goto("/work/gader");
  await expect(
    page.getByRole("heading", { name: "Explore the work or start a conversation." }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore all work" })).toHaveAttribute(
    "href",
    "/work",
  );
  await expect(page.getByRole("link", { name: "View résumé" })).toHaveAttribute("href", "/resume");
  const ending = page.locator("#next-project");
  await expect(ending.getByRole("link", { name: "Contact" })).toHaveAttribute("href", /^mailto:/);
  await expect(ending.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("target", "_blank");
});

for (const width of [375, 768, 1024, 1440]) {
  test(`Milestone 5 case studies remain readable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    for (const study of milestone5Studies) {
      await page.goto(`/work/${study.slug}`);
      await expectNoHorizontalOverflow(page);
      await expectDecodedImages(page.locator("main"));
      await page.screenshot({
        path: `test-results/milestone-5-${study.slug}-${width}.png`,
        fullPage: true,
      });
    }
  });
}

test("Milestone 5 case studies have no serious automated accessibility violations", async ({
  page,
}) => {
  for (const study of milestone5Studies) {
    await page.goto(`/work/${study.slug}`);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(serious, study.slug).toEqual([]);
  }
});

test("case-study navigator and preview motion are disabled for reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/work/taseese");
  const navigatorLink = page
    .getByRole("navigation", { name: "Case study sections" })
    .getByRole("link", { name: "Overview" });
  const navigatorDuration = await navigatorLink.evaluate((link) =>
    Number.parseFloat(getComputedStyle(link).transitionDuration),
  );
  expect(navigatorDuration).toBeLessThanOrEqual(0.001);
  const previewImage = page.locator("#next-project img");
  await previewImage.scrollIntoViewIfNeeded();
  const previewDuration = await previewImage.evaluate((image) =>
    Number.parseFloat(getComputedStyle(image).transitionDuration),
  );
  expect(previewDuration).toBeLessThanOrEqual(0.001);
});

for (const study of milestone4BStudies) {
  test(`${study.heading} renders its authored deep narrative`, async ({ page }) => {
    await page.goto(`/work/${study.slug}`);
    await expect(page.getByRole("heading", { level: 1, name: study.heading })).toBeVisible();
    await expect(page.locator("#product-challenge")).toBeVisible();
    await expect(page.locator("#engineering-decisions")).toBeVisible();
    await expect(page.locator("#case-study-outcome")).toBeVisible();
    if (study.flow) await expect(page.locator(study.flow)).toBeVisible();
    await expectDecodedImages(page.locator("main"));
  });
}

for (const width of [375, 768, 1024, 1440]) {
  test(`Milestone 4B case studies have no overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    for (const study of milestone4BStudies) {
      await page.goto(`/work/${study.slug}`);
      await expectDecodedImages(page.locator("main"));
      await expectNoHorizontalOverflow(page);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: `test-results/milestone-4b-${study.slug}-${width}.png`,
        fullPage: true,
      });
    }
  });
}

test("contextual cursor activates only for fine-pointer hover regions", async ({ page }) => {
  await page.goto("/");
  const cursor = page.getByTestId("contextual-cursor");
  await expect(cursor).toHaveAttribute("data-active", "false");
  await page.locator('[data-cursor-label="READ CASE STUDY"]').first().hover();
  await expect(cursor).toHaveAttribute("data-active", "true");
  await expect(cursor).toHaveText("READ CASE STUDY");

  await page.mouse.move(0, 0);
  await expect(cursor).toHaveAttribute("data-active", "false");
  await page.keyboard.press("Tab");
  await expect(cursor).toHaveAttribute("data-active", "false");
});

test("contextual cursor remains disabled for reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const cursor = page.getByTestId("contextual-cursor");
  await page.locator('[data-cursor-label="READ CASE STUDY"]').first().hover();
  await expect(cursor).toHaveAttribute("data-active", "false");
  await expect(cursor).toHaveCSS("display", "none");
});

test("contextual cursor flips inside the viewport at a right-edge project target", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const target = page
    .locator('section[aria-labelledby="more-work-title"] [data-cursor-label="READ CASE STUDY"]')
    .first();
  await target.scrollIntoViewIfNeeded();
  const targetBox = await target.boundingBox();
  expect(targetBox).not.toBeNull();
  await page.mouse.move(
    Math.min(1439, targetBox!.x + targetBox!.width - 2),
    Math.min(899, targetBox!.y + targetBox!.height / 2),
  );

  const cursor = page.getByTestId("contextual-cursor");
  await expect(cursor).toHaveAttribute("data-active", "true");
  const cursorBox = await cursor.boundingBox();
  expect(cursorBox).not.toBeNull();
  expect(cursorBox!.x).toBeGreaterThanOrEqual(8);
  expect(cursorBox!.y).toBeGreaterThanOrEqual(8);
  expect(cursorBox!.x + cursorBox!.width).toBeLessThanOrEqual(1432);
  expect(cursorBox!.y + cursorBox!.height).toBeLessThanOrEqual(892);
});

test("contextual cursor is not loaded as an interaction on coarse pointers", async ({
  browser,
}) => {
  const context = await browser.newContext({
    ...devices["Pixel 5"],
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000",
  });
  const page = await context.newPage();
  await page.goto("/");
  const cursor = page.getByTestId("contextual-cursor");
  await expect(cursor).toHaveCSS("display", "none");
  await expect(cursor).toHaveAttribute("data-active", "false");
  await context.close();
});

test("Milestone 4B deep studies have no serious automated accessibility violations", async ({
  page,
}) => {
  for (const study of milestone4BStudies) {
    await page.goto(`/work/${study.slug}`);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(serious, study.slug).toEqual([]);
  }
});

test("Milestone 4B case-study hero and flow surfaces have focused visual evidence", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const study of milestone4BStudies) {
    await page.goto(`/work/${study.slug}`);
    await page.addStyleTag({
      content: ".site-header, .skip-link, nextjs-portal { display: none !important; }",
    });
    const hero = page.locator("#case-study-hero");
    await expectDecodedImages(hero);
    await hero.screenshot({ path: `test-results/milestone-4b-${study.slug}-hero.png` });
    if (study.flow) {
      const flow = page.locator(study.flow);
      await expectDecodedImages(flow);
      await flow.screenshot({ path: `test-results/milestone-4b-${study.slug}-flow.png` });
    }
  }
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
