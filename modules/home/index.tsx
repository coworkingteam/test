import React from 'react';
// libs
import { NextSeo } from 'next-seo';
// hooks
import { useIntl } from 'react-intl';
// types
import { IAdsBlock } from '@md-types/generated/contentful';
// pages
import Welcome from '@md-modules/home/components/pages/welcome';
import AdsBlock from '@md-modules/home/components/pages/ads-block';
import Services from '@md-modules/home/components/pages/services';
import FeedBack from '@md-modules/home/components/pages/feed-back';
import AdditionalInfo from '@md-modules/home/components/pages/additional-info';

interface Props {
  adData: IAdsBlock;
}

const Home: React.FC<Props> = ({ adData }) => {
  const intl = useIntl();

  return (
    <>
      <NextSeo
        title={intl.formatMessage({ id: 'home.seoTitle' })}
        description={intl.formatMessage({ id: 'home.seoDescription' })}
        openGraph={{
          title: intl.formatMessage({ id: 'home.seoTitle' }),
          description: 'Open Graph Description'
        }}
      />

      <Welcome />
      <AdsBlock />
      <Services adData={adData} />
      <AdditionalInfo />
      <FeedBack />
    </>
  );
};

export default Home;
