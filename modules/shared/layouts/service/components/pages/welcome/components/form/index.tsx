import React from 'react';
// libs
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// hooks
import { useForm } from 'react-hook-form';
// components
import { Button } from '@md-ui/buttons/main';
import { FormInput, FormPhoneInput } from '@md-modules/shared/components/form';
// views
import { ButtonWrapper, Icon, InputWrapper, Label, Wrapper } from './views';
// utils
import { debounce } from 'lodash';

// validation
const schema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().required('Required').email('Invalid email'),
  phone: yup.string().required('Required')
});

const Form = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleFormSubmit = debounce(
    () =>
      handleSubmit(async (data: FormData) => {
        console.log(data);
      })(),
    500
  );

  return (
    <Wrapper>
      <form>
        <InputWrapper>
          <Label>Имя</Label>
          <FormInput control={control} name='name' placeholder='Andrei Mihalkov' whiteBG />
        </InputWrapper>

        <InputWrapper>
          <Label>Емайл</Label>
          <FormInput control={control} name='email' placeholder='cobra_killer1995@gmail.com' whiteBG />
        </InputWrapper>

        <InputWrapper>
          <Label>Телефон</Label>
          <FormPhoneInput name='phone' control={control} />
        </InputWrapper>

        <InputWrapper>
          <Label>Услуга</Label>
          <p>Получение и продление срока действия загранпаспорта Украины без выезда из Польши</p>
        </InputWrapper>
      </form>

      <ButtonWrapper>
        <Button onClick={handleFormSubmit} preset='large' whiteBG>
          Оформить <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
