import * as React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@acme/web-ui/contexts/ThemeProvider';
import { Container } from '@acme/web-ui/components/layouts';
import { SnackbarProvider } from '@acme/web-ui/contexts/SnackbarProvider';
import { LocaleProvider } from '../contexts/LocaleProvider';
import { trpc } from '../utils/trpc';
import { Toolbar } from '../components/dev-tools/Toolbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <Toolbar />
          <Container>
            <Component {...pageProps} />
          </Container>
        </SnackbarProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default trpc.withTRPC(appWithTranslation(App));
