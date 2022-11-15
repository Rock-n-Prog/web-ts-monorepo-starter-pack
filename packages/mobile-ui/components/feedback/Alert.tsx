import * as React from 'react';
import styled, { css } from 'styled-components/native';
import { Typography } from '../typography';
import type { Theme } from '../../styles/theme';
import type { Severity } from '../../types/severity';

type AlertProps = {
  readonly text: string;
  readonly severity: Severity;
};

function Alert({ text, severity }: AlertProps) {
  return (
    <AlertContainer $severity={severity}>
      <AlertText $severity={severity}>{text}</AlertText>
    </AlertContainer>
  );
}

type AlertContainerProps = {
  readonly $severity: Severity;
  readonly theme: Theme;
};

const AlertContainer = styled.View<AlertContainerProps>(
  ({ theme, $severity }: AlertContainerProps) => css`
    background-color: ${theme.colors.variants[$severity].background};
    padding: ${theme.spacing.s} ${theme.spacing.m};
    border-radius: ${theme.spacing.xxs};
  `,
);

const AlertText = styled(Typography)<AlertContainerProps>(
  ({ theme, $severity }: AlertContainerProps) => css`
    color: ${theme.colors.variants[$severity].onBackground};
  `,
);

export type { AlertProps };
export { Alert };
