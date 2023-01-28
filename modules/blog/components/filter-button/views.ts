import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isActive: boolean; color?: string }>`
  font-weight: 400;
  font-size: 16px;
  padding: 8px 32px;
  cursor: pointer;
  margin: 0 10px;
  transition: box-shadow 0.2s linear, transform 0.2s linear, background 0.2s linear;

  &:hover {
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.black600};

    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transform: translate3d(0, -2px, 0);

    background: darken(${({ theme }) => theme.colors.red400}, 10%);
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-radius: 15px;
      border: 1px solid ${theme.colors.black600};
    `}
`;
