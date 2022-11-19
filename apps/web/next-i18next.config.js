// If editing here, remember to check defaults in 'types' directory
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  defaultNS: 'common',
  localePath: 'node_modules/@acme/web-locales/translations',
};
