import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
import Phone from '@md-ui/inputs/phone-input';
import { TextField } from '@md-modules/shared/components/form/text-field';
// views
import {
  ButtonWrapper,
  Icon,
  InputWrapper,
  Label,
  Wrapper
} from '@md-modules/home/components/pages/welcome/components/form/views';

const Form = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Label>Имя</Label>
        <TextField placeholder='Andrei Mihalkov' whiteBG />
      </InputWrapper>

      <InputWrapper>
        <Label>Емайл</Label>
        <TextField placeholder='cobra_killer1995@gmail.com' whiteBG />
      </InputWrapper>

      <InputWrapper>
        <Label>Телефон</Label>
        <Phone />
      </InputWrapper>

      <ButtonWrapper>
        <Button>
          Получить консультацию <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
