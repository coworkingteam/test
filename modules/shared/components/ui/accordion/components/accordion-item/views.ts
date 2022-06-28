import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isActive: boolean; blackTheme: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  transition: all 650ms;

  color: ${({ theme, blackTheme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};
  padding: ${({ isActive }) => (isActive ? '24px 24px 32px 24px' : '0 24px')};

  svg {
    width: 26px;

    line {
      stroke: ${({ blackTheme, theme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};
    }
  }

  ${({ isActive, blackTheme, theme }) =>
    !isActive &&
    css`
      &:hover {
        color: ${blackTheme ? theme.colors.white : theme.colors.black600};
        background-color: ${blackTheme ? theme.colors.black600 : theme.colors.white};

        svg {
          line {
            stroke: ${blackTheme ? theme.colors.white : theme.colors.black600};
          }
        }
      }
    `}
`;

export const ATitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ATitleWrapper = styled.div<{ isActive: boolean; blackTheme: boolean }>`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  transition: max-height 650ms;

  padding: ${({ isActive }) => (isActive ? '32px 0 20px 0' : '32px 0 32px 0')};
  border-top: 3px solid ${({ theme, blackTheme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};
`;

export const AContent = styled.p<{ isActive: boolean }>`
  margin: 0;
  font-size: 16px;
  line-height: 180%;
  max-width: 1100px;
  transition: max-height 650ms;

  max-height: ${({ isActive }) => (isActive ? '20rem' : '0')};
  overflow: ${({ isActive }) => (isActive ? 'none' : 'hidden')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
