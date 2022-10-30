module.exports = {
  root: true,
  extends: ['custom/next.js', 'plugin:i18n-json/recommended'],
  rules: {
    'i18n-json/valid-message-syntax': [
      2,
      {
        syntax: 'non-empty-string',
      },
    ],
    'i18n-json/valid-json': 2,
    'i18n-json/sorted-keys': [
      2,
      {
        order: 'asc',
        indentSpaces: 2,
      },
    ],
    'i18n-json/identical-keys': 0,
  },
};
