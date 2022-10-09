import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'web-ui/contexts/ThemeProvider';
import { trpc } from '../utils/trpc';
// TODO: Load from web-ui?
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default trpc.withTRPC(App);
