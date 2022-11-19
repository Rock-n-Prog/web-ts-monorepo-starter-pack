import { lightColors, darkColors, type ThemeMode } from '@acme/theme';

const webLightColors = {
  ...lightColors,
  tooltip: {
    background: '#1e1e1e',
    onBackground: '#fff',
  },
};

const webDarkColors = {
  ...darkColors,
  tooltip: {
    background: '#e3e3e3',
    onBackground: '#000',
  },
};

type Colors = typeof webLightColors;

const modeToColors: Record<ThemeMode, Colors> = {
  light: webLightColors,
  dark: webDarkColors,
};

export { modeToColors };
