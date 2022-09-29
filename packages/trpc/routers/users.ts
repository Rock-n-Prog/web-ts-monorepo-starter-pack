import { prisma } from 'database';
import { t } from '../config/trpc';

const usersRouter = t.router({
  all: t.procedure.query(() => prisma.user.findMany()),
});

export { usersRouter };