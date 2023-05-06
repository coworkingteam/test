import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import CanvasGradient from '@md-ui/canvas-gradient';
import Form from '@md-modules/home/components/pages/welcome/components/form';
// views
import {
  Icon,
  Title,
  Wrapper,
  SubTitle,
  InnerWrapper,
  FormWrapper,
  FormDescription,
  LeftSide
} from '@md-modules/home/components/pages/welcome/views';
import { Link } from '@md-ui/link';

const Welcome = () => (
  <Wrapper>
    <CanvasGradient />

    <InnerWrapper>
      <LeftSide>
        <Title>
          <FormattedMessage id='home.welcome.title' /> <Icon src='/static/icons/middle-arrow.svg' alt='send-arrow' />
        </Title>
        <SubTitle>
          <FormattedMessage id='home.welcome.subTitle' />
        </SubTitle>
      </LeftSide>

      <FormWrapper>
        <Form />
        <FormDescription>
          <FormattedMessage id='home.welcome.termsOfCondition.0' />{' '}
          <Link preset='small' href='/terms-of-condition'>
            <FormattedMessage id='home.welcome.termsOfCondition.1' />
          </Link>{' '}
          <FormattedMessage id='home.welcome.termsOfCondition.2' />
        </FormDescription>
      </FormWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default Welcome;
