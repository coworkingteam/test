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
// views
import { ButtonWrapper, Icon, InputWrapper, Label, Wrapper } from './views';
// utils
import { debounce } from 'lodash';
import { createAPI } from '@md-modules/shared/services/api';

// validation
const schema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().required('Required').email('Invalid email'),
  phone: yup.string().required('Required')
});

// types
interface Props {
  toggleModal: () => void;
  service: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const Form: React.FC<Props> = ({ service, toggleModal }) => {
  const { openToast, startProgress, doneProgress } = useUIActions();
  const { control, handleSubmit } = useForm<FormData>({
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
              title: service,
              contactID: getContactListResponse.data.result[0].ID
            });

            if (addDealResponse.data) {
              toggleModal();

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
              title: service,
              contactID: addContactResponse.data.result
            });

            if (addDealResponse.data) {
              toggleModal();

              openToast({
                type: 'SUCCESS',
                message: 'Application successfully sent! Our manager will contact you',
                position: 'top-center'
              });
            }
          }
        } catch (error) {
          openToast({ type: 'ERROR', error: error as Error });

          console.log('[Error while submit form on Service page]: ', JSON.stringify(error));
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

        <InputWrapper>
          <Label>Service</Label>
          <p>{service}</p>
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
