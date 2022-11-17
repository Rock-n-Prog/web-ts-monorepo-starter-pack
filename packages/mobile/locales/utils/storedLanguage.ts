import * as Localization from 'expo-localization';
import getItemFromStorage from '@acme/mobile-storage/utils/getItemFromStorage';
import setItemInStorage from '@acme/mobile-storage/utils/setItemInStorage';

const storeLanguageKey = 'settings.lang';

function getStoredLanguage(callback?: (lang: string) => void) {
  return getItemFromStorage({
    key: storeLanguageKey,
    initialValue: Localization.locale,
    callback,
  });
}

function setStoredLanguage(lang: string) {
  return setItemInStorage({
    key: storeLanguageKey,
    value: lang,
  });
}

export { getStoredLanguage, setStoredLanguage };
