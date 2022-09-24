const withTM = require('next-transpile-modules')(['web-ui', 'trpc']);

module.exports = withTM({
  reactStrictMode: true,
});
