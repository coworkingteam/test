import React from 'react';
// components
import PhoneInput from 'react-phone-input-2';
// styles
import 'react-phone-input-2/lib/bootstrap.css';
// views
import { Wrapper } from '@md-ui/inputs/phone-input/views';

const Phone = () => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <PhoneInput country='pl' value={value} onChange={(phone) => setValue(phone)} />
    </Wrapper>
  );
};

export default Phone;
