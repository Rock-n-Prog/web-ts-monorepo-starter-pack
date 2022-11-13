const locales = ['en', 'fr'] as const;
type Locale = typeof locales[number];

const defaultLocale = 'en';

export type { Locale };
export { locales, defaultLocale };
