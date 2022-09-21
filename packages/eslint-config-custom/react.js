module.exports = {
  plugins: ['react'],
  extends: ['./base.js', 'plugin:react/recommended'],
  rules: {
    // TODO: Do we really need this?
    'react/jsx-key': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
