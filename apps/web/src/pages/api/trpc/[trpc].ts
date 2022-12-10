import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter, createContext } from '@acme/api';

const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    console.error('Something went wrong', error);
  },
  batching: {
    enabled: true,
  },
});

export default handler;
