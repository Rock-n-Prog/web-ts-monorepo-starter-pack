import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter, createContext } from 'trpc';

const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    console.error('Something went wrong', error);
  },
});

export default handler;
