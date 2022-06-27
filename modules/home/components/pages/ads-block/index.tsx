import React from 'react';
// components
import ServiceSlider from '@md-modules/home/components/pages/ads-block/components/slider';
import InstructionBlock from '@md-modules/home/components/pages/ads-block/components/intsruction-block';
// constants
import { DATA } from '@md-modules/home/components/pages/ads-block/constants';
// views
import { Wrapper } from '@md-modules/home/components/pages/ads-block/views';

const AdsBlock = () => {
  return (
    <Wrapper>
      <InstructionBlock />
      <ServiceSlider data={DATA} />
    </Wrapper>
  );
};

export default AdsBlock;
