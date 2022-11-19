module.exports = {
  root: true,
  extends: ['@acme/eslint-config/node.js'],
  rules: {
    // TODO: Test by changing paths in tsconfig.json
    // Weird fix for database not being found by lint
    'import/no-unresolved': 'off',
  },
};
