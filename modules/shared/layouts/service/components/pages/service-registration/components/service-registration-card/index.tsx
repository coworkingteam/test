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
    filingApplication?: {
      titleID: string;
      contentID: string;
    };
    registration?: {
      titleID: string;
      contentID: string;
    };
    price?: {
      titleID: string;
      contentsIDS: string[];
    };
  };
  rightSide: {
    description: {
      titleID: string;
      contentID: string;
    };
    button: {
      titleID: string;
      onClick?: () => void;
    };
  };
}

interface Props extends ServiceRegistrationData {
  linkID?: string;
  toggleModal: () => void;
}

const ServiceRegistrationCard: React.FC<Props> = ({ leftSide, rightSide, linkID, toggleModal }) => {
  return (
    <Wrapper id={linkID}>
      <RightSide>
        {leftSide.filingApplication?.titleID && (
          <InfoBlockWrapper>
            <Title>
              <FormattedMessage id={leftSide.filingApplication.titleID} />
            </Title>

            <SubTitle>
              <FormattedMessage id={leftSide.filingApplication.contentID} />
            </SubTitle>
          </InfoBlockWrapper>
        )}

        {leftSide.registration?.titleID && (
          <InfoBlockWrapper>
            <Title>
              <FormattedMessage id={leftSide.registration.titleID} />
            </Title>

            <SubTitle>
              <FormattedMessage id={leftSide.registration.contentID} />
            </SubTitle>
          </InfoBlockWrapper>
        )}

        {leftSide.price?.titleID && (
          <InfoBlockWrapper>
            <Title>
              <FormattedMessage id={leftSide.price.titleID} />
            </Title>

            {leftSide.price.contentsIDS.map((priceID, index) => (
              <SubTitle key={index}>
                <FormattedMessage id={priceID} />
              </SubTitle>
            ))}
          </InfoBlockWrapper>
        )}
      </RightSide>
      <LeftSide>
        <InfoBlockWrapper>
          <Title>
            <FormattedMessage id={rightSide.description.titleID} />
          </Title>

          <SubTitle opacity={0.8}>
            <FormattedMessage id={rightSide.description.contentID} />
          </SubTitle>
        </InfoBlockWrapper>

        <Button whiteBG onClick={toggleModal}>
          <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
          <FormattedMessage id={rightSide.button.titleID} />
        </Button>
      </LeftSide>
    </Wrapper>
  );
};

export default ServiceRegistrationCard;
