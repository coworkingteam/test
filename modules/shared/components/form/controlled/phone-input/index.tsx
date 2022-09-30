import * as React from 'react';
// libs
import { Control, Controller } from 'react-hook-form';
// components
import { PhoneProps, Phone } from '@md-modules/shared/components/form';

interface Props extends PhoneProps {
  name: string;
  control: Control<any, any>;
  formatter?: (value: string) => string;
  handleOnBlur?: () => void;
  handleOnChange?: () => void;
  defaultValue?: string | number;
}

const FormPhoneInput: React.FC<Props> = ({
  control,
  handleOnBlur,
  handleOnChange,
  defaultValue,
  name,
  formatter,
  ...rest
}) => {
  const handleOnChangeText = (text: string, formEventHandler: (value: string) => void): void => {
    const value = formatter ? formatter(text) : text;

    formEventHandler(value);
    handleOnChange?.();
  };

  const handleOnFieldBlur = (formEventHandler: () => void): void => {
    formEventHandler();
    handleOnBlur?.();
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field, fieldState: { error } }) => (
        <Phone
          value={field.value}
          errorText={error?.message}
          onBlur={() => handleOnFieldBlur(field.onBlur)}
          onChange={(phone) => handleOnChangeText(phone, field.onChange)}
          {...rest}
        />
      )}
    />
  );
};

export { FormPhoneInput };
