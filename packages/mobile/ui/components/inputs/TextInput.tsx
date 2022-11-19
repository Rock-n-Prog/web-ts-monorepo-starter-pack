import * as React from 'react';
import type { TextInputProps as RNTextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import type { Theme } from '../../styles/theme';
import { useThemeContext } from '../../hooks/useThemeContext';
import { Label, ErrorMessage } from '../typography';
import { Stack } from '../layouts';

type TextInputProps = {
  readonly label: string;
  readonly error?: string;
  readonly required?: boolean;
} & RNTextInputProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, required = false, ...props }, ref) => {
    const { theme } = useThemeContext();

    return (
      <Stack alignCenter={false} gap="xs">
        <Label>{required ? `${label}*` : label}</Label>
        <StyledTextInput
          ref={ref}
          placeholderTextColor={theme.colors.disabled.onBackground}
          $isValid={!error}
          {...props}
        />
        <ErrorMessage>{error}</ErrorMessage>
      </Stack>
    );
  },
);

type StyledTextInputProps = {
  readonly $isValid: boolean;
  readonly theme: Theme;
};

const StyledTextInput = styled.TextInput(
  ({ $isValid, theme }: StyledTextInputProps) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.s};
    border: 1px solid ${theme.colors.onBackground};
    color: ${theme.colors.onBackground};
    border-radius: ${theme.spacing.xxs};

    ${!$isValid &&
    `
      border-color: ${theme.colors.variants.error.main};
    `}
  `,
);

export type { TextInputProps };
export { TextInput };
