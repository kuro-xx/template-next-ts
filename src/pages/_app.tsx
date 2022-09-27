import { Global } from '@emotion/react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { globalStyles } from '~/styles/globals';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Default description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={globalStyles} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
