import * as React from 'react';
import { Platform, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { Typography } from './Typography';

function HeaderTitle({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <StyledHeaderTitle>{children}</StyledHeaderTitle>
    </Container>
  );
}

const Container = styled(View)`
  display: flex;
  justify-content: center;
  align-items: ${Platform.OS === 'ios' ? 'center' : 'flex-start'};
`;

const StyledHeaderTitle = styled(Typography)(
  ({ theme }: { readonly theme: Theme }) => css`
    font-weight: ${theme.fonts.weights.bold};
  `,
);

export { HeaderTitle };
