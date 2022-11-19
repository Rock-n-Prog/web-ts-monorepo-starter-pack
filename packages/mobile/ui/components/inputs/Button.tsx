import * as React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { Typography } from '../typography';

const buttonVariants = ['contained', 'outlined', 'text'] as const;
type ButtonVariant = typeof buttonVariants[number];

type ButtonProps = {
  readonly text: string;
  readonly variant?: ButtonVariant;
} & TouchableOpacityProps;

function Button({ text, variant = 'contained', disabled = false, ...props }: ButtonProps) {
  return (
    <StyledTouchableOpacity $variant={variant} disabled={disabled} {...props}>
      <ButtonText $variant={variant} $disabled={disabled}>
        {text}
      </ButtonText>
    </StyledTouchableOpacity>
  );
}

type VariantToStylesParams = {
  readonly theme: Theme;
  readonly disabled: boolean;
};

const variantToButtonTextStyles: Record<ButtonVariant, (params: VariantToStylesParams) => string> = {
  text: ({ theme, disabled }) =>
    `color: ${disabled ? theme.colors.disabled.onBackground : theme.colors.palette.primary.main};`,
  contained: ({ theme, disabled }) =>
    `color: ${disabled ? theme.colors.disabled.onBackground : theme.colors.onPrimary};`,
  outlined: ({ theme, disabled }) =>
    `color: ${disabled ? theme.colors.disabled.onBackground : theme.colors.palette.primary.main};`,
};

type ButtonTextProps = {
  readonly $variant: ButtonVariant;
  readonly $disabled: boolean;
  readonly theme: Theme;
};

const ButtonText = styled(Typography)(
  ({ $variant, $disabled, theme }: ButtonTextProps) => css`
    font-family: sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.s};
    text-transform: uppercase;
    text-align: center;

    ${variantToButtonTextStyles[$variant]({ theme, disabled: $disabled })}
  `,
);

const variantToTouchableOpacityStyles: Partial<Record<ButtonVariant, (params: VariantToStylesParams) => string>> = {
  contained: ({ theme, disabled }) =>
    `background-color: ${disabled ? theme.colors.disabled.background : theme.colors.palette.primary.main};`,
  outlined: ({ theme, disabled }) =>
    `border: 1px solid ${disabled ? theme.colors.disabled.background : theme.colors.palette.primary.main};`,
};

type StyledTouchableOpacityProps = {
  readonly $variant: ButtonVariant;
  readonly theme: Theme;
  readonly disabled: boolean;
} & TouchableOpacityProps;

const StyledTouchableOpacity = styled.TouchableOpacity(
  ({ $variant, theme, disabled }: StyledTouchableOpacityProps) => css`
    display: flex;
    border-radius: ${theme.spacing.xxs};
    padding: ${theme.spacing.xxs} ${theme.spacing.xs};
    outline: 0;
    border: 0;
    color: ${theme.colors.palette.primary.main};
    background-color: transparent;

    ${variantToTouchableOpacityStyles[$variant]?.({ theme, disabled })}
  `,
);

export { Button, buttonVariants };
export type { ButtonProps, ButtonVariant };
