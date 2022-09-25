import * as React from 'react';
import type { ButtonProps as RNButtonProps } from 'react-native';
// TODO: Error in SC Native imports?
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonProps = {
  readonly variant?: ButtonVariant;
} & RNButtonProps;

function Button({ disabled = false, variant = 'outlined', ...props }: ButtonProps) {
  return <StyledButton $variant={variant} disabled={disabled} {...props} />;
}

const ButtonTypography = css(
  ({ theme }: { readonly theme: Theme }) => css`
    font-family: sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.s};
    text-transform: uppercase;
    line-height: ${theme.fonts.lineHeights.s};
  `,
);

const variantToStyles: Record<ButtonVariant, (theme: Theme) => string> = {
  text: _ => '',
  contained: theme =>
    `
    color: ${theme.colors.onPrimary};
    background-color: ${theme.colors.palette.primary.main};
  `,
  outlined: theme =>
    `
    border: 1px solid ${theme.colors.palette.primary.main};
  `,
};

type StyledButtonProps = {
  readonly $variant: ButtonVariant;
  readonly theme: Theme;
} & RNButtonProps;

// TODO: Disabled button should be gray
const StyledButton = styled.Button<Omit<StyledButtonProps, 'theme'>>(
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
  `,
);

export { Button };
export type { ButtonProps, ButtonVariant };
