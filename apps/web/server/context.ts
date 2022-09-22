import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
// TODO(#14): Add prisma here
// import { prisma } from '../utils/prisma';

function createContext(opts?: trpcNext.CreateNextContextOptions) {
  return {
    req: opts?.req,
    // TODO(#14): Add prisma here
    // prisma,
    // task: prisma.task,
  };
}

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export type { Context };
export { createContext };
