import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Typography } from './Typography';
import { Theme } from '../../styles/theme';

const ScreenTitle = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-size: ${theme.fonts.sizes.l};
    font-weight: ${theme.fonts.weights.bold};
  `,
);

export { ScreenTitle };
