import { z } from 'zod';
import { t } from '../trpc';

// TODO: Use Prisma (https://github.com/trpc/examples-next-prisma-todomvc/blob/next/src/server/routers/todo.ts)
const helloRouter = t.router({
  single: t.procedure
    .input(
      z
        .object({
          text: z.string().nullish(),
        })
        .nullish(),
    )
    .query(({ input }) => ({
      greeting: `Hello ${input?.text ?? 'world'}!`,
    })),
});

export { helloRouter };
