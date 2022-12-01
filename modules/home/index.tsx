import React from 'react';
// libs
import { NextSeo } from 'next-seo';
// hooks
import { useIntl } from 'react-intl';
// pages
import Welcome from '@md-modules/home/components/pages/welcome';
import AdsBlock from '@md-modules/home/components/pages/ads-block';
import Services from '@md-modules/home/components/pages/services';
import FeedBack from '@md-modules/home/components/pages/feed-back';
import AdditionalInfo from '@md-modules/home/components/pages/additional-info';

const Home = () => {
  const intl = useIntl();

  return (
    <>
      <NextSeo
        title={`${intl.formatMessage({ id: 'home.welcome.title' })} | aksis`} // > 70/80 char // ukr --> Помощь с документами в Польше + для беженцов
        description='This example uses more of the available config options.'
        openGraph={{
          title: `${intl.formatMessage({ id: 'home.welcome.title' })} | aksis`,
          description: 'Open Graph Description'
        }}
      />

      <Welcome />
      <AdsBlock />
      <Services />
      <AdditionalInfo />
      <FeedBack />
    </>
  );
};

export default Home;
