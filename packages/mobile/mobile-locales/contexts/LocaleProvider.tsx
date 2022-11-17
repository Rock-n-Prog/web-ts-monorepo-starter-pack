import * as React from 'react';
import { useTranslation } from 'react-i18next';
import type { Locale } from '../types/locales';
import { defaultLocale } from '../types/locales';
import { setStoredLanguage } from '../utils/storedLanguage';

function LocaleProvider({ children }: React.PropsWithChildren) {
  const { i18n } = useTranslation();
  const locale = React.useMemo(() => i18n.language as Locale, [i18n.language]);

  async function changeLocale(locale: Locale) {
    await i18n.changeLanguage(locale);
    return setStoredLanguage(locale);
  }

  return <LocaleContext.Provider value={{ locale, changeLocale }}>{children}</LocaleContext.Provider>;
}

const LocaleContext = React.createContext<{
  readonly locale: Locale;
  readonly changeLocale: (locale: Locale) => Promise<unknown>;
}>({
  locale: defaultLocale,
  changeLocale: () => Promise.resolve(),
});

export { LocaleContext, LocaleProvider };
