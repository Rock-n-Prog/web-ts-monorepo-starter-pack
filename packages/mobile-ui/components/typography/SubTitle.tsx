import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Typography } from './Typography';
import { Theme } from '../../styles/theme';

const SubTitle = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-size: ${theme.fonts.sizes.m};
    font-weight: ${theme.fonts.weights.semiBold};
  `,
);

export { SubTitle };
