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
import {
  ButtonWrapper,
  Icon,
  InputWrapper,
  Label,
  Wrapper
} from '@md-modules/home/components/pages/welcome/components/form/views';
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
          <Label>Name</Label>
          <FormInput control={control} name='name' placeholder='Andrei Mihalkov' whiteBG />
        </InputWrapper>

        <InputWrapper>
          <Label>Email</Label>
          <FormInput control={control} name='email' placeholder='cobra_killer1995@gmail.com' whiteBG />
        </InputWrapper>

        <InputWrapper>
          <Label>Phone</Label>
          <FormPhoneInput name='phone' control={control} />
        </InputWrapper>
      </form>

      <ButtonWrapper>
        <Button onClick={handleFormSubmit} preset='large'>
          Получить консультацию <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
