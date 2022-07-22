import React from 'react';
// libs
// @ts-ignore
import { Gradient } from 'react-gradient';
// views
import {
  MessengersWrapper,
  Messenger,
  SubTitle,
  Title,
  Wrapper
} from '@md-modules/home/components/pages/feed-back/views';

const TEXT_GRADIENT_COLORS = [
  ['#A676E2', '#F37A76'],
  ['#FFD080', '#6ca1bc']
];

const FeedBack = () => {
  return (
    <Wrapper>
      <Gradient gradients={TEXT_GRADIENT_COLORS} property='text'>
        <Title>Не можете найти нужную вам услугу, или остались дополнительные вопросы?</Title>
      </Gradient>
      <SubTitle>
        Для этого мы здесь, нет услуги с которой мы не могли бы справится, все заказы бывают индивидуальные, но мы
        всегда готовы вас выслушать и максимально качественно подойти к насущному вопросу, общение с живими людьми
      </SubTitle>

      <MessengersWrapper>
        <Messenger src='/static/icons/viber.svg' alt='viber' />
        <Messenger src='/static/icons/telegram.png' alt='telegram' />
        <Messenger src='/static/icons/whatsapp.png' alt='whatsapp' />
      </MessengersWrapper>
    </Wrapper>
  );
};

export default FeedBack;
