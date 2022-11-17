module.exports = {
  plugins: ['react'],
  extends: ['./base.js', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
};
