import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from './translations/en';
import * as fr from './translations/fr';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  }
};

// TODO: Namespaces and locales setup? (apps/web/next-i18next.config.js)
// TODO: Type-safe keys? (apps/web/react-i18next.d.ts)
i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;