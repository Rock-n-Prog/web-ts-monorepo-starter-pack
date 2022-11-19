import * as React from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Theme } from '../../styles/theme';

function Screen({ children }: React.PropsWithChildren) {
  return (
    <StyledKeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {children}
    </StyledKeyboardAvoidingView>
  );
}

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: ${theme.colors.background};
    padding: ${theme.spacing.l};
    height: 100%;
    width: 100%;
  `,
);

export { Screen };
