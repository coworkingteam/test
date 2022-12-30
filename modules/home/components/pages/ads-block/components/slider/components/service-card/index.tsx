import React from 'react';
// hooks
import { useRouter } from 'next/router';
// css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// types
import { Service } from '@md-modules/shared/types/service';
// views
import { Image, Title, InitialWrapper, TitleWrapper, Wrapper } from './views';

const ServiceCard: React.FC<Service> = ({ img, title, bgColor, src }) => {
  const { push } = useRouter();

  const onClick = () => push(src);

  return (
    <Wrapper>
      <InitialWrapper onClick={onClick} bgColor={bgColor}>
        <Image src={img} alt={title} />

        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </InitialWrapper>
    </Wrapper>
  );
};

export default ServiceCard;
