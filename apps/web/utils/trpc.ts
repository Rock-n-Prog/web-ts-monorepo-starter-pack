import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';
import type { AppRouter } from '../server/routers/_app';

// TODO: Fix this in turbo.json (2022/09/22 13:37:43 [DEPRECATED] Declaring an environment variable in "dependsOn" is deprecated, found $NODE_ENV. Use the "env" key or use `npx @turbo/codemod migrate-env-var-dependencies`.)

// TODO: Move utils/trpc, server/trpc and server/context to a new packages/trpc (to be re-used with expo)

function getVercelUrl() {
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
}

function getRenderInternalHostnameUrl() {
  return process.env.RENDER_INTERNAL_HOSTNAME
    ? `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
    : undefined;
}

function getLocalhostUrl() {
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

function getBaseUrl() {
  return typeof window === 'undefined' ? '' : getVercelUrl() ?? getRenderInternalHostnameUrl() ?? getLocalhostUrl();
}

const trpc = createTRPCNext<AppRouter>({
  config: () => ({
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
    queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
  }),
  ssr: false,
});

export { trpc };