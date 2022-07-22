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
  withoutHoverAnimation?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  preset = 'default',
  disabled = false,
  children,
  withoutHoverAnimation,
  whiteBG,
  isLoading = false,
  ...rest
}) => (
  <Wrapper
    preset={preset}
    whiteBG={whiteBG}
    isLoading={isLoading}
    disabled={disabled || isLoading}
    withoutHoverAnimation={withoutHoverAnimation}
    {...rest}
  >
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
