import * as React from 'react';
import styled, { css } from 'styled-components';
import { Tooltip } from '../data';
import { Theme } from '../../styles/theme';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonProps = {
  readonly tooltipText?: string;
  readonly variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, tooltipText, disabled = false, type = 'button', variant = 'outlined', ...props }, ref) => {
    const inner = (
      <div>
        <StyledButton $variant={variant} type={type} disabled={disabled} ref={ref} {...props}>
          {children}
        </StyledButton>
      </div>
    );

    return tooltipText ? <Tooltip title={tooltipText}>{inner}</Tooltip> : inner;
  },
);

const ButtonTypography = css(
  ({ theme }: { readonly theme: Theme }) => css`
    font-family: sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.s};
    text-transform: uppercase;
    line-height: 1.75;
  `,
);

const variantToStyles: Record<ButtonVariant, (theme: Theme) => string> = {
  text: _ => '',
  contained: theme =>
    `
    color: ${theme.colors.onPrimary};
    background-color: ${theme.colors.palette.primary.main};
    
    :hover {
      background-color: ${theme.colors.palette.primary.light};
    }
  `,
  outlined: theme =>
    `
    :hover {
      background-color: ${theme.colors.surface};
    }
  `,
};

type StyledButtonProps = {
  readonly $variant: ButtonVariant;
  readonly theme: Theme;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<Omit<StyledButtonProps, 'theme'>>(
  ({ $variant, theme, disabled }: StyledButtonProps) => css`
    ${ButtonTypography};

    display: flex;
    border-radius: ${theme.spacing.xxs};
    cursor: pointer;
    padding: ${theme.spacing.xxs} ${theme.spacing.xs};
    outline: 0;
    border: 0;
    color: ${theme.colors.palette.primary.main};
    background-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${variantToStyles[$variant](theme)}

    ${disabled &&
    `
    cursor: not-allowed;
  `}
  `,
);

export { Button };
export type { ButtonProps, ButtonVariant };
