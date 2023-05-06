import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isActive: boolean; color?: string }>`
  font-weight: 400;
  font-size: 16px;
  padding: 8px 32px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 15px;
  transition: box-shadow 0.2s linear, transform 0.2s linear, background 0.2s linear;

  &:hover {
    transform: translate3d(0, -2px, 0);

    background: ${({ color }) => color};
    ${({ theme }) => theme.templates.boxShadow}
  }

  ${({ isActive, color }) =>
    isActive &&
    css`
      background: ${color};
    `}
`;
