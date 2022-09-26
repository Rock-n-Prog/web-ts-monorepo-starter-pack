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

type VariantToStylesParams = {
  theme: Theme;
  disabled: boolean;
};

const variantToStyles: Record<ButtonVariant, (params: VariantToStylesParams) => string> = {
  text: ({ theme, disabled }) =>
    disabled
      ? `color: ${theme.colors.disabled.onBackground};`
      : `
    color: ${theme.colors.palette.primary.main};

    :hover {
      color: ${theme.colors.palette.primary.light};
    }
  `,
  contained: ({ theme, disabled }) =>
    disabled
      ? `
      color: ${theme.colors.disabled.onBackground};
      background-color: ${theme.colors.disabled.background};
    `
      : `
      color: ${theme.colors.onPrimary};
      background-color: ${theme.colors.palette.primary.main};

      :hover {
        background-color: ${theme.colors.palette.primary.light};
      }
    `,
  outlined: ({ theme, disabled }) =>
    disabled
      ? `
    color: ${theme.colors.disabled.onBackground};
    border: 1px solid ${theme.colors.disabled.background};
  `
      : `
    color: ${theme.colors.palette.primary.main};
    border: 1px solid ${theme.colors.palette.primary.main};

    :hover {
      color: ${theme.colors.onPrimary};
      background-color: ${theme.colors.palette.primary.main};
    }
  `,
};

type StyledButtonProps = {
  readonly $variant: ButtonVariant;
  readonly theme: Theme;
  readonly disabled: boolean;
};

const StyledButton = styled.button<Omit<StyledButtonProps, 'theme'>>(
  ({ $variant, theme, disabled }: StyledButtonProps) => css`
    ${ButtonTypography};

    display: flex;
    border-radius: ${theme.spacing.xxs};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    padding: ${theme.spacing.xxs} ${theme.spacing.xs};
    outline: 0;
    border: 0;
    background-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${variantToStyles[$variant]({ theme, disabled })}
  `,
);

export { Button };
export type { ButtonProps, ButtonVariant };
