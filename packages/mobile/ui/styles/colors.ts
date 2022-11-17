import { lightColors, darkColors, type ThemeMode } from '@acme/theme';

type Colors = typeof lightColors;

const modeToColors: Record<ThemeMode, Colors> = {
  light: lightColors,
  dark: darkColors,
};

export { modeToColors };
