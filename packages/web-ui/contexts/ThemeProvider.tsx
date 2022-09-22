import * as React from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { getTheme, ThemeMode } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyles';

const defaultMode = 'dark';

type Props = {
  readonly initialMode?: ThemeMode;
};

function ThemeProvider({ children, initialMode = defaultMode }: React.PropsWithChildren<Props>) {
  const [mode, setMode] = React.useState<ThemeMode>(initialMode);

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
}>({ mode: defaultMode, setMode: () => void 0, switchMode: () => void 0 });

function useThemeContext() {
  return React.useContext(ThemeContext);
}

export { ThemeProvider };
export { useThemeContext };