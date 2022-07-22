import * as React from 'react';
// hooks
import { useClickOutside } from '@md-modules/shared/hooks';
// components
import { ErrorMessage } from '@md-modules/shared/components/form/error-message';
import Label from '@md-modules/shared/components/form/text-field/components/label';
// views
import { TextInput, Wrapper, InputStyle, WrapperStyle, IconButtonWrapper, InputWrapper } from './views';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
  whiteBG?: boolean;
  inputStyle?: InputStyle;
  wrapperStyle?: WrapperStyle;
  iconButton?: React.ReactNode;
  side?: 'left' | 'right';
}

const TextField: React.FC<TextFieldProps> = ({
  errorText,
  iconButton,
  whiteBG,
  label,
  placeholder,
  wrapperStyle,
  side = 'right',
  ...rest
}) => {
  const [focused, setFocused] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useClickOutside(inputRef, onBlur);

  return (
    <Wrapper wrapperStyle={wrapperStyle}>
      <Label label={label} />

      <InputWrapper>
        <TextInput
          ref={inputRef}
          onFocus={onFocus}
          isFocused={focused}
          isError={!!errorText}
          placeholder={placeholder}
          whiteBG={whiteBG}
          side={side}
          {...rest}
        />

        <IconButtonWrapper whiteBG={whiteBG} side={side}>
          {iconButton}
        </IconButtonWrapper>
      </InputWrapper>

      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export { TextField };
