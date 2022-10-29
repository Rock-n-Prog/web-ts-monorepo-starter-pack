const withTM = require('next-transpile-modules')(['database', 'trpc', 'web-ui', 'theme']);

module.exports = withTM({
  reactStrictMode: true,
  webpack: config => {
    config.externals = [...(config.externals || []), '@prisma/client'];
    return config;
  },
});
