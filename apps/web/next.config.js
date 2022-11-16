const { i18n } = require('./next-i18next.config');
const withTM = require('next-transpile-modules')(['trpc', 'web-ui', 'web-forms', 'theme']);

module.exports = withTM({
  reactStrictMode: true,
  i18n,
  webpack: config => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    return config;
  },
});
