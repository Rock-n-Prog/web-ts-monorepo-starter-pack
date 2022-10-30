import * as React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type FlexDirection = 'row' | 'column';
type FlexJustifyContent = 'start' | 'center' | 'end';
type FlexMargin = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

type FlexProps = {
  readonly direction?: FlexDirection;
  readonly justifyContent?: FlexJustifyContent;
  readonly margin?: FlexMargin;
};

function Flex({ children, direction = 'row', justifyContent = 'start', margin }: React.PropsWithChildren<FlexProps>) {
  return (
    <StyledFlex $direction={direction} $justifyContent={justifyContent} $margin={margin}>
      {children}
    </StyledFlex>
  );
}

type StyledFlexProps = {
  readonly $direction: FlexDirection;
  readonly $justifyContent: FlexJustifyContent;
  readonly $margin?: FlexMargin;
  readonly theme: Theme;
};

const StyledFlex = styled.div<StyledFlexProps>(
  ({ $direction, $justifyContent, $margin, theme }: StyledFlexProps) => css`
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justifyContent};
    gap: ${theme.spacing.xs};
    margin: ${$margin ? theme.spacing[$margin] : 0};
  `,
);

export type { FlexProps };
export { Flex };
