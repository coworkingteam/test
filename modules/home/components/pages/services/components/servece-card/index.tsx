import React from 'react';
// hooks
import { useRouter } from 'next/router';
// types
import { Service } from '@md-modules/shared/types/service';
// components
import { Button } from '@md-ui/buttons/main';
import SendArrow from 'public/static/icons/send-arrow';
// views
import {
  Title,
  Wrapper,
  Image,
  ImageWrapper
} from '@md-modules/home/components/pages/services/components/servece-card/views';

interface Props extends Service {
  whiteBG?: boolean;
}

const ServiceCard: React.FC<Props> = ({ img, src, title, whiteBG = false }) => {
  const { push } = useRouter();

  const onClick = () => push(src);

  return (
    <Wrapper onClick={onClick} whiteBG={whiteBG}>
      <Title whiteBG={whiteBG}>{title}</Title>

      {img && (
        <ImageWrapper>
          <Image src={img} alt={title + img} />
        </ImageWrapper>
      )}

      <Button whiteBG={whiteBG}>
        Рассмотреть услуги
        <SendArrow />
      </Button>
    </Wrapper>
  );
};

export default ServiceCard;
