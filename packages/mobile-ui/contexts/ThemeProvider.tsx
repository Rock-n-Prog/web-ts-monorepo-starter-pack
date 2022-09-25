import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';
import type { Theme, ThemeMode } from '../styles/theme';
import { getTheme } from '../styles/theme';

// TODO: Move default mode to theme package (same for web-ui)
const defaultMode = 'dark';
const defaultTheme = getTheme(defaultMode);

function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<ThemeMode>(defaultMode);

  const theme = React.useMemo(() => {
    const theme = getTheme(mode);
    NavigationBar.setBackgroundColorAsync(theme.colors.background);
    return theme;
  }, [mode]);

  function switchMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode, switchMode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly theme: Theme;
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({ theme: defaultTheme, mode: defaultMode, setMode: () => undefined, switchMode: () => undefined });

export { ThemeContext, ThemeProvider };
