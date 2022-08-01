import styled, { css } from 'styled-components';

export const NavbarItemTitle = styled.div<{ isScroll: boolean }>`
  padding: 0 34px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  color: ${({ theme }) => theme.colors.black600};

  ${({ isScroll, theme }) =>
    isScroll
      ? css`
          &:hover {
            text-decoration: underline;
          }
        `
      : css`
          &:hover {
            color: ${theme.colors.white};
          }
        `}
`;

export const NavbarItemEl = styled.li`
  position: relative;
`;

export const DropdownSlot = styled.div<{ isScroll: boolean }>`
  position: absolute;
  left: 50%;
  margin-top: ${({ isScroll }) => (isScroll ? '40' : '20')}px;
  transform: translateX(-50%);
  perspective: 1500px;
`;
