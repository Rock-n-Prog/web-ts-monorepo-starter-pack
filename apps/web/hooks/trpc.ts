import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '../pages/api/trpc/[trpc]';

// TODO: Error here? Maybe use react-query@3
const trpc = createReactQueryHooks<AppRouter>();

export default trpc;