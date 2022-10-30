import * as React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../typography';
import { Theme } from '../../styles/theme';

type TooltipProps = {
  readonly title: string;
};

function Tooltip({ children, title }: React.PropsWithChildren<TooltipProps>) {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{title}</TooltipText>
    </TooltipContainer>
  );
}

const TooltipText = styled.span(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};
    visibility: hidden;
    min-width: 7.5rem;
    background-color: ${theme.colors.tooltip.background};
    color: ${theme.colors.tooltip.onBackground};
    font-size: ${theme.fonts.sizes.xs};
    text-align: center;
    padding: ${theme.spacing.xxs};
    border-radius: ${theme.spacing.xxs};
    margin-top: ${theme.spacing.xs};
    transform: translateX(-50%);
    left: 50%;

    position: absolute;
    z-index: 1;
  `,
);

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipText} {
    visibility: visible;
  }
`;

export type { TooltipProps };
export { Tooltip };
