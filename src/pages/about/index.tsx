import Head from 'next/head';
import React from 'react';
import { MyDefaultLayout } from '~/feature/app/components/MyDefaultLayout';
import { AboutTemplate } from '~/feature/abount/AboutTemplate';
import { NextPageWithLayout } from '~/pages/_app';

const News: NextPageWithLayout = () => {
  const breadcrumbs = [{ id: 'news', name: '会社概要', path: '/about' }];

  return (
    <>
      <Head>
        <title>会社概要</title>
        <meta name="description" content="This is Next App Home." />
      </Head>
      <AboutTemplate breadcrumbs={breadcrumbs} />
    </>
  );
};

News.getLayout = (page: React.ReactElement) => <MyDefaultLayout isHome>{page}</MyDefaultLayout>;

export default News;
