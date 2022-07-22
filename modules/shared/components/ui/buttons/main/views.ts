import styled, { css } from 'styled-components';
// local
import { Margin, Padding } from '@md-modules/shared/types/css';
import { ButtonPresets, buttonPresets } from './presets';
import { getMarginStyle, getPaddingStyle } from '@md-modules/shared/helpers/styled';

export interface WrapperStyle {
  height?: string;
  width?: string;
  backgroundColor?: string;
}

export type ButtonStyle = WrapperStyle & Margin & Padding;

export const Wrapper = styled.button<{
  buttonStyle?: ButtonStyle;
  preset?: ButtonPresets;
  isLoading: boolean;
  disabled: boolean;
  whiteBG?: boolean;
  withoutHoverAnimation?: boolean;
}>`
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  max-height: 60px;
  font-weight: 400;
  outline: none;
  padding: 14px 32px;
  position: relative;
  transition: all 0.2s linear;

  color: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.black600 : theme.colors.white)};

  &:hover {
    ${({ withoutHoverAnimation }) =>
      !withoutHoverAnimation &&
      css`
        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.2);
        transform: translate3d(0, -2px, 0);

        background: darken(${({ theme }) => theme.colors.red400}, 10%);
      `}
  }
    
    
    
  }

  &:active {
    opacity: 0.9;
  }

  ${({ theme }) => theme.templates.centerContent};
  ${({ preset }) => preset && buttonPresets[preset]};

  ${({ buttonStyle }) =>
    buttonStyle?.width &&
    css`
      width: ${buttonStyle.width};
    `};

  ${({ buttonStyle }) =>
    buttonStyle?.height &&
    css`
      height: ${buttonStyle.height};
    `};

  ${({ buttonStyle }) => buttonStyle && getPaddingStyle('buttonStyle')};
  ${({ buttonStyle }) => buttonStyle && getMarginStyle('buttonStyle')};

  ${({ whiteBG, theme }) =>
    whiteBG &&
    css`
      background-color: ${theme.colors.white};

      &:hover {
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css<{ grayBG?: boolean }>`
      background-color: ${({ theme }) => theme.colors.gray150};
    `}
  ${({ isLoading }) =>
    isLoading &&
    css`
      background-color: ${({ theme }) => theme.colors.gray150};
    `};
`;

export const InnerWrapper = styled.div`
  align-content: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LoaderWrapper = styled.div`
  & > div {
    height: 20px;
    width: 20px;
  }

  margin-left: 8px;
`;
