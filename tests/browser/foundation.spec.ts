import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("primary visitor journey and direct project route work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Mobile products");
  await page.getByRole("link", { name: "View Work" }).first().click();
  await expect(page).toHaveURL(/\/work$/);
  await page.getByRole("link", { name: "View project" }).first().click();
  await expect(page).toHaveURL(/\/work\/jood$/);
  await expect(page.getByRole("heading", { level: 1, name: "Jood" })).toBeVisible();
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
  await page.goto("/work/jood");
  const storeLink = page.getByRole("link", { name: /Google Play/ });
  await expect(storeLink).toHaveAttribute("target", "_blank");
  await expect(storeLink).toHaveAttribute("rel", "noopener noreferrer");
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
    await page.screenshot({ path: `test-results/foundation-${width}.png`, fullPage: true });
  });
}

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
