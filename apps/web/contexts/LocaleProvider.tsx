import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@acme/web-storage/hooks/useLocalStorage';
import type { Locale } from '@acme/web-locales/types/locales';
import { defaultLocale } from '@acme/web-locales/types/locales';

function LocaleProvider({ children }: React.PropsWithChildren) {
  const { i18n } = useTranslation();
  const { push, asPath } = useRouter();
  const [storedLocale, setStoredLocale] = useLocalStorage({ key: 'locale', initialValue: i18n.language });

  const locale = React.useMemo(() => i18n.language as Locale, [i18n.language]);

  function changeLocale(locale: Locale) {
    setStoredLocale(locale);
    i18n.changeLanguage(locale).then(() => push(asPath, asPath, { locale }));
  }

  React.useEffect(() => {
    // Allowing conditional logic so this only triggers when needed
    // eslint-disable-next-line functional/no-conditional-statement
    if (storedLocale !== locale) {
      i18n
        .changeLanguage(storedLocale)
        .then(() => push(asPath, asPath, { locale: storedLocale }))
        .then(() => console.log(`Changed locale using local storage (from '${i18n.language}' to '${storedLocale}')`));
    }

    // Necessary to trigger only when needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedLocale]);

  return <LocaleContext.Provider value={{ locale, changeLocale }}>{children}</LocaleContext.Provider>;
}

const LocaleContext = React.createContext<{
  readonly locale: Locale;
  readonly changeLocale: (locale: Locale) => void;
}>({
  locale: defaultLocale,
  changeLocale: () => void 0,
});

export { LocaleContext, LocaleProvider };
