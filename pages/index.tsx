import * as React from 'react';
import Home from '@md-modules/home';
import { GetServerSideProps } from 'next';
import { MainLayout } from '@md-modules/shared/layouts/main';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IAdsBlock, IServiceFields, IComment } from '@md-types/generated/contentful';

const HomePage = ({ ads, commentsData }: { ads: IAdsBlock; commentsData: IComment[] }) => (
  <MainLayout>
    <Home adData={ads} commentsData={commentsData} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const data = await contentfulClient.getEntries<IServiceFields>({
    content_type: 'adsBlock',
    locale
  });

  const commentsData = await contentfulClient.getEntries<IServiceFields>({
    content_type: 'comment',
    locale
  });

  const [ads] = data.items;

  return {
    props: {
      ads,
      commentsData: commentsData.items
    }
  };
};
export default HomePage;
