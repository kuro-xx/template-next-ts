import Head from 'next/head';
import React from 'react';
import { MyDefaultLayout } from '~/feature/app/components/MyDefaultLayout';
import { ServicesTemplate } from '~/feature/services/ServicesTemplate';
import { NextPageWithLayout } from '~/pages/_app';

const Services: NextPageWithLayout = () => {
  const breadcrumbs = [{ id: 'news', name: '事業内容', path: '/services' }];

  return (
    <>
      <Head>
        <title>事業内容</title>
        <meta name="description" content="This is Next App Home." />
      </Head>
      <ServicesTemplate breadcrumbs={breadcrumbs} />
    </>
  );
};

Services.getLayout = (page: React.ReactElement) => <MyDefaultLayout isHome>{page}</MyDefaultLayout>;

export default Services;
