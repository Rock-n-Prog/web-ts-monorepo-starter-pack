import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import type { ModuleType } from 'i18next';

const storeLanguageKey = 'settings.lang';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  init: () => void 0,
  detect: (callback: (lang: string) => void) =>
    AsyncStorage
      .getItem(storeLanguageKey)
      .then((language) => callback(language ?? Localization.locale))
      .catch((error) => console.error("Error reading language", error)),
  cacheUserLanguage: (language: string) =>
    AsyncStorage
      .setItem(storeLanguageKey, language)
      .catch((error) => console.error("Error setting language", error)),
};

export { languageDetector }