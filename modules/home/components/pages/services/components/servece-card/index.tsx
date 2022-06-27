import React from 'react';
// types
import { Service } from '@md-modules/shared/types/service';
// views
import {
  Title,
  Wrapper,
  Description,
  Icon
} from '@md-modules/home/components/pages/services/components/servece-card/views';

const ServiceCard: React.FC<Service> = ({ img, title, description }) => (
  <Wrapper>
    <Icon src={img} />

    <div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  </Wrapper>
);

export default ServiceCard;
