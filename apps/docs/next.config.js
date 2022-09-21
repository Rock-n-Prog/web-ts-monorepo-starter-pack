const withTM = require('next-transpile-modules')(['web-ui']);

module.exports = withTM({
  reactStrictMode: true,
});
