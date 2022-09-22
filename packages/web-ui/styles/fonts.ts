import theme from 'styled-theming';

theme('font', {
  sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: 'Georgia, Times, "Times New Roman", serif',
  monoSpaced: 'Consolas, monaco, monospace',
});

const sizes = {
  xxs: '.625rem', // 10 px
  xs: '.75rem', // 12 px
  s: '.875rem', // 14 px
  m: '1rem', // 16 px
  l: '1.5rem', // 24 px
  xl: '2.25rem', // 36 px
  xxl: '3rem', // 48 px
};

const weights = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  bolder: '800',
};

// https://material.io/design/color/text-legibility.html#text-backgrounds
const emphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const fonts = { sizes, weights, emphasis };

export default fonts;
