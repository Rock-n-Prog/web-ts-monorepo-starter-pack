import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import type { Locale } from '../types/locales';
import { defaultLocale } from '../types/locales';
import { useLocalStorage } from '../hooks/useLocalStorage';

function TranslationProvider({ children }: React.PropsWithChildren) {
  const { i18n } = useTranslation();
  const { push, asPath } = useRouter();
  const [storedLocale, setStoredLocale] = useLocalStorage({ key: 'locale', initialValue: i18n.language });

  const locale = React.useMemo(() => i18n.language as Locale, [i18n.language]);

  function changeLocale(locale: Locale) {
    setStoredLocale(locale);
    i18n.changeLanguage(locale).then(() => push(asPath, asPath, { locale }));
  }

  // TODO: On first reload, this seems to be flaky
  React.useEffect(() => {
    // Allowing conditional logic so this only triggers when needed
    // eslint-disable-next-line functional/no-conditional-statement
    if (storedLocale !== locale) {
      i18n
        .changeLanguage(storedLocale)
        .then(() => push(asPath, asPath, { locale: storedLocale }))
        .then(() => console.log(`Changed locale using local storage (from '${i18n.language}' to '${storedLocale}')`));
    }
  }, [storedLocale]);

  return <TranslationContext.Provider value={{ locale, changeLocale }}>{children}</TranslationContext.Provider>;
}

const TranslationContext = React.createContext<{
  readonly locale: Locale;
  readonly changeLocale: (locale: Locale) => void;
}>({
  locale: defaultLocale,
  changeLocale: () => void 0,
});

export { TranslationContext, TranslationProvider };
