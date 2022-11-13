import { router, publicProcedure } from '../config/trpc';
import { addUserInputSchema } from '../schemas';

const usersRouter = router({
  all: publicProcedure.query(({ ctx: { prisma } }) => prisma.user.findMany()),
  add: publicProcedure.input(addUserInputSchema).mutation(({ ctx: { prisma }, input }) =>
    prisma.user.create({
      data: input,
    }),
  ),
});

export { usersRouter };
