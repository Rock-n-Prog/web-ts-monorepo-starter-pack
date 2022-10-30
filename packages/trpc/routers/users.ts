import { t } from '../config/trpc';
import { addUserInput } from '../schemas/users';

const usersRouter = t.router({
  all: t.procedure.query(({ ctx: { prisma } }) => prisma.user.findMany()),
  add: t.procedure
    .input(addUserInput)
    .mutation(({ ctx: { prisma }, input }) =>
      prisma.user.create({
        data: input
      })),
});

export { usersRouter };
