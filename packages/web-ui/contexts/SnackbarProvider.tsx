import * as React from 'react';
import type { Severity } from '../types/severity';
import { Snackbar } from '../components/feedback';

type SnackbarRequest = {
  readonly text: string;
  readonly severity: Severity;
}

const snackbarDuration = 1000; // ms

// TODO: Change display, put snackbars at the bottom and with display absolute
function SnackbarProvider({ children }: React.PropsWithChildren) {
  const [requests, setRequests] = React.useState<readonly SnackbarRequest[]>([]);

  function show(request: SnackbarRequest) {
    setRequests([...requests, request]);
  }

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRequests(requests.slice(1));
    }, snackbarDuration);

    return () => clearTimeout(timeout);
  }, [requests]);

  // TODO: Reverse list
  return (
    <SnackbarContext.Provider value={{ show }}>
      {children}
      {[...requests].reverse().map((request, index) => <Snackbar key={index} {...request} />)}
    </SnackbarContext.Provider>
  );
}

const SnackbarContext = React.createContext<{
  readonly show: (request: SnackbarRequest) => void;
}>({ show: () => void 0 });

export { SnackbarContext, SnackbarProvider };
