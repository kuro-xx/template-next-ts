import Head from 'next/head';
import React from 'react';
import { DefaultLayout } from '~/feature/app/components/DefaultLayout';
import { HomeTemplate } from '~/feature/home/HomeTemplate';
import { NextPageWithLayout } from '~/pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next Home</title>
        <meta name="description" content="This is Next App Home." />
      </Head>
      <HomeTemplate />
    </>
  );
};

Home.getLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
