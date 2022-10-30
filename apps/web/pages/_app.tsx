import * as React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'web-ui/contexts/ThemeProvider';
import { Container } from 'web-ui/components/layout';
import { TranslationProvider } from '../contexts/TranslationProvider';
import { trpc } from '../utils/trpc';
import { Toolbar } from '../components/Toolbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <Toolbar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default trpc.withTRPC(appWithTranslation(App));
