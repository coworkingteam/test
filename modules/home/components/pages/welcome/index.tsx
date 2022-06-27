import React from 'react';
// libs
// @ts-ignore
import { Gradient } from 'react-gradient';
// components
import Form from '@md-modules/home/components/pages/welcome/components/form';
// constants
import { COLORS } from '@md-modules/home/components/pages/welcome/constants';
// views
import {
  Title,
  Wrapper,
  SubTitle,
  FormWrapper,
  FormDescription
} from '@md-modules/home/components/pages/welcome/views';

const Welcome = () => {
  return (
    <Gradient gradients={COLORS} element='div'>
      <Wrapper>
        <div>
          <Title>Помощь с гос. услугами в Польше</Title>
          <SubTitle>Разрешение на работу - вид на жительство - срочные документы</SubTitle>
        </div>

        <FormWrapper>
          <Form />
          <FormDescription>Публичная офферта на обротку данных</FormDescription>
        </FormWrapper>
      </Wrapper>
    </Gradient>
  );
};

export default Welcome;
