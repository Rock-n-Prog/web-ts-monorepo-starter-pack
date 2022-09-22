import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from '../../../server/context';
import { appRouter } from '../../../server/routers/_app';

const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    console.error('Something went wrong', error);
  },
});

export default handler;
