import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// @ts-ignore
import { Gradient } from 'react-gradient';
// components
import ViberIcon from '../../../../../public/static/icons/viber';
import WhatsappIcon from '../../../../../public/static/icons/whatsapp';
import TelegramIcon from '../../../../../public/static/icons/telegram';
import IMessageIcon from '../../../../../public/static/icons/imessage';
// views
import {
  MessengersWrapper,
  SubTitle,
  Title,
  InnerWrapper,
  Wrapper
} from '@md-modules/home/components/pages/feed-back/views';

const TEXT_GRADIENT_COLORS = [
  ['#665BAC', '#21A2DD'],
  ['#4BAF4F', '#43A0D7']
];

const FeedBack = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Gradient angle='45deg' transitionType='sequential' gradients={TEXT_GRADIENT_COLORS} property='text'>
          <Title>
            <FormattedMessage id='home.feedback.title' />
          </Title>
        </Gradient>

        <SubTitle>
          <FormattedMessage id='home.feedback.subTitle' />
        </SubTitle>

        <MessengersWrapper>
          <ViberIcon />

          <TelegramIcon />

          <WhatsappIcon />

          <IMessageIcon />
        </MessengersWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default FeedBack;
