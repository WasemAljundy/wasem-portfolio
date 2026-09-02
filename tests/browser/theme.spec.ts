import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const storageKey = "wasem-theme-preference";
const auditedRoutes = [
  "/",
  "/work",
  "/resume",
  "/work/jood",
  "/work/eureeca",
  "/work/taseese",
  "/work/aura-fit",
  "/work/eisal",
  "/work/gader",
  "/work/sezon-store",
  "/work/aid-for-palestine",
  "/not-a-real-portfolio-route",
] as const;

async function saveThemeBeforeNavigation(page: Page, preference: "light" | "system" | "dark") {
  await page.addInitScript(({ key, value }) => window.localStorage.setItem(key, value), {
    key: storageKey,
    value: preference,
  });
}

test("System resolves before hydration and follows operating-system changes", async ({ page }) => {
  const hydrationMessages: string[] = [];
  page.on("console", (message) => {
    if (/hydration|did not match/i.test(message.text())) hydrationMessages.push(message.text());
  });

  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("data-theme-preference", "system");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.emulateMedia({ colorScheme: "light" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(hydrationMessages).toEqual([]);
});

test("an explicit theme persists across reloads and overrides the OS", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.locator('label[for="theme-light"]').click();

  await expect(page.locator("html")).toHaveAttribute("data-theme-preference", "light");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(await page.evaluate((key) => localStorage.getItem(key), storageKey)).toBe("light");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("saved preferences are applied by the pre-paint initializer", async ({ page, request }) => {
  await saveThemeBeforeNavigation(page, "dark");
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", "#0d1218");

  const markup = await (await request.get("/")).text();
  expect(markup.indexOf("theme-initializer")).toBeGreaterThan(-1);
  expect(markup.indexOf("theme-initializer")).toBeLessThan(markup.indexOf("</head>"));
  expect(markup.indexOf("theme-initializer")).toBeLessThan(markup.indexOf("<body>"));
});

test("theme changes synchronize to another open tab", async ({ context, page }) => {
  const secondPage = await context.newPage();
  await page.goto("/");
  await secondPage.goto("/work");

  await page.locator('label[for="theme-dark"]').click();
  await expect(secondPage.locator("html")).toHaveAttribute("data-theme-preference", "dark");
  await expect(secondPage.locator("html")).toHaveAttribute("data-theme", "dark");
  await secondPage.close();
});

test("theme switching still works when browser storage is unavailable", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException("Storage disabled", "SecurityError");
    };
  });
  await page.locator('label[for="theme-dark"]').click();
  await expect(page.locator("html")).toHaveAttribute("data-theme-preference", "dark");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("three-state control has native keyboard semantics and 44px targets", async ({ page }) => {
  await page.goto("/");
  const system = page.getByRole("radio", { name: "system", exact: true });
  await expect(system).toBeChecked();
  await system.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("radio", { name: "dark", exact: true })).toBeChecked();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  for (const option of ["light", "system", "dark"]) {
    const box = await page.locator(`label[for="theme-${option}"]`).boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }
});

test("reduced motion suppresses the theme indicator transition", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const duration = await page
    .locator('fieldset[aria-label="Color theme"]')
    .evaluate((element) => getComputedStyle(element, "::before").transitionDuration);
  expect(duration).toBe("0.001s");
});

for (const preference of ["light", "system", "dark"] as const) {
  test(`all audited routes render in ${preference} mode without overflow`, async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 900 });
    await page.emulateMedia({ colorScheme: "dark" });
    await saveThemeBeforeNavigation(page, preference);
    for (const route of auditedRoutes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(route.startsWith("/not-a-real") ? 404 : 200);
      await expect(page.locator("html")).toHaveAttribute("data-theme-preference", preference);
      await expect(page.locator("html")).toHaveAttribute(
        "data-theme",
        preference === "light" ? "light" : "dark",
      );
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
    }
  });
}

for (const preference of ["light", "dark"] as const) {
  test(`header remains balanced at all target widths in ${preference} mode`, async ({ page }) => {
    await saveThemeBeforeNavigation(page, preference);
    for (const width of [375, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });
      await page.goto("/");
      const header = page.locator(".site-header");
      await expect(header).toBeVisible();
      const dimensions = await page.evaluate(() => ({
        headerRight: document.querySelector(".site-header")!.getBoundingClientRect().right,
        viewportWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }));
      expect(dimensions.headerRight).toBeLessThanOrEqual(dimensions.viewportWidth);
      expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
      await page.waitForTimeout(700);
      await page.screenshot({ path: `test-results/milestone-6a-${preference}-${width}.png` });
    }
  });
}

test("all audited routes have no serious accessibility violations in dark mode", async ({
  page,
}) => {
  await saveThemeBeforeNavigation(page, "dark");
  for (const route of auditedRoutes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(serious, route).toEqual([]);
  }
});
