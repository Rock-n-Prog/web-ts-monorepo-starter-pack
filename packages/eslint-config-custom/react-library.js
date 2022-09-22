module.exports = {
  extends: ['./react.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
  },
};
