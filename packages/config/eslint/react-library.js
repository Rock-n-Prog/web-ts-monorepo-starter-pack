module.exports = {
  extends: ['./react.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
  },
};
