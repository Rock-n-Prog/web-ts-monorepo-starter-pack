function getThemeMatchingMedia() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getSystemThemeMode() {
  return typeof window === 'undefined' ? undefined : getThemeMatchingMedia();
}

export { getSystemThemeMode };
