import * as React from 'react';
import styled, { css } from 'styled-components';
import { Alert, AlertProps } from './Alert';

type SnackbarProps = {
  readonly duration: number; // ms
} & AlertProps;

function Snackbar({ duration, ...alertProps }: SnackbarProps) {
  return (
    <SnackbarContainer $duration={duration}>
      <Alert {...alertProps} />
    </SnackbarContainer>
  );
}

type SnackbarContainerProps = {
  readonly $duration: number; // ms
};

const SnackbarContainer = styled.div<SnackbarContainerProps>(
  ({ $duration }: SnackbarContainerProps) => css`
    animation: brief-appear ${$duration}ms forwards;

    @keyframes brief-appear {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      99% {
        // TODO: Weird hack to avoid removed snackbars taking space
        width: auto;
        height: auto;
      }
      100% {
        opacity: 0;
        width: 0;
        height: 0;
      }
    }
  `,
);

export type { SnackbarProps };
export { Snackbar };
