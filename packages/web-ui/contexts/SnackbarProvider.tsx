import * as React from 'react';
import type { Severity } from '../types/severity';
import { Snackbar } from '../components/feedback';

type SnackbarRequest = {
  readonly text: string;
  readonly severity: Severity;
}

type SnackbarRequestWithKey = {
  readonly key: number;
} & SnackbarRequest;

const snackbarDuration = 3000; // ms

// TODO: Change display, put snackbars at the bottom and with display absolute
function SnackbarProvider({ children }: React.PropsWithChildren) {
  const [requests, setRequests] = React.useState<readonly SnackbarRequestWithKey[]>([]);
  const [nextKey, setNextKey] = React.useState(1);

  function show(request: SnackbarRequest) {
    setRequests([...requests, { key: nextKey, ...request }]);
    setNextKey(nextKey + 1);
  }

  React.useEffect(() => {
    const keyToRemove = requests[0]?.key;
    const timeout = setTimeout(() => {
      setRequests(requests.filter((request) => request.key !== keyToRemove));
    }, snackbarDuration);

    return () => clearTimeout(timeout);
  }, [requests]);

  // TODO: Spacing (gap)
  // TODO: Animation when snackbars are added (shift up previous)
  return (
    <SnackbarContext.Provider value={{ show }}>
      {children}
      {requests.map((request) => <Snackbar duration={snackbarDuration} {...request} />)}
    </SnackbarContext.Provider>
  );
}

const SnackbarContext = React.createContext<{
  readonly show: (request: SnackbarRequest) => void;
}>({ show: () => void 0 });

export { SnackbarContext, SnackbarProvider };
