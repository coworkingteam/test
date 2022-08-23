import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
import ServiceCard from '@md-modules/home/components/pages/services/components/servece-card';
// constants
import { LEFT_SIDE_DATA, RIGHT_SIDE_DATA } from '@md-modules/home/components/pages/services/constants';
// views
import { Icon, InnerWrapper, LeftSide, RightSide, Wrapper } from '@md-modules/home/components/pages/services/views';

const Services = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LeftSide>
          {LEFT_SIDE_DATA.map((item) => (
            <ServiceCard {...item} key={item.title} />
          ))}

          <Button whiteBG>
            <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' /> Проконсультироватся бесплатно
          </Button>
        </LeftSide>

        <RightSide>
          {RIGHT_SIDE_DATA.map((item) => (
            <ServiceCard {...item} key={item.title} />
          ))}
        </RightSide>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Services;
