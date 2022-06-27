import React from 'react';
// pages
import Welcome from '@md-modules/home/components/pages/welcome';
import AdsBlock from '@md-modules/home/components/pages/ads-block';
import Services from '@md-modules/home/components/pages/services';
import FeedBack from '@md-modules/home/components/pages/feed-back';
import AdditionalInfo from '@md-modules/home/components/pages/additional-info';

const Home = () => {
  return (
    <>
      <Welcome />
      <AdsBlock />
      <Services />
      <FeedBack />
      <AdditionalInfo />
    </>
  );
};

export default Home;
