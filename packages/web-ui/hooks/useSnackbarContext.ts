import * as React from 'react';
import { SnackbarContext } from '../contexts/SnackbarProvider';

function useSnackbarContext() {
  return React.useContext(SnackbarContext);
}

export { useSnackbarContext };
