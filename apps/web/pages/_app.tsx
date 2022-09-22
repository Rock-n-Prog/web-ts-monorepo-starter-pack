import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "web-ui/contexts/ThemeProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;