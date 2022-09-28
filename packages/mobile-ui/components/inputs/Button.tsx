import * as React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { Typography } from '../typography';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonProps = {
  readonly text: string;
  readonly variant?: ButtonVariant;
} & TouchableOpacityProps;

function Button({ text, variant = 'outlined', disabled = false, ...props }: ButtonProps) {
  return (
    <StyledTouchableOpacity $variant={variant} disabled={disabled} {...props}>
      <ButtonText $variant={variant} $disabled={disabled}>
        {text}
      </ButtonText>
    </StyledTouchableOpacity>
  );
}

type VariantToStylesParams = {
  theme: Theme;
  disabled: boolean;
};

const variantToButtonTextStyles: Record<ButtonVariant, (params: VariantToStylesParams) => string> = {
  text: ({ theme, disabled }) =>
    disabled
      ? `color: ${theme.colors.disabled.onBackground};`
      : `
    color: ${theme.colors.palette.primary.main};

    :active {
      color: ${theme.colors.palette.primary.light};
    }
  `,
  contained: ({ theme, disabled }) =>
    disabled ? `color: ${theme.colors.disabled.onBackground};` : `color: ${theme.colors.onPrimary};`,
  outlined: ({ theme, disabled }) =>
    disabled
      ? `color: ${theme.colors.disabled.onBackground};`
      : `
    color: ${theme.colors.palette.primary.main};

    :active {
      color: ${theme.colors.onPrimary};
    }
  `,
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
    line-height: ${theme.fonts.lineHeights.s};

    ${variantToButtonTextStyles[$variant]({ theme, disabled: $disabled })}
  `,
);

const variantToTouchableOpacityStyles: Partial<Record<ButtonVariant, (params: VariantToStylesParams) => string>> = {
  contained: ({ theme, disabled }) =>
    disabled
      ? `background-color: ${theme.colors.disabled.background};`
      : `
      background-color: ${theme.colors.palette.primary.main};

      :active {
        background-color: ${theme.colors.palette.primary.light};
      }
    `,
  outlined: ({ theme, disabled }) =>
    disabled
      ? `border: 1px solid ${theme.colors.disabled.background};`
      : `
    border: 1px solid ${theme.colors.palette.primary.main};

    :active {
      background-color: ${theme.colors.palette.primary.main};
    }
  `,
};

// TODO: Disabled not appearing?
// TODO: Text not appearing?
type StyledTouchableOpacityProps = {
  readonly $variant: ButtonVariant;
  readonly theme: Theme;
  // TODO: Could also do this: https://stackoverflow.com/questions/61912019/how-to-make-specific-props-non-nullable-in-typescript
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

export { Button };
export type { ButtonProps, ButtonVariant };
