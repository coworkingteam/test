import * as React from 'react';
// components
import { Loader } from '@md-ui/loaders/loader';
// types
import { ButtonPresets } from './presets';
// views
import { ButtonStyle, InnerWrapper, LoaderWrapper, Wrapper } from './views';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  isLoading?: boolean;
  whiteBG?: boolean;
  preset?: ButtonPresets;
  buttonStyle?: ButtonStyle;
}

const Button: React.FC<ButtonProps> = ({
  preset = 'default',
  disabled = false,
  children,
  whiteBG,
  isLoading = false,
  ...rest
}) => (
  <Wrapper whiteBG={whiteBG} disabled={disabled || isLoading} preset={preset} isLoading={isLoading} {...rest}>
    <InnerWrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>{children}</>
      )}
    </InnerWrapper>
  </Wrapper>
);

export { Button };
