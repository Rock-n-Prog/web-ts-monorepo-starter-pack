import { router, publicProcedure } from '../config/trpc';
import { helloInputSchema } from '../schemas';

const helloRouter = router({
  single: publicProcedure.input(helloInputSchema.nullish()).query(({ input }) => ({
    greeting: `Hello ${input?.name ?? 'world'}!`,
  })),
});

export { helloRouter };
