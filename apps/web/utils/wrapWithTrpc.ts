import { withTRPC } from '@trpc/next';
import { AppType } from 'next/dist/shared/lib/utils';
import { AppRouter } from '../pages/api/trpc/[trpc]';

function wrapWithTrpc(app: AppType) {
  return withTRPC<AppRouter>({
    config: () => {
      const url = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/api/trpc`
        : 'http://localhost:3000/api/trpc';
      return {
        url,
        queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
      };
    },
    ssr: true,
  })(app);
}

export default wrapWithTrpc;
