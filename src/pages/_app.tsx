import '@fontsource/inter/200.css';
import '@fontsource/inter/variable.css';

import '@/styles/globals.css';

import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';

import type { AppRouter } from '@/pages/api/trpc/[trpc]';

const NextApp = (props: AppProps) => <props.Component {...props.pageProps} />;

export default withTRPC<AppRouter>({
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },

  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }

    // cache full page for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

    return {
      'Cache-Control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
    };
  },
})(NextApp);
