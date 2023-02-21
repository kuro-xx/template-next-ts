import Head from 'next/head';
import React from 'react';
import { MyDefaultLayout } from '~/feature/app/components/MyDefaultLayout';
import { HomeTemplate } from '~/feature/home/HomeTemplate';
import { NextPageWithLayout } from '~/pages/_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>ホーム</title>
        <meta name="description" content="This is Next App Home." />
      </Head>
      <HomeTemplate />
    </>
  );
};

Home.getLayout = (page: React.ReactElement) => <MyDefaultLayout isHome>{page}</MyDefaultLayout>;

export default Home;
