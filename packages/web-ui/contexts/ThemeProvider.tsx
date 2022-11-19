import * as React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { defaultThemeMode, type ThemeMode } from '@acme/theme';
import { useLocalStorage } from '@acme/web-storage/hooks/useLocalStorage';
import { getTheme } from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import { getSystemThemeMode } from '../utils/getSystemThemeMode';

type Props = {
  readonly initialMode?: ThemeMode;
};

function ThemeProvider({ children }: React.PropsWithChildren<Props>) {
  const [mode, setMode] = useLocalStorage<ThemeMode>({
    key: 'thememode',
    initialValue: getSystemThemeMode() ?? defaultThemeMode,
  });

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
