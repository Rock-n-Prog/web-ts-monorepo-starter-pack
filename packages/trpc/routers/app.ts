import { router } from '../config/trpc';
import { helloRouter } from './hello';
import { usersRouter } from './users';

const appRouter = router({
  hello: helloRouter,
  users: usersRouter,
});

type AppRouter = typeof appRouter;

export type { AppRouter };
export { appRouter };
