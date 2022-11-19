const { i18n } = require('./next-i18next.config');
const withTM = require('next-transpile-modules')([
  '@acme/db',
  '@acme/api',
  '@acme/theme',
  '@acme/web-ui',
  '@acme/web-forms',
  '@acme/web-locales',
  '@acme/web-storage',
]);

module.exports = withTM({
  reactStrictMode: true,
  i18n,
  webpack: config => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    return config;
  },
});
