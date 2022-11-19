import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import * as en from '@acme/mobile-locales/translations/en';
import * as fr from '@acme/mobile-locales/translations/fr';
import { defaultLocale } from '@acme/mobile-locales/types/locales';
import { defaultNamespace, namespaces } from '@acme/mobile-locales/types/namespaces';
import { languageDetector } from '@acme/mobile-locales/plugins/languageDetector';

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
