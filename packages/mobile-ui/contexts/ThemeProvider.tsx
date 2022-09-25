import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import type { ThemeMode } from '../styles/theme';
import { getTheme } from '../styles/theme';

// TODO: Move default mode to theme package (same for web-ui)
const defaultMode = 'dark';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<ThemeMode>(defaultMode);

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  function switchMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, switchMode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({ mode: defaultMode, setMode: () => undefined, switchMode: () => undefined });

export { ThemeContext, ThemeProvider };