import * as React from 'react';
import { useThemeContext } from 'mobile-ui/hooks/useThemeContext';
import { Button } from 'mobile-ui/components/inputs';

function ThemeSwitcher() {
  const { mode, switchMode } = useThemeContext();

  return <Button text={`Switch theme (${mode})`} variant="text" onPress={switchMode} />;
}

export { ThemeSwitcher };