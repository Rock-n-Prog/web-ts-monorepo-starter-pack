import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { Locale } from '@acme/web-locales/types/locales';
import { defaultLocale } from '@acme/web-locales/types/locales';
import type { Namespace } from '@acme/web-locales/types/namespaces';

type CreateServerSideTranslationsParams = {
  readonly locale: Locale;
  readonly namespaces: readonly Namespace[];
};

function createServerSideTranslations({ locale, namespaces }: CreateServerSideTranslationsParams) {
  // serverSideTranslations can't receive readonly string[] as param
  // eslint-disable-next-line functional/prefer-readonly-type
  return serverSideTranslations(locale ?? defaultLocale, namespaces as string[]);
}

export default createServerSideTranslations;
