import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

export const themeStore = atom<Theme>('dark');

export function initTheme(): void {
  const stored = localStorage.getItem('nexus-theme');
  if (stored === 'dark' || stored === 'light') {
    themeStore.set(stored);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeStore.set(prefersDark ? 'dark' : 'light');
  }
  applyTheme(themeStore.get());
}

export function toggleTheme(): void {
  const next = themeStore.get() === 'dark' ? 'light' : 'dark';
  themeStore.set(next);
  localStorage.setItem('nexus-theme', next);
  applyTheme(next);
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}
