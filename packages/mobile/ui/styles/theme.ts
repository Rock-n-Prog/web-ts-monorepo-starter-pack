import type { ThemeMode } from '@acme/theme';
import { fonts } from './fonts';
import { spacing } from './spacing';
import { modeToColors } from './colors';

type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  return {
    mode,
    colors: modeToColors[mode],
    spacing,
    fonts,
  };
}

export type { Theme };
export { getTheme };
