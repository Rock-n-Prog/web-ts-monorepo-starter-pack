import * as React from 'react';
import styled, { css } from "styled-components";
import { Theme } from "../../styles/theme";

type FlexDirection = 'row' | 'column';

type FlexProps = {
  readonly direction?: FlexDirection;
}

function Flex({ children, direction = 'row' }: React.PropsWithChildren<FlexProps>) {
  return <StyledFlex $direction={direction}>{children}</StyledFlex>;
}

type StyledFlexProps = {
  readonly $direction: FlexDirection;
  readonly theme: Theme;
};

const StyledFlex = styled.div<StyledFlexProps>(
  ({ $direction, theme }: StyledFlexProps) => css`
    display: flex;
    flex-direction: ${$direction};
    gap: ${theme.spacing.xs};
`);

export type { FlexProps };
export { Flex };