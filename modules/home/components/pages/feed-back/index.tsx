import React from 'react';
// libs
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
          <Title>Не можете найти нужную вам услугу, или остались дополнительные вопросы?</Title>
        </Gradient>

        <SubTitle>
          Для этого мы здесь, нет услуги с которой мы не могли бы справится, все заказы бывают индивидуальные, но мы
          всегда готовы вас выслушать и максимально качественно подойти к насущному вопросу, общение с живими людьми
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
