import type { ModuleType } from 'i18next';
import { getStoredLanguage, setStoredLanguage } from '../utils/stored-language';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  init: () => void 0,
  detect: getStoredLanguage,
  cacheUserLanguage: setStoredLanguage,
};

export { languageDetector };
