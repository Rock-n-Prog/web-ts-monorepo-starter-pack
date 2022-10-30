import { t } from '../config/trpc';
import { helloInput } from '../schemas';

const helloRouter = t.router({
  single: t.procedure
    .input(helloInput.nullish())
    .query(({ input }) => ({
      greeting: `Hello ${input?.name ?? 'world'}!`,
    })),
});

export { helloRouter };
