import * as React from 'react';
import styled, { css } from "styled-components";
import type { Severity } from '../types/severity';
import { Snackbar } from '../components/feedback';
import { Theme } from '../styles/theme';

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

  function showSnackbar(request: SnackbarRequest) {
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

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <SnackbarProviderContainer>
        {children}
        <SnackbarListContainer>
          {requests.map((request) => <Snackbar duration={snackbarDuration} {...request} />)}
        </SnackbarListContainer>
      </SnackbarProviderContainer>
    </SnackbarContext.Provider>
  );
}

const SnackbarProviderContainer = styled.div`
  // TODO: In storybook, renders scrollbar
  height: 100vh;
  position: relative;
`;

const SnackbarListContainer = styled.div<{ readonly theme: Theme}>(
  ({ theme }: { readonly theme: Theme }) => css`
    bottom: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
  `,
);

const SnackbarContext = React.createContext<{
  readonly showSnackbar: (request: SnackbarRequest) => void;
}>({ showSnackbar: () => void 0 });

export { SnackbarContext, SnackbarProvider };
