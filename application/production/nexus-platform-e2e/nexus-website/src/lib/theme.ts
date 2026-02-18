import { atom } from "nanostores";

export type Theme = "dark" | "light";

export const $theme = atom<Theme>("dark");

export function initTheme(): void {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem("nexus-theme") as Theme | null;
  if (stored) {
    $theme.set(stored);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    $theme.set("light");
  }

  applyTheme($theme.get());

  $theme.subscribe((theme) => {
    localStorage.setItem("nexus-theme", theme);
    applyTheme(theme);
  });
}

function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export function toggleTheme(): void {
  $theme.set($theme.get() === "dark" ? "light" : "dark");
}
