import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';
import { defaultThemeMode, type ThemeMode } from '@acme/theme';
import type { Theme } from '../styles/theme';
import { getTheme } from '../styles/theme';
import {getStoredThemeMode, setStoredThemeMode} from "../utils/storedThemeMode";

function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<ThemeMode>(defaultThemeMode);

  React.useEffect(() => {
    getStoredThemeMode({
      fallbackValue: defaultThemeMode,
      callback: (storedMode) => setMode(storedMode),
    });
  }, []);

  const theme = React.useMemo(() => {
    const theme = getTheme(mode);
    NavigationBar.setBackgroundColorAsync(theme.colors.background);
    return theme;
  }, [mode]);

  function setAndStoreMode(themeMode: ThemeMode) {
    setMode(themeMode);
    setStoredThemeMode(themeMode);
  }

  function switchMode() {
    setAndStoreMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode: setAndStoreMode, switchMode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly theme: Theme;
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({
  theme: getTheme(defaultThemeMode),
  mode: defaultThemeMode,
  setMode: () => undefined,
  switchMode: () => undefined,
});

export { ThemeContext, ThemeProvider };
