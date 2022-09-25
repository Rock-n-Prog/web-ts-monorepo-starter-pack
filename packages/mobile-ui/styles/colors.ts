import type { ThemeMode } from 'theme';
import { lightColors, darkColors } from 'theme';

type Colors = typeof lightColors;

const modeToColors: Record<ThemeMode, Colors> = {
  light: lightColors,
  dark: darkColors,
};

export { modeToColors };
