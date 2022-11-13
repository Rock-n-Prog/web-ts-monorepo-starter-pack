import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import * as en from 'mobile-locales/translations/en';
import * as fr from 'mobile-locales/translations/fr';
import { defaultLocale } from './types/locales';
import { defaultNamespace, namespaces } from './types/namespaces';
import { languageDetector } from './plugins/languageDetector';

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    ns: namespaces,
    defaultNS: defaultNamespace,
    resources: {
      en,
      fr,
    },
    fallbackLng: defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
