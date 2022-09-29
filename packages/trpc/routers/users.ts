import { t } from '../config/trpc';

const usersRouter = t.router({
  all: t.procedure.query(({ ctx: { prisma } }) => prisma.user.findMany()),
});

export { usersRouter };