import { t } from '../trpc';
import { helloRouter } from "./hello";

const appRouter = t.router({
  hello: helloRouter,
});

type AppRouter = typeof appRouter;

export type { AppRouter };
export { appRouter };