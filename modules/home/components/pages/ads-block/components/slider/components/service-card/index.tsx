import React from 'react';
// css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// types
import { Service } from '@md-modules/shared/types/service';
// views
import { Description, Image, InitialWrapper, Title, Wrapper } from './views';

const ServiceCard: React.FC<Service> = ({ img, title, description }) => {
  return (
    <Wrapper>
      <InitialWrapper>
        <Image src={img} alt={img} />

        <Title>{title}</Title>

        <Description>{description}</Description>
      </InitialWrapper>
    </Wrapper>
  );
};

export default ServiceCard;
