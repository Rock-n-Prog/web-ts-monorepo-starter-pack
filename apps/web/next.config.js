const withTM = require('next-transpile-modules')(['web-ui', 'theme', 'trpc']);

module.exports = withTM({
  reactStrictMode: true,
});
