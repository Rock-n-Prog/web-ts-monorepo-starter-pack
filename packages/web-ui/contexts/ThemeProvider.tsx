import * as React from 'react';
import type { ColorScheme } from 'theme';
import { defaultColorScheme } from 'theme';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(defaultColorScheme);

  function switchColorScheme() {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ switchColorScheme }}>
      <div className={colorScheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly switchColorScheme: () => void;
}>({ switchColorScheme: () => void 0 });

export { ThemeContext, ThemeProvider };
