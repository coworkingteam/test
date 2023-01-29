import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// @ts-ignore
import { Gradient } from 'react-gradient';
// components
import ViberIcon from '../../../../../public/static/icons/viber';
import WhatsappIcon from '../../../../../public/static/icons/whatsapp';
import TelegramIcon from '../../../../../public/static/icons/telegram';
// import IMessageIcon from '../../../../../public/static/icons/imessage';
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
  const { push } = useRouter();

  return (
    <Wrapper id='feed-back'>
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
          <ViberIcon onClick={() => push('http://viber://pa?chatURI=aksisagency')} />

          <TelegramIcon onClick={() => push('https://t.me/aksisagent_bot?start=w18286976')} />

          <WhatsappIcon onClick={() => push('https://wa.me/message/PF3WAREVNIOMD1')} />

          {/*<IMessageIcon />*/}
        </MessengersWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default FeedBack;
