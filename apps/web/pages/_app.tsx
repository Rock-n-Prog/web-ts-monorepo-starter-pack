import * as React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'web-ui/contexts/ThemeProvider';
import { Container } from 'web-ui/components/layouts';
import { SnackbarProvider } from 'web-ui/contexts/SnackbarProvider';
import { TranslationProvider } from '../contexts/TranslationProvider';
import { trpc } from '../utils/trpc';
import { Toolbar } from '../components/dev-tools/Toolbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <SnackbarProvider>
          <Toolbar />
          <Container>
            <Component {...pageProps} />
          </Container>
        </SnackbarProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default trpc.withTRPC(appWithTranslation(App));
