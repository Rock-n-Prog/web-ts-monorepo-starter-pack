import * as React from 'react';
import { Appearance } from 'react-native';
import { ThemeMode } from '@acme/theme';
import getItemFromStorage from '@acme/mobile-storage/utils/getItemFromStorage';
import setItemInStorage from '@acme/mobile-storage/utils/setItemInStorage';

type UseStoredThemeOutput = readonly [ThemeMode, (value: ThemeMode) => void];

const storedThemeModeKey = 'settings.thememode';

// Defining a return type because type inference is rough here
function useStoredThemeMode(initialValue: ThemeMode): UseStoredThemeOutput {
  const [storedValue, setStoredValue] = React.useState(initialValue);

  React.useEffect(() => {
    const systemThemeMode = Appearance.getColorScheme() ?? initialValue;
    getItemFromStorage({
      key: storedThemeModeKey,
      initialValue: systemThemeMode,
      callback: themeMode => setStoredValue(themeMode),
    });
  }, [initialValue]);

  function setValue(value: ThemeMode) {
    setStoredValue(value);
    setItemInStorage({ key: storedThemeModeKey, value }).catch(console.error);
  }

  return [storedValue, setValue];
}

export { useStoredThemeMode };
