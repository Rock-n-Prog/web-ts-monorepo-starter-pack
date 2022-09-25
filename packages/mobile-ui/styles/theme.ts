import { modeToColors } from './colors';

type ThemeMode = 'light' | 'dark';
type Theme = ReturnType<typeof getTheme>;

// TODO: Can we use theme like we do with web-ui?
function getTheme(mode: ThemeMode) {
  return modeToColors[mode];
}

export type { Theme, ThemeMode };
export { getTheme };
