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
    const url = process.env.VERCEL_URL
      ? `${process.env.VERCEL_URL}/api/trpc`
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
})(NextApp);
