import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/",
  "/work",
  "/work/jood",
  "/work/eureeca",
  "/work/aura-fit",
  "/resume",
  "/robots.txt",
  "/sitemap.xml",
];

test("launch routes and browser identity respond without server errors", async ({ request }) => {
  for (const route of publicRoutes) {
    const response = await request.get(route);
    expect(response.status(), route).toBeLessThan(400);
  }

  const icon = await request.get("/icon.svg");
  expect(icon.ok()).toBeTruthy();
  expect(icon.headers()["content-type"]).toContain("image/svg+xml");
});

test("production security headers are applied without exposing framework identity", async ({
  request,
}) => {
  const response = await request.get("/");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  expect(response.headers()["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(response.headers()["permissions-policy"]).toContain("camera=()");
  expect(response.headers()["x-powered-by"]).toBeUndefined();
});

test("unknown pages and projects fail with the intentional 404 experience", async ({ page }) => {
  const response = await page.goto("/not-a-real-portfolio-route");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { level: 1, name: "This page is not part of the portfolio." }),
  ).toBeVisible();

  const projectResponse = await page.goto("/work/not-a-real-project");
  expect(projectResponse?.status()).toBe(404);
  await expect(page.getByRole("main").getByRole("link", { name: "View Work" })).toBeVisible();
});

test("rendered internal links are functional routes rather than placeholders", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const hrefs = await page
    .locator('a[href^="/"]')
    .evaluateAll((links) => [
      ...new Set(links.map((link) => link.getAttribute("href")).filter(Boolean)),
    ]);

  for (const href of hrefs) {
    expect(href).not.toBe("#");
    const pathname = new URL(href!, "http://portfolio.test").pathname;
    const response = await request.get(pathname);
    expect(response.status(), href!).toBeLessThan(400);
  }
});
