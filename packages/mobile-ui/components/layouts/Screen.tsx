import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Theme } from '../../styles/theme';

const Screen = styled.View(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacing.l};
    align-items: center;
    height: 100%;
    width: 100%;
  `,
);

export { Screen };
