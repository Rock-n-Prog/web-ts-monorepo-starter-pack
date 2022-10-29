import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Locale } from '../types/locales';
import { defaultLocale } from '../types/locales';
import type { Namespace } from '../types/namespaces';

type BuildServerSideTranslationsParams = {
  readonly locale: Locale;
  readonly namespaces: readonly Namespace[];
};

function createServerSideTranslations({ locale, namespaces }: BuildServerSideTranslationsParams) {
  // serverSideTranslations can't receive readonly string[] as param
  // eslint-disable-next-line functional/prefer-readonly-type
  return serverSideTranslations(locale ?? defaultLocale, namespaces as string[]);
}

export default createServerSideTranslations;
