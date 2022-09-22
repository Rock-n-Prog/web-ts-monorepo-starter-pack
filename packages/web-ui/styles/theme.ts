import { modeToColors } from './colors';
import spacing from './spacing';
import fonts from './fonts';

type ThemeMode = 'light' | 'dark';
type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  return {
    mode,
    colors: modeToColors[mode],
    spacing,
    fonts,
  };
}

export { getTheme };
export type { Theme, ThemeMode };
