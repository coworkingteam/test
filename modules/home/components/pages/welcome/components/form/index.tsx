import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
import Phone from '@md-ui/inputs/phone-input';
// views
import { Icon, Wrapper } from '@md-modules/home/components/pages/welcome/components/form/views';

const Form = () => {
  return (
    <Wrapper>
      <Phone />

      <Button>
        <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' /> Перезвонить
      </Button>
    </Wrapper>
  );
};

export default Form;
