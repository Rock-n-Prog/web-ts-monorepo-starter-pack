import { z } from 'zod';
import { t } from '../config/trpc';

const helloRouter = t.router({
  single: t.procedure
    .input(
      z
        .object({
          name: z.string().nullish(),
        })
        .nullish(),
    )
    .query(({ input }) => ({
      greeting: `Hello ${input?.name ?? 'world'}!`,
    })),
});

export { helloRouter };
