import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeTemplate } from '~/templates/HomeTemplate';

const Home: NextPage = () => {
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

export default Home;
