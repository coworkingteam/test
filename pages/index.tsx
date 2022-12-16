import * as React from 'react';
import Home from '@md-modules/home';
import { GetServerSideProps } from 'next';
import { MainLayout } from '@md-modules/shared/layouts/main';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IAdsBlock, IServiceFields } from '@md-types/generated/contentful';

const HomePage = ({ ads }: { ads: IAdsBlock }) => (
  <MainLayout>
    <Home adData={ads} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const data = await contentfulClient.getEntries<IServiceFields>({
    content_type: 'adsBlock',
    locale
  });

  const [ads] = data.items;

  return {
    props: {
      ads
    }
  };
};
export default HomePage;
