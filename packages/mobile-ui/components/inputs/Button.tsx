import * as React from 'react';
import type { ButtonProps as RNButtonProps } from 'react-native';
// TODO: Error in SC Native imports?
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { fonts } from "../../styles/fonts";
import { spacing } from "../../styles/spacing";

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonProps = {
  readonly variant?: ButtonVariant;
} & RNButtonProps;

function Button({ disabled = false, variant = 'outlined', ...props  }: ButtonProps) {
  return <StyledButton $variant={variant} disabled={disabled} {...props} />;
}

const ButtonTypography = css`
  font-family: sans-serif;
  font-weight: ${fonts.weights.regular};
  font-size: ${fonts.sizes.s};
  text-transform: uppercase;
  line-height: 1.75;
`;

// TODO: How to use palette here?
const variantToStyles: Record<ButtonVariant, (theme: Theme) => string> = {
  text: _ => '',
  contained: _ => '',
  outlined: _ => '',
  /*
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
    border: 1px solid ${theme.colors.palette.primary.main};

    :hover {
      background-color: ${theme.colors.surface};
    }
  `,
   */
};

type StyledButtonProps = {
  readonly $variant: ButtonVariant;
  readonly theme: Theme;
} & RNButtonProps;

// TODO: Disabled button should be gray
// color: ${theme.colors.palette.primary.main};
const StyledButton = styled.Button<Omit<StyledButtonProps, 'theme'>>(
  ({ $variant, theme, disabled }: StyledButtonProps) => css`
    ${ButtonTypography};

    display: flex;
    border-radius: ${spacing.xxs};
    cursor: pointer;
    padding: ${spacing.xxs} ${spacing.xs};
    outline: 0;
    border: 0;
    background-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${variantToStyles[$variant](theme)}
  `,
);

export { Button };
export type { ButtonProps, ButtonVariant };
