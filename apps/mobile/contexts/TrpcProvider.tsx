import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from "react";
import { httpBatchLink } from '@trpc/react';
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
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider queryClient={queryClient} client={trpcClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;