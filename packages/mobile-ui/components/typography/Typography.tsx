import * as React from 'react';
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';

const Typography = styled.Text(
  ({ theme }: { readonly theme: Theme }) => css`
    color: ${theme.colors.onBackground};
    font-size: ${theme.fonts.sizes.s};
    font-weight: ${theme.fonts.weights.medium};
    opacity: ${theme.fonts.emphasis.high};
  `,
);

export { Typography };
