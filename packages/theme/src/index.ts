type ThemeMode = 'light' | 'dark';
const defaultThemeMode = 'dark';

// https://coolors.co/c046d3-b118c8-7b108c-374766-061a40-04122c
const palette = {
  primary: {
    light: '#c046d3',
    main: '#B118C8',
    dark: '#7b108c',
  },
  secondary: {
    light: '#374766',
    main: '#061a40',
    dark: '#04122c',
  },
};

const lightColors = {
  palette,
  background: '#fff',
  surface: '#fafafa',
  onPrimary: '#fff',
  onSecondary: '#fff',
  onVariant: '#fff',
  onBackground: '#000',
  onSurface: '#000',
  variants: {
    success: {
      main: '#4CAF50',
      background: '#edf7ed',
      onBackground: '#1e4620',
    },
    info: {
      main: '#03A9F4',
      background: '#e5f6fd',
      onBackground: '#014361',
    },
    warning: {
      main: '#FF9800',
      background: '#fff4e5',
      onBackground: '#663C00',
    },
    error: {
      main: '#EF5350',
      background: '#fdeded',
      onBackground: '#5F2120',
    },
  },
  disabled: {
    onBackground: 'rgba(0, 0, 0, 0.26)',
    background: 'rgba(0, 0, 0, 0.12)',
  },
};

const darkColors = {
  palette,
  background: '#121212',
  surface: '#222222',
  onPrimary: '#fff',
  onSecondary: '#fff',
  onVariant: '#fff',
  onBackground: '#fff',
  onSurface: '#fff',
  variants: {
    success: {
      main: '#66bb6a',
      background: '#0c130d',
      onBackground: '#cce8cd',
    },
    info: {
      main: '#29b6f6',
      background: '#071318',
      onBackground: '#b8e7fb',
    },
    warning: {
      main: '#ffa726',
      background: '#191207',
      onBackground: '#ffe2b7',
    },
    error: {
      main: '#f44336',
      background: '#160b0b',
      onBackground: '#f4c7c7',
    },
  },
  disabled: {
    onBackground: 'rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.12)',
  },
};

export type { ThemeMode };
export { defaultThemeMode, lightColors, darkColors };
