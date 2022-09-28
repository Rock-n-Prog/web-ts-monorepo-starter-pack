import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Theme } from '../../styles/theme';

const Screen = styled.View(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacing.l};
    flex: 1;
    align-items: center;
  `,
);

export { Screen };
