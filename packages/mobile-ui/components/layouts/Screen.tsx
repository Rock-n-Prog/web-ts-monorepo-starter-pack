import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Theme } from '../../styles/theme';

type ScreenProps = {
  fullHeight?: boolean;
  fullWidth?: boolean;
};

function Screen({ fullHeight = false, fullWidth = false, children }: React.PropsWithChildren<ScreenProps>) {
  return (<Wrapper><StyledScreen $fullHeight={fullHeight} $fullWidth={fullWidth}>{children}</StyledScreen></Wrapper>);
}

const Wrapper = styled.View(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: ${theme.colors.background};
    height: 100%;
  `,
);

type StyledScreenProps = {
  readonly $fullHeight: boolean;
  readonly $fullWidth: boolean;
  readonly theme: Theme;
};

const StyledScreen = styled.View(
  ({ $fullHeight, $fullWidth, theme }: StyledScreenProps) => css`
    ${!$fullWidth && `padding-horizontal: ${theme.spacing.l}`}
    ${!$fullHeight && `padding-vertical: ${theme.spacing.l}`}
  `,
);

export { Screen };
