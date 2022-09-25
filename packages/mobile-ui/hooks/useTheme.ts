import { getTheme } from '../styles/theme';
import { useThemeContext } from './useThemeContext';

// TODO: Is this necessary?
function useTheme() {
  const themeContext = useThemeContext();
  return getTheme(themeContext.mode);
}

export { useTheme };
