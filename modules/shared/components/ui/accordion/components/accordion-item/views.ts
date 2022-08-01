import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ blackTheme: boolean; isActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  transition: all 450ms;
  padding: 0 24px 32px 24px;

  color: ${({ theme, blackTheme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};

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

export const ATitleWrapper = styled.div<{ blackTheme: boolean }>`
  display: flex;
  cursor: pointer;
  padding-top: 32px;
  justify-content: space-between;

  border-top: 3px solid ${({ theme, blackTheme }) => (blackTheme ? theme.colors.black600 : theme.colors.white)};
`;

export const AContent = styled.p`
  font-size: 16px;
  line-height: 180%;
  margin: 16px 0 0 0;
  max-width: 1100px;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
