module.exports = {
  extends: ['./react-native.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.native.js'],
      },
    },
  },
  env: {
    node: true,
  },
};
