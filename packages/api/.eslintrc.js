module.exports = {
  root: true,
  extends: ['@acme/eslint-config/node.js'],
  rules: {
    // Weird fix for database not being found by lint
    'import/no-unresolved': 'off',
  },
};
