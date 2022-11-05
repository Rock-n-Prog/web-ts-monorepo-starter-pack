import { t } from '../config/trpc';
import { helloInputSchema } from '../schemas';

const helloRouter = t.router({
  single: t.procedure.input(helloInputSchema.nullish()).query(({ input }) => ({
    greeting: `Hello ${input?.name ?? 'world'}!`,
  })),
});

export { helloRouter };
