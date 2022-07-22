import * as React from 'react';
// libs
import { Control, Controller } from 'react-hook-form';
// components
import Select from '@md-modules/shared/components/form/select';
// types
import { Option, SelectProps } from '@md-modules/shared/components/form';

interface Props extends Omit<SelectProps, 'inputRef'> {
  name: string;
  control: Control<any>;
  whiteBG?: boolean;
}

const FormSelect: React.FC<Props> = ({ control, name, options, ...rest }) => {
  const getValue = (value: string | string[]): Option | Option[] => {
    return Array.isArray(value)
      ? (value.map((i) => options.find(({ value }) => value === i)) as Option[])
      : (options.find((option) => option.value === value) as Option);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Select
          name={name}
          options={options}
          inputRef={field.ref}
          handleBlur={field.onBlur}
          errorText={error?.message}
          value={getValue(field.value)}
          handleChange={(value: string | string[]) => field.onChange(value)}
          {...rest}
        />
      )}
    />
  );
};

export { FormSelect };
