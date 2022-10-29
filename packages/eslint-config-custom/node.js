module.exports = {
  extends: ['./base.js'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  env: {
    node: true,
  },
};
