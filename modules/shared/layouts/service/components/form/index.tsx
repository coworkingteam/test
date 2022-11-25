import React from 'react';
// libs
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
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

  const [isLoading, setIsLoading] = React.useState(false);

  const toggleIsLoading = () => setIsLoading((prev) => !prev);

  const handleFormSubmit = debounce(
    () =>
      handleSubmit(async (data: FormData) => {
        const api = createAPI();

        toggleIsLoading();
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
          toggleIsLoading();
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
          <FormInput control={control} name='name' placeholder='My name is...' whiteBG />
        </InputWrapper>

        <InputWrapper>
          <Label>Email</Label>
          <FormInput control={control} name='email' placeholder='My e-mail is...' whiteBG />
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
        <Button isLoading={isLoading} onClick={handleFormSubmit} preset='large' whiteBG>
          <FormattedMessage id='buttons.drawUp' /> <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
