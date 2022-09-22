import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'web-ui/contexts/ThemeProvider';
import { AppType } from 'next/dist/shared/lib/utils';
import wrapWithTrpc from '../utils/wrapWithTrpc';

// TODO: Doesn't seem to like AppType
function App({ Component, pageProps }: AppProps): AppType {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapWithTrpc(App);
