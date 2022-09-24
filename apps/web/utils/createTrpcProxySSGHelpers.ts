import superjson from 'superjson';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import { appRouter, createContext } from 'trpc';

function createTrpcProxySSGHelpers() {
  return createProxySSGHelpers({
    router: appRouter,
    transformer: superjson,
    ctx: createContext(),
  });
}

export default createTrpcProxySSGHelpers;
