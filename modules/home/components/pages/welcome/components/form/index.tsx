import React from 'react';
// libs
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// hooks
import { useForm } from 'react-hook-form';
import { useUIActions } from '@md-modules/shared/hooks';
// components
import { Button } from '@md-ui/buttons/main';
import { FormInput, FormPhoneInput } from '@md-modules/shared/components/form';
// helpers
import { createAPI } from '@md-modules/shared/services/api';
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

// types
interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Form = () => {
  const { openToast, startProgress, doneProgress } = useUIActions();

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', phone: '380', email: '' }
  });

  const handleFormSubmit = debounce(
    () =>
      handleSubmit(async (data: FormData) => {
        const api = createAPI();

        startProgress();

        try {
          const getContactListResponse = await api.getContactList({ filter: { PHONE: data.phone } });

          if (getContactListResponse.data.result.length) {
            const addDealResponse = await api.addDeal({
              title: 'Получить консультацию',
              contactID: getContactListResponse.data.result[0].ID
            });

            if (addDealResponse.data) {
              reset({ name: '', phone: '380', email: '' });

              openToast({
                type: 'SUCCESS',
                message: 'Application successfully sent! Our manager will contact you',
                position: 'top-center'
              });
            }
            return;
          }

          const addContactResponse = await api.addContact(data);

          if (addContactResponse.data) {
            const addDealResponse = await api.addDeal({
              title: 'Получить консультацию',
              contactID: addContactResponse.data.result
            });

            if (addDealResponse.data) {
              reset({ name: '', phone: '380', email: '' });

              openToast({
                type: 'SUCCESS',
                message: 'Application successfully sent! Our manager will contact you',
                position: 'top-center'
              });
            }
          }
        } catch (error) {
          openToast({ type: 'ERROR', error: error as Error });

          console.log('[Error while submit form on Welcome page]: ', JSON.stringify(error));
        } finally {
          doneProgress();
        }
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
