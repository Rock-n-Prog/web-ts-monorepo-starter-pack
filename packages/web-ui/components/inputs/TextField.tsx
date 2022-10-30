import * as React from 'react';
import styled, { css } from "styled-components";
import { InputError, Label } from "../typography";
import { Flex } from '../layout';
import type { Theme } from "../../styles/theme";

type TextFieldProps = {
  readonly label: string;
  readonly error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'>;

function TextField({ label, error, ...otherProps }: TextFieldProps) {
  const id = React.useId();

  // TODO: Maybe no gap in Flex?
  return (
    <Flex direction="column">
      <Label htmlFor={id}>{label}</Label>
      <StyledInput id={id} type="text" $isValid={!!error} { ...otherProps } />
      {error && <InputError>{error}</InputError>}
    </Flex>
  );
}

type StyledInputProps = {
  readonly $isValid: boolean;
  readonly theme: Theme;
};

const StyledInput = styled.input(
  ({ theme, $isValid }: StyledInputProps) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.s};
    outline: none;
    background: none;
    border: 1px solid ${theme.colors.onBackground};
    color: ${theme.colors.onBackground};
    border-radius: ${theme.spacing.xxs};
    
    :focus {
      border-color: ${theme.colors.palette.primary.main};
    }
    
    ::placeholder {
      color: ${theme.colors.onBackground};
      // TODO: Place opacity in emphasis.ts?
      opacity: 0.3;
    }

    ${$isValid && `
      border-color: ${theme.colors.variants.error.main};
    `}
  `,
);

export type { TextFieldProps };
export { TextField };
