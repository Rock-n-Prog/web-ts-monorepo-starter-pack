import superjson from 'superjson';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import { createContext } from '../server/context';
import { appRouter } from '../server/routers/_app';

function createTrpcProxySSGHelpers() {
  return createProxySSGHelpers({
    router: appRouter,
    transformer: superjson,
    ctx: createContext(),
  });
}

export default createTrpcProxySSGHelpers;
