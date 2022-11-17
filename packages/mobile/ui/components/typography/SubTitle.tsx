import * as React from 'react';
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

const Title = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-size: ${theme.fonts.sizes.m};
    font-weight: ${theme.fonts.weights.semiBold};
  `,
);

export { Title };
