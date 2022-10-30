module.exports = {
  processors: [
    'stylelint-processor-styled-components'
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  // overrides: [
  //   {
  //     files: ['**/*.{js,jsx,ts,tsx}'],
  //     customSyntax: '@stylelint/postcss-css-in-js',
  //   }
  // ],
};
