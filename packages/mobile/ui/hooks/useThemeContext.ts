import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeProvider';

function useThemeContext() {
  return useContext(ThemeContext);
}

export { useThemeContext };
