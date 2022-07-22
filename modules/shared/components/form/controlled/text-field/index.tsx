import * as React from 'react';
// libs
import { Control, Controller } from 'react-hook-form';
// components
import { TextFieldProps, TextField } from '@md-modules/shared/components/form/text-field';

interface Props extends TextFieldProps {
  name: string;
  control: Control<any>;
  formatter?: (value: string) => string;
  handleOnBlur?: () => void;
  handleOnChange?: () => void;
  defaultValue?: string | number;
}

const FormInput: React.FC<Props> = ({
  control,
  handleOnBlur,
  handleOnChange,
  defaultValue,
  name,
  formatter,
  side = 'right',
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
        <TextField
          side={side}
          value={field.value}
          errorText={error?.message}
          onBlur={() => handleOnFieldBlur(field.onBlur)}
          onChange={(e) => handleOnChangeText(e.target.value, field.onChange)}
          {...rest}
        />
      )}
    />
  );
};

export { FormInput };
