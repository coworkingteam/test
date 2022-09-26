import React from 'react';
// types
import { Service } from '@md-modules/shared/types/service';
// components
import { Button } from '@md-ui/buttons/main';
import SendArrow from 'public/static/icons/send-arrow';
// views
import { Title, Wrapper, Image } from '@md-modules/home/components/pages/services/components/servece-card/views';

interface Props extends Service {
  whiteBG?: boolean;
}

const ServiceCard: React.FC<Props> = ({ img, title, whiteBG = false }) => (
  <Wrapper whiteBG={whiteBG}>
    <Title whiteBG={whiteBG}>{title}</Title>

    {img && <Image src={img} alt={title + img} />}

    <Button whiteBG={whiteBG}>
      Рассмотреть услуги
      <SendArrow />
    </Button>
  </Wrapper>
);

export default ServiceCard;
