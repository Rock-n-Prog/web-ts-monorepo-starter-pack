function getThemeMatchingMedia() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getSystemThemeMode() {
  return window ? getThemeMatchingMedia() : undefined;
}

export { getSystemThemeMode };
