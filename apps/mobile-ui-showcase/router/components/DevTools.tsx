import * as React from 'react';
import { Button } from '@acme/mobile-ui/components/inputs';
import { useThemeContext } from '@acme/mobile-ui/hooks/useThemeContext';

// TODO: DevTools are weirdly glued to the right side of the screen
function DevTools() {
  const { switchMode } = useThemeContext();

  return <Button text="Theme" onPress={switchMode} />;
}

export default DevTools;
