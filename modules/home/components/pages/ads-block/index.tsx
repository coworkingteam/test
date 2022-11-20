import React from 'react';
// components
import ServiceSlider from '@md-modules/home/components/pages/ads-block/components/slider';
// constants
import { DATA } from '@md-modules/home/components/pages/ads-block/constants';
// views
import { InnerWrapper, Wrapper } from '@md-modules/home/components/pages/ads-block/views';

const AdsBlock = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        {/*<Title>Надёжная юридическая помощь в легализации и в других сложных проблемах на территории Польши!</Title>*/}

        <ServiceSlider data={DATA} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default AdsBlock;
