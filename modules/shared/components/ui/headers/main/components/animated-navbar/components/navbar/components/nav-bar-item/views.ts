import styled, { css } from 'styled-components';

export const DropdownSlot = styled.div<{ isScroll: boolean }>`
  position: absolute;
  left: 50%;
  margin-top: 8px;
  transform: translateX(-50%);
  perspective: 1500px;
`;

export const NavbarItemTitle = styled.p<{ isScroll: boolean }>`
  margin: 0;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  color: ${({ theme }) => theme.colors.black600};
  padding: ${({ isScroll }) => (isScroll ? '30px 34px' : '14px 34px')};
`;

export const NavbarItemEl = styled.li<{ isScroll: boolean }>`
  position: relative;

  &:hover {
    > p {
      ${({ isScroll, theme }) =>
        isScroll
          ? css`
              text-decoration: underline !important;
            `
          : css`
              color: ${theme.colors.white} !important;
            `}
    }
  }
`;
