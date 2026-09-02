import assert from "node:assert/strict";
import test from "node:test";

import { isThemePreference, resolveTheme } from "../../src/lib/theme/theme";
import { themeInitializationScript } from "../../src/lib/theme/theme-script";

test("theme preference validation accepts only the supported modes", () => {
  assert.equal(isThemePreference("light"), true);
  assert.equal(isThemePreference("system"), true);
  assert.equal(isThemePreference("dark"), true);
  assert.equal(isThemePreference("auto"), false);
  assert.equal(isThemePreference(null), false);
});

test("theme resolution follows the OS only while System is selected", () => {
  assert.equal(resolveTheme("system", false), "light");
  assert.equal(resolveTheme("system", true), "dark");
  assert.equal(resolveTheme("light", true), "light");
  assert.equal(resolveTheme("dark", false), "dark");
});

test("pre-paint initializer is small, purpose-built, and validates stored values", () => {
  assert.ok(themeInitializationScript.length < 800);
  assert.match(themeInitializationScript, /prefers-color-scheme: dark/);
  assert.match(themeInitializationScript, /v==='light'\|\|v==='dark'\|\|v==='system'/);
});
