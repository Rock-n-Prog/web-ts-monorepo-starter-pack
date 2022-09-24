import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from "react";
import { httpBatchLink, loggerLink } from "@trpc/react";
import superjson from 'superjson';
import trpc from '../utils/trpc';

function getVercelUrl() {
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
}

function getLocalhostUrl() {
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

function getBaseUrl() {
  return getVercelUrl() ?? getLocalhostUrl();
}

function TrpcProvider({ children }: PropsWithChildren) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60,
        refetchOnWindowFocus: false,
      },
    },
  }));
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        loggerLink({
          enabled: opts =>
            process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;