"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

import {
  isThemePreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  themeColors,
  themePreferences,
  type ThemePreference,
} from "@/lib/theme/theme";

import styles from "./theme-switcher.module.css";

const darkModeQuery = "(prefers-color-scheme: dark)";
const themeChangeEvent = "wasem-theme-change";

function getThemePreferenceSnapshot(): ThemePreference {
  const rootPreference = document.documentElement.dataset.themePreference;
  return isThemePreference(rootPreference) ? rootPreference : "system";
}

function subscribeToThemePreference(onStoreChange: () => void) {
  window.addEventListener(themeChangeEvent, onStoreChange);
  return () => window.removeEventListener(themeChangeEvent, onStoreChange);
}

function getSystemThemeSnapshot() {
  return window.matchMedia(darkModeQuery).matches;
}

function subscribeToSystemTheme(onStoreChange: () => void) {
  const media = window.matchMedia(darkModeQuery);
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function applyTheme(preference: ThemePreference, animate: boolean) {
  const root = document.documentElement;
  const resolved = resolveTheme(preference, window.matchMedia(darkModeQuery).matches);

  if (animate) {
    root.classList.add("theme-transition");
  }

  root.dataset.theme = resolved;
  root.dataset.themePreference = preference;
  root.style.colorScheme = resolved;
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute("content", themeColors[resolved]);
  window.dispatchEvent(new Event(themeChangeEvent));
}

function ThemeIcon({ preference }: { preference: ThemePreference }) {
  if (preference === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M18.72 5.28 17.3 6.7M6.7 17.3l-1.42 1.42" />
      </svg>
    );
  }

  if (preference === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.25 15.2A8.25 8.25 0 0 1 8.8 3.75a8.25 8.25 0 1 0 11.45 11.45Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function ThemeSwitcher() {
  const preference = useSyncExternalStore<ThemePreference>(
    subscribeToThemePreference,
    getThemePreferenceSnapshot,
    () => "system",
  );
  const systemPrefersDark = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemThemeSnapshot,
    () => false,
  );
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyWithTransition = useCallback((nextPreference: ThemePreference) => {
    applyTheme(nextPreference, true);
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 280);
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const liveSystemTheme = resolveTheme("system", window.matchMedia(darkModeQuery).matches);
    if (root.dataset.themePreference === "system" && root.dataset.theme !== liveSystemTheme) {
      applyWithTransition("system");
    }
  }, [applyWithTransition, systemPrefersDark]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) return;
      const nextPreference = isThemePreference(event.newValue) ? event.newValue : "system";
      applyWithTransition(nextPreference);
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [applyWithTransition]);

  const selectPreference = (nextPreference: ThemePreference) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    } catch {
      // Theme switching remains functional when storage is unavailable.
    }
    applyWithTransition(nextPreference);
  };

  return (
    <fieldset className={styles.switcher} aria-label="Color theme">
      <legend className={styles.legend}>Color theme</legend>
      {themePreferences.map((option) => (
        <span className={styles.choice} key={option}>
          <input
            className={styles.input}
            type="radio"
            name="color-theme"
            id={`theme-${option}`}
            value={option}
            checked={preference === option}
            onChange={() => selectPreference(option)}
          />
          <label className={styles.option} htmlFor={`theme-${option}`} title={`${option} theme`}>
            <ThemeIcon preference={option} />
            <span className={styles.label}>{option}</span>
          </label>
        </span>
      ))}
    </fieldset>
  );
}
