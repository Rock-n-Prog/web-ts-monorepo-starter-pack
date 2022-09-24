import { createTRPCReact } from '@trpc/react';
import type { AppRouter } from 'trpc';

const trpc = createTRPCReact<AppRouter>();

export default trpc;