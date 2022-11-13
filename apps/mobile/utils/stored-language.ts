import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

const storeLanguageKey = 'settings.lang';

function getStoredLanguage(callback?: (lang: string) => void) {
  return AsyncStorage.getItem(storeLanguageKey)
    .then(language => {
      const foundLang = language ?? Localization.locale;
      return callback ? callback(foundLang) : foundLang;
    })
    .catch(error => console.error('Error reading language', error));
}

function setStoredLanguage(lang: string) {
  return AsyncStorage.setItem(storeLanguageKey, lang).catch(error => console.error('Error setting language', error));
}

export { getStoredLanguage, setStoredLanguage };
