import { css } from 'styled-components';
import { Theme } from '../../styles/theme';

// TODO: Use Tailwind (remove, use css)

const Typography = css(
  ({ theme }: { readonly theme: Theme }) => css`
    margin: 0;
    font-family: sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.m};
    color: ${theme.colors.onBackground};
    opacity: ${theme.fonts.emphasis.high};
  `,
);

export { Typography };
