import Head from 'next/head';
import React from 'react';
import { MyDefaultLayout } from '~/feature/app/components/MyDefaultLayout';
import { NewsTemplate } from '~/feature/news/NewsTemplate';
import { NextPageWithLayout } from '~/pages/_app';

const News: NextPageWithLayout = () => {
  const breadcrumbs = [{ id: 'news', name: 'ニュース', path: '/news' }];

  return (
    <>
      <Head>
        <title>Next Home</title>
        <meta name="description" content="This is Next App Home." />
      </Head>
      <NewsTemplate breadcrumbs={breadcrumbs} />
    </>
  );
};

News.getLayout = (page: React.ReactElement) => <MyDefaultLayout isHome>{page}</MyDefaultLayout>;

export default News;
