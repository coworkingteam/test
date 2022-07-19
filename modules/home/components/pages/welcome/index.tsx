import React from 'react';
// components
import CanvasGradient from '@md-ui/canvas-gradient';
import Form from '@md-modules/home/components/pages/welcome/components/form';
// views
import {
  Title,
  Wrapper,
  SubTitle,
  InnerWrapper,
  FormWrapper,
  FormDescription
} from '@md-modules/home/components/pages/welcome/views';

const Welcome = () => (
  <Wrapper>
    <CanvasGradient />

    <InnerWrapper>
      <div>
        <Title>Помощь с гос. услугами в Польше</Title>
        <SubTitle>Разрешение на работу - вид на жительство - срочные документы</SubTitle>
      </div>

      <FormWrapper>
        <Form />
        <FormDescription>Публичная офферта на обротку данных</FormDescription>
      </FormWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default Welcome;
