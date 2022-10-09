import * as React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../typography';
import { Theme } from '../../styles/theme';

type TooltipProps = {
  readonly title: string;
};

function Tooltip({ children, title }: React.PropsWithChildren<TooltipProps>) {
  // TODO: Still need more class names... lol is Tailwind really an improvement?
  return (
    <div className="group relative block">
      {children}
      <span className="group-hover:visible typography invisible spacing-tooltip bg-tooltip-background dark:bg-tooltip-background-dark tooltip-on-background dark:tooltip-on-background-dark font-size-xs">{title}</span>
    </div>
  );
}

const TooltipText = styled.span(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};
    visibility: hidden;
    min-width: ${theme.spacing.tooltip};
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

export type { TooltipProps };
export { Tooltip };
