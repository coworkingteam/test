import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isScrolling: boolean; isActive?: boolean }>`
  z-index: 2;
  margin: 0;
  cursor: pointer;
  border-radius: 20px;

  overflow: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};

  ${({ isScrolling, theme }) =>
    isScrolling &&
    css`
      bottom: 40px;
      right: 20px;
      padding: 10px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      background-color: ${theme.colors.white};

      svg {
        path {
          fill: ${theme.colors.black600};
        }
      }
    `}

  position: ${({ isScrolling }) => (isScrolling ? 'fixed' : 'relative')};
`;

export const Title = styled.p<{ isScrolling: boolean }>`
  margin: 0;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  justify-content: center;

  color: ${({ theme, isScrolling }) => (isScrolling ? theme.colors.black600 : theme.colors.white)};
`;
