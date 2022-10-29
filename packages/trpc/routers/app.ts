import { t } from '../config/trpc';
import { helloRouter } from './hello';
import { usersRouter } from './users';

const appRouter = t.router({
  hello: helloRouter,
  users: usersRouter,
});

type AppRouter = typeof appRouter;

export type { AppRouter };
export { appRouter };
