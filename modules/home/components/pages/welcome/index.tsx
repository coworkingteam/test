import React from 'react';
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

const Welcome = () => (
  <Wrapper>
    <CanvasGradient />

    <InnerWrapper>
      <LeftSide>
        <Title>
          Помощь с документами в Польше <Icon src='/static/icons/middle-arrow.svg' alt='send-arrow' />
        </Title>
        <SubTitle>Разрешение на работу - вид на жительство - срочные документы - бизнес - консалтинг</SubTitle>
      </LeftSide>

      <FormWrapper>
        <Form />
        <FormDescription>Публичная офферта на обротку данных</FormDescription>
      </FormWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default Welcome;
