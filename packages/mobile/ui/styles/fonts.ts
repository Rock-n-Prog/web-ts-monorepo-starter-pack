import { normalize } from './layout';

const sizes = {
  xxs: normalize(10),
  xs: normalize(12),
  s: normalize(14),
  m: normalize(16),
  l: normalize(24),
  xl: normalize(36),
  xxl: normalize(48),
};

const lineHeights = {
  s: normalize(1.75),
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

const fonts = { sizes, lineHeights, weights, emphasis };

export { fonts };
