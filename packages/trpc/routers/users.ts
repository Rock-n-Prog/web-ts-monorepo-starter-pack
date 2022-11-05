import { t } from '../config/trpc';
import { addUserInputSchema } from '../schemas';

const usersRouter = t.router({
  all: t.procedure.query(({ ctx: { prisma } }) => prisma.user.findMany()),
  add: t.procedure.input(addUserInputSchema).mutation(({ ctx: { prisma }, input }) =>
    prisma.user.create({
      data: input,
    }),
  ),
});

export { usersRouter };
