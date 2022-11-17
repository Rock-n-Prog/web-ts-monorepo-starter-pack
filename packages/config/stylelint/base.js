module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-styled-components'],
  customSyntax: 'postcss-scss',
  rules: {
    'string-quotes': 'single',
    'rule-empty-line-before': null,
    'value-keyword-case': null,
    'declaration-empty-line-before': null,
  },
};
