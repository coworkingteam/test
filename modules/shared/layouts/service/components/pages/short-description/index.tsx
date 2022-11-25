import React from 'react';
// components
import Card from '@md-modules/shared/layouts/service/components/pages/short-description/components/card';
import SliderComponent from '@md-modules/shared/layouts/service/components/pages/short-description/components/slider';
// views
import { InnerWrapper, Wrapper } from '@md-modules/shared/layouts/service/components/pages/short-description/views';

interface Props {
  themeColor?: string;
}

const ShortDescription: React.FC<Props> = ({ themeColor }) => {
  return (
    <Wrapper themeColor={themeColor}>
      <InnerWrapper>
        <SliderComponent>
          <Card title='Получение испанской визы' button={{ src: '/' }} subTitle='карты TIE' />
          <Card title='Получение канадской визы' button={{ src: '/' }} subTitle='виза по программе CUAET' />
        </SliderComponent>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ShortDescription;
