import { Appearance } from 'react-native';
import getItemFromStorage, { type GetItemInStorageParams } from '@acme/mobile-storage/utils/getItemFromStorage';
import setItemInStorage from '@acme/mobile-storage/utils/setItemInStorage';
import {ThemeMode} from "@acme/theme";

const storedThemeModeKey = 'settings.thememode';

type GetStoredThemeModeParams = {
  readonly fallbackValue: ThemeMode,
} & Pick<GetItemInStorageParams<ThemeMode>, 'callback'>;

function getStoredThemeMode({ fallbackValue, callback }: GetStoredThemeModeParams) {
  const systemThemeMode = Appearance.getColorScheme() ?? fallbackValue;
  return getItemFromStorage({
    key: storedThemeModeKey,
    initialValue: systemThemeMode,
    callback,
  });
}

function setStoredThemeMode(themeMode: ThemeMode) {
  return setItemInStorage({
    key: storedThemeModeKey,
    value: themeMode,
  });
}

export { getStoredThemeMode, setStoredThemeMode };
