import * as React from 'react';
import styled, { css } from 'styled-components';
import { Alert, AlertProps } from './Alert';

type SnackbarProps = {
  readonly duration: number; // ms
} & AlertProps;

// TODO: Handle duration?
function Snackbar({ duration, ...alertProps }: SnackbarProps) {
  return <SnackbarContainer $duration={duration}><Alert {...alertProps} /></SnackbarContainer>;
}

type SnackbarContainerProps = {
  readonly $duration: number; // ms
};

const SnackbarContainer = styled.div<SnackbarContainerProps>(
  ({ $duration }: SnackbarContainerProps) => css`
    animation: opacityOn ${$duration}ms forwards;
    
    @keyframes opacityOn {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `,
);

export { Snackbar };