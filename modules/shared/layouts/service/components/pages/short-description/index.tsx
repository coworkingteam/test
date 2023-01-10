import React from 'react';
// components
import Card from '@md-modules/shared/layouts/service/components/pages/short-description/components/card';
import SliderComponent from '@md-modules/shared/layouts/service/components/pages/short-description/components/slider';
// views
import { InnerWrapper, Wrapper } from '@md-modules/shared/layouts/service/components/pages/short-description/views';

export interface AdditionalServiceDataI {
  id: string;
  title: string;
  subTitle?: string;
  button: {
    src: string;
    title: string;
  };
}
[];

interface Props {
  themeColor?: string;

  data?: AdditionalServiceDataI[];
}

const ShortDescription: React.FC<Props> = ({ themeColor, data }) => {
  if (!data?.length) {
    return null;
  }

  return (
    <Wrapper themeColor={themeColor}>
      <InnerWrapper>
        <SliderComponent>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              subTitle={item.subTitle}
              button={{ src: item.button.src, title: item.button.title }}
            />
          ))}
        </SliderComponent>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ShortDescription;
