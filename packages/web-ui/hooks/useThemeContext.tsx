import * as React from 'react';
import { ThemeContext } from '../contexts/ThemeProvider';

function useThemeContext() {
  return React.useContext(ThemeContext);
}

export { useThemeContext };
