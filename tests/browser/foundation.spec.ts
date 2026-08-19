import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("primary visitor journey and direct project route work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Engineering mobile products from architecture to release.",
  );
  await expect(page.getByText("20+")).toBeVisible();
  await page.getByRole("link", { name: "View Work" }).first().click();
  await expect(page).toHaveURL(/\/#selected-work$/);
  await expect(page.getByRole("heading", { level: 3, name: "Jood" })).toBeVisible();
  await page.getByRole("link", { name: /See architecture and release story/ }).click();
  await expect(page).toHaveURL(/\/work\/jood$/);
  await expect(page.getByRole("heading", { level: 1, name: "Jood" })).toBeVisible();
});

test("featured work keeps ownership and status labels manifest-driven", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("article")).toHaveCount(6);

  const eureeca = page.locator("#eureeca");
  await expect(eureeca.getByText("Team build", { exact: true })).toBeVisible();
  await expect(eureeca.getByText("Live", { exact: true })).toBeVisible();

  const auraFit = page.locator("#aura-fit");
  await expect(auraFit.getByText("Private Client", { exact: true })).toBeVisible();
  await expect(auraFit.getByText("Google Fit / Apple Health integration")).toBeVisible();
});

test("resume has preferred HTML content and a working canonical PDF", async ({ page, request }) => {
  await page.goto("/resume");
  await expect(page.getByRole("heading", { level: 1, name: "Wasem Aljundy" })).toBeVisible();
  const download = page.getByRole("link", { name: "Download PDF" });
  await expect(download).toHaveAttribute("href", "/resume/wasem-aljundy-cv.pdf");
  const response = await request.get("/resume/wasem-aljundy-cv.pdf");
  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("application/pdf");
});

test("skip navigation and visible keyboard focus work", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toHaveCSS("transform", /matrix|none/);
  const shadow = await skipLink.evaluate((element) => getComputedStyle(element).boxShadow);
  expect(shadow).not.toBe("none");
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});

test("external project and social links use safe new-tab attributes", async ({ page }) => {
  await page.goto("/");
  const storeLink = page.getByRole("link", { name: /Google Play/ });
  await expect(storeLink.first()).toHaveAttribute("target", "_blank");
  await expect(storeLink.first()).toHaveAttribute("rel", "noopener noreferrer");
});

for (const width of [375, 768, 1024, 1440]) {
  test(`shell has no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
    await page.goto("/");
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);

    const projectImages = page.locator("article img:visible");
    for (let index = 0; index < (await projectImages.count()); index += 1) {
      await projectImages.nth(index).scrollIntoViewIfNeeded();
      await expect(projectImages.nth(index)).toHaveJSProperty("complete", true);
      expect(
        await projectImages
          .nth(index)
          .evaluate((image) => (image as HTMLImageElement).naturalWidth),
      ).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `test-results/milestone-2b1-full-${width}.png`, fullPage: true });
  });
}

test("Milestone 2B.1 focused visual review surfaces render with decoded imagery", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  await page
    .locator('section[aria-labelledby="hero-title"]')
    .screenshot({ path: "test-results/milestone-2b1-hero-desktop.png" });

  await page.addStyleTag({
    content: ".site-header, .skip-link { display: none !important; }",
  });

  for (const slug of ["jood", "eureeca", "taseese", "aura-fit", "eisal", "gader"]) {
    const chapter = page.locator(`#${slug}`);
    await chapter.scrollIntoViewIfNeeded();
    const visibleImages = chapter.locator("img:visible");
    for (let index = 0; index < (await visibleImages.count()); index += 1) {
      await expect(visibleImages.nth(index)).toHaveJSProperty("complete", true);
      expect(
        await visibleImages
          .nth(index)
          .evaluate((image) => (image as HTMLImageElement).naturalWidth),
      ).toBeGreaterThan(0);
    }
    await chapter.screenshot({ path: `test-results/milestone-2b1-chapter-${slug}.png` });
  }

  await page
    .locator('section[aria-labelledby="capability-title"]')
    .screenshot({ path: "test-results/milestone-2b1-engineering-bridge.png" });
  await page
    .locator('section[aria-labelledby="resume-title"]')
    .locator("..")
    .screenshot({ path: "test-results/milestone-2b1-closing-sequence.png" });

  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page
    .locator('section[aria-labelledby="hero-title"]')
    .screenshot({ path: "test-results/milestone-2b1-hero-mobile.png" });
});

test("reduced motion removes smooth spatial behavior", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const scrollBehavior = await page
    .locator("html")
    .evaluate((element) => getComputedStyle(element).scrollBehavior);
  expect(scrollBehavior).toBe("auto");
});

test("foundation has no serious automated accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );
  expect(serious).toEqual([]);
});
