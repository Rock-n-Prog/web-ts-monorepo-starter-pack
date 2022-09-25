import { modeToColors } from './colors';
import { fonts } from "./fonts";
import { spacing } from "./spacing";

// TODO: Put ThemeMode in theme package
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

export type { Theme, ThemeMode };
export { getTheme };
