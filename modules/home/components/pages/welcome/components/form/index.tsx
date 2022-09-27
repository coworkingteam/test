import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
import { TextField, Phone } from '@md-modules/shared/components/form';
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
        <Label>Name</Label>
        <TextField placeholder='Andrei Mihalkov' whiteBG />
      </InputWrapper>

      <InputWrapper>
        <Label>Email</Label>
        <TextField placeholder='cobra_killer1995@gmail.com' whiteBG />
      </InputWrapper>

      <InputWrapper>
        <Label>Phone</Label>
        <Phone />
      </InputWrapper>

      <ButtonWrapper>
        <Button preset='large'>
          Получить консультацию <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
