import styled from 'styled-components';
import { Margin } from '@md-modules/shared/types/css';
import { getMarginStyle } from '@md-modules/shared/helpers/styled';

export type InputStyle = {
  fs?: number;
};

interface InputProps {
  isError: boolean;
  isFocused: boolean;
  inputStyle?: InputStyle;
  whiteBG?: boolean;
  side?: 'left' | 'right';
}

export type WrapperStyle = Margin;

export const TextInput = styled.input<InputProps>`
  background: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.gray150)};
  border-radius: 10px;
  border: 1px solid
    ${({ isFocused, isError, theme }) =>
      isError ? theme.colors.red400 : isFocused ? theme.colors.blue400 : theme.colors.gray100};
  color: ${({ theme, isError }) => (isError ? theme.colors.red400 : theme.colors.gray500)};
  font-size: 14px;
  font-weight: 400;
  height: 52px;
  outline: none;
  padding: 12px;
  width: 100%;
  ${({ side }) => `padding-${side}: 45px`};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div<{ wrapperStyle?: WrapperStyle }>`
  flex: 1;
  position: relative;

  ${({ wrapperStyle }) => wrapperStyle && getMarginStyle('wrapperStyle')};
`;

export const IconButtonWrapper = styled.div<{
  whiteBG?: boolean;
  side?: string;
}>`
  ${({ side }) => `${side}: 15px`};
  position: absolute;
  ${({ theme }) => theme.templates.centerItems}
  top: 50%;
  transform: translatey(-50%);
  background-color: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.gray150)};
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
`;
