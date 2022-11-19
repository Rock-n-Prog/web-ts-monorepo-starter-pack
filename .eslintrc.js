module.exports = {
  root: true,
  extends: ['@acme/eslint-config/base.js'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  env: {
    node: true,
  },
};
