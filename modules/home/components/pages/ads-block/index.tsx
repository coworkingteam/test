import React from 'react';
// components
import ServiceSlider from '@md-modules/home/components/pages/ads-block/components/slider';
// constants
import { getMenuUIData } from '@md-modules/home/components/pages/ads-block/helpers';
// context
import { MenuAPIContext } from '@md-modules/shared/providers/menu-provider';
// views
import { InnerWrapper, Wrapper } from '@md-modules/home/components/pages/ads-block/views';

const AdsBlock = () => {
  const { menuItems } = React.useContext(MenuAPIContext);

  const data =
    menuItems
      .find((item) => item.type === 'POPULAR')
      ?.data.map((item) => ({
        img: `https:${item.serviceImage.fields.file.url}`,
        title: item.l,
        bgColor: getMenuUIData(item.serviceType),
        src: item.h
      })) || [];

  return (
    <Wrapper>
      <InnerWrapper>
        {/*<Title>Надёжная юридическая помощь в легализации и в других сложных проблемах на территории Польши!</Title>*/}

        <ServiceSlider data={data} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default AdsBlock;
