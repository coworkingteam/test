import React from 'react';
// components
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import { ErrorMessage } from '@md-modules/shared/components/form';
// styles
import 'react-phone-input-2/lib/bootstrap.css';
// views
import { Wrapper } from '@md-modules/shared/components/form/phone-input/views';

export interface PhoneProps extends PhoneInputProps {
  errorText?: string;
}

const Phone: React.FC<PhoneProps> = ({ errorText, ...rest }) => {
  return (
    <Wrapper isError={!!errorText}>
      <PhoneInput
        country='pl'
        autoFormat
        enableAreaCodeStretch
        countryCodeEditable={false}
        onlyCountries={['pl', 'ua', 'ge', 'by']}
        {...rest}
      />

      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export { Phone };
