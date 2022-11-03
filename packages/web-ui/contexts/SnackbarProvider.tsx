import * as React from 'react';
import type { Severity } from '../types/severity';
import { Snackbar } from '../components/feedback';

type SnackbarRequest = {
  readonly text: string;
  readonly severity: Severity;
}

const snackbarDuration = 3000; // ms

// TODO: Change display, put snackbars at the bottom and with display absolute
function SnackbarProvider({ children }: React.PropsWithChildren) {
  const [requests, setRequests] = React.useState<readonly SnackbarRequest[]>([]);

  function show(request: SnackbarRequest) {
    setRequests([...requests, request]);
  }

  React.useEffect(() => {
    // TODO: Doesn't properly remove last requests when spammed
    console.log(requests);
    const timeout = setTimeout(() => {
      setRequests(requests.slice(1));
    }, snackbarDuration);

    return () => clearTimeout(timeout);
  }, [requests]);

  // TODO: Reverse list
  return (
    <SnackbarContext.Provider value={{ show }}>
      {children}
      {requests.map((request, index) => <Snackbar key={index} duration={snackbarDuration} {...request} />)}
    </SnackbarContext.Provider>
  );
}

const SnackbarContext = React.createContext<{
  readonly show: (request: SnackbarRequest) => void;
}>({ show: () => void 0 });

export { SnackbarContext, SnackbarProvider };
