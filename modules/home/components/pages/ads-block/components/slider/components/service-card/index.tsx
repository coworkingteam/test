import React from 'react';
// css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// types
import { Service } from '@md-modules/shared/types/service';
// views
import { Image, Title, InitialWrapper, TitleWrapper, Wrapper } from './views';

const ServiceCard: React.FC<Service> = ({ img, title }) => (
  <Wrapper>
    <InitialWrapper>
      <Image src={img} alt={img} />

      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </InitialWrapper>
  </Wrapper>
);

export default ServiceCard;
