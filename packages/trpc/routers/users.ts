import type { User } from 'database';
import { prisma } from 'database';
import { t } from '../trpc';

const usersRouter = t.router({
  all: t.procedure.query(() => prisma.user.findMany() as Promise<readonly User[] | undefined>),
});

export { usersRouter };