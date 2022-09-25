import * as React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import type { ThemeMode } from 'theme';
import { defaultThemeMode } from 'theme';
import { getTheme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';

type Props = {
  readonly initialMode?: ThemeMode;
};

function ThemeProvider({ children }: React.PropsWithChildren<Props>) {
  const [mode, setMode] = React.useState<ThemeMode>(defaultThemeMode);

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  function switchMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, switchMode }}>
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({ mode: defaultThemeMode, setMode: () => void 0, switchMode: () => void 0 });

export { ThemeContext, ThemeProvider };
