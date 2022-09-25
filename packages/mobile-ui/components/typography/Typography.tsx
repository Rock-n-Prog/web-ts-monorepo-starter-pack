import styled, { css } from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import type { Theme } from '../../styles/theme';

const Typography = styled.Text(
  ({ theme }: { readonly theme: Theme }) => css`
    color: ${theme.colors.onBackground};
    font-size: ${fonts.sizes.s};
    font-weight: ${fonts.weights.medium};
    opacity: ${fonts.emphasis.high};
  `,
);

export { Typography };
