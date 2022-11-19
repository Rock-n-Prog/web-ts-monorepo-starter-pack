module.exports = {
  root: true,
  extends: ['custom/node.js'],
  rules: {
    // Weird fix for database not being found by lint
    'import/no-unresolved': 'off',
  },
};
