import * as React from 'react';
import type { Severity } from '../types/severity';

type SnackbarRequest = {
  readonly text: string;
  readonly severity: Severity;

}

function SnackbarProvider({ children }: React.PropsWithChildren) {
  function show(request: SnackbarRequest) {
    // TODO: Add to queue, display with duration
    console.log(request);
  }

  return <SnackbarContext.Provider value={{ show }}>{children}</SnackbarContext.Provider>;
}

const SnackbarContext = React.createContext<{
  readonly show: (request: SnackbarRequest) => void;
}>({ show: () => void 0 });

export { SnackbarContext, SnackbarProvider };
