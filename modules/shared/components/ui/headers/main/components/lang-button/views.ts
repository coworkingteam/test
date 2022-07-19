import styled, { css } from 'styled-components';

export const LangTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid;
`;

export const ToolTipWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.black600};
`;

export const ToolTipItem = styled.p<{ isActive: boolean }>`
  margin: 0;
  padding: 14px;
  cursor: pointer;
  transition: background-color 0.2s linear;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.black600};
    background-color: ${({ theme }) => theme.colors.white};
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.black600};
      background-color: ${theme.colors.white};
    `}
`;
