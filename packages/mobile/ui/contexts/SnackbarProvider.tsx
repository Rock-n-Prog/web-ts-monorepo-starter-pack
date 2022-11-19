import * as React from 'react';
import styled, { css } from 'styled-components/native';
import type { Severity } from '../types/severity';
import { Snackbar } from '../components/feedback';
import { Theme } from '../styles/theme';

type SnackbarRequest = {
  readonly text: string;
  readonly severity: Severity;
};

type SnackbarRequestWithKey = {
  readonly key: number;
} & SnackbarRequest;

const snackbarDuration = 5000; // ms
const errorSnackbarDuration = 10000; // ms

function getDuration(request: SnackbarRequest) {
  return request?.severity === 'error' ? errorSnackbarDuration : snackbarDuration;
}

function SnackbarProvider({ children }: React.PropsWithChildren) {
  const [requests, setRequests] = React.useState<readonly SnackbarRequestWithKey[]>([]);
  const [nextKey, setNextKey] = React.useState(1);

  function showSnackbar(request: SnackbarRequest) {
    setRequests([...requests, { key: nextKey, ...request }]);
    setNextKey(nextKey + 1);
  }

  React.useEffect(() => {
    const requestToRemove = requests[0];
    const timeout = setTimeout(() => {
      setRequests(requests.filter(request => request.key !== requestToRemove.key));
    }, getDuration(requestToRemove));

    return () => clearTimeout(timeout);
  }, [requests]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <SnackbarProviderContainer>
        {children}
        <SnackbarListContainer>
          {requests.map(({ key, ...request }) => (
            <SnackbarItemContainer key={key} $isFirst={key === 0}>
              <Snackbar key={key} duration={getDuration(request)} {...request} />
            </SnackbarItemContainer>
          ))}
        </SnackbarListContainer>
      </SnackbarProviderContainer>
    </SnackbarContext.Provider>
  );
}

const SnackbarProviderContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const SnackbarListContainer = styled.View<{ readonly theme: Theme }>(
  ({ theme }: { readonly theme: Theme }) => css`
    bottom: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: ${theme.spacing.s};
  `,
);

type SnackbarItemContainer = {
  readonly $isFirst: boolean;
  readonly theme: Theme;
};

const SnackbarItemContainer = styled.View<SnackbarItemContainer>(
  ({ $isFirst, theme }) => css`
    ${!$isFirst &&
    `
      margin-top: ${theme.spacing.xs};
    `}
  `,
);

const SnackbarContext = React.createContext<{
  readonly showSnackbar: (request: SnackbarRequest) => void;
}>({ showSnackbar: () => void 0 });

export { SnackbarContext, SnackbarProvider };
