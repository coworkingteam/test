import styled, { css } from 'styled-components';

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

  ${({ theme }) => theme.templates.centerContent}

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

export const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 16px;
  border-radius: 100%;

  ${({ theme }) => theme.templates.boxShadow}
`;

export const ChangeLanguageIcon = styled.img`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 100%;

  ${({ theme }) => theme.templates.boxShadow}
`;
