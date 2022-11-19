import type { ThemeMode } from '@acme/theme';
import { modeToColors } from './colors';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';
import { fonts } from './fonts';

type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  return {
    mode,
    colors: modeToColors[mode],
    spacing,
    breakpoints,
    fonts,
  };
}

export { getTheme };
export type { Theme };
