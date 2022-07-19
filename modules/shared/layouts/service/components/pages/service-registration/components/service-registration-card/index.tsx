import React from 'react';
// views
import {
  Icon,
  InfoBlockWrapper,
  LeftSide,
  RightSide,
  SubTitle,
  Title,
  Wrapper
} from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card/views';
import { Button } from '@md-ui/buttons/main';

const ServiceRegistrationCard = () => {
  return (
    <Wrapper>
      <RightSide>
        <InfoBlockWrapper>
          <Title>Подача заявки:</Title>

          <SubTitle>1 день</SubTitle>
        </InfoBlockWrapper>

        <InfoBlockWrapper>
          <Title>Регистрация:</Title>

          <SubTitle>до 18 рабочих дней</SubTitle>
        </InfoBlockWrapper>

        <InfoBlockWrapper>
          <Title>Cтоимость</Title>

          <SubTitle>Лицензия до 15 лет-200 зл.</SubTitle>
          <SubTitle>Лицензии до 30 лет-250 зл.</SubTitle>
          <SubTitle>Лицензии до 50 лет-300 зл.</SubTitle>
        </InfoBlockWrapper>
      </RightSide>
      <LeftSide>
        <InfoBlockWrapper>
          <Title>Описание услуги:</Title>

          <SubTitle opacity={0.8}>
            Здесь можно получить, расширить, сузить или аннулировать лицензию на внутренние или международные перевозки
            пассажиров, опасных грузов и опасных отходов автомобильным транспортом.
          </SubTitle>
        </InfoBlockWrapper>

        <Button whiteBG>
          <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' /> Получить лицензию
        </Button>
      </LeftSide>
    </Wrapper>
  );
};

export default ServiceRegistrationCard;
