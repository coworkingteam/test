import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Button } from '@md-ui/buttons/main';
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

export interface ServiceRegistrationData {
  leftSide: {
    filingApplicationID: string;
    registrationID: string;
    priceIDS: string[];
  };
  rightSide: {
    descriptionID: string;
    button: {
      titleID: string;
      onClick?: () => void;
    };
  };
}

const ServiceRegistrationCard: React.FC<ServiceRegistrationData> = ({ leftSide, rightSide }) => {
  return (
    <Wrapper>
      <RightSide>
        <InfoBlockWrapper>
          <Title>Подача заявки:</Title>

          <SubTitle>
            <FormattedMessage id={leftSide.filingApplicationID} />
          </SubTitle>
        </InfoBlockWrapper>

        <InfoBlockWrapper>
          <Title>Регистрация:</Title>

          <SubTitle>
            <FormattedMessage id={leftSide.registrationID} />
          </SubTitle>
        </InfoBlockWrapper>

        <InfoBlockWrapper>
          <Title>Cтоимость</Title>

          {leftSide.priceIDS.map((priceID, index) => (
            <SubTitle key={index}>
              <FormattedMessage id={priceID} />
            </SubTitle>
          ))}
        </InfoBlockWrapper>
      </RightSide>
      <LeftSide>
        <InfoBlockWrapper>
          <Title>Описание услуги:</Title>

          <SubTitle opacity={0.8}>
            <FormattedMessage id={rightSide.descriptionID} />
          </SubTitle>
        </InfoBlockWrapper>

        <Button whiteBG onClick={rightSide.button.onClick}>
          <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
          <FormattedMessage id={rightSide.button.titleID} />
        </Button>
      </LeftSide>
    </Wrapper>
  );
};

export default ServiceRegistrationCard;
