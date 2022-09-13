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
      <InstructionBlock
        header='ВИВА ЛЯ БАРСА'
        title='Lorem ipsum dolor sit'
        button={{ title: 'Подробнее', url: '/spanish-resident-card' }}
        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
      />

      <ServiceSlider data={DATA} />
    </Wrapper>
  );
};

export default AdsBlock;
