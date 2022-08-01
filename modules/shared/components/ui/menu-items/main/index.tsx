import * as React from 'react';
// components
import Link from 'next/link';
// libs
import styled, { css } from 'styled-components';

interface Props {
  href: string;
  label: string;
  isScroll?: boolean;
  whiteColor?: boolean;
}

const MenuI = styled.div<{ isScroll?: boolean; whiteColor?: boolean }>`
  padding: 0 34px;
  font-size: 16px;

  a {
    text-decoration: none;
    transition: all 0.2s ease;

    color: ${({ theme, whiteColor }) => (whiteColor ? theme.colors.white : theme.colors.black600)};

    ${({ isScroll, theme, whiteColor }) =>
      isScroll && !whiteColor
        ? css`
            &:hover {
              text-decoration: underline;
            }
          `
        : css`
            &:hover {
              color: ${theme.colors.white};

              ${whiteColor && 'text-decoration: underline'};
            }
          `}
  }
`;

const MenuItem: React.FC<Props> = ({ href, label, isScroll, whiteColor }) => (
  <MenuI whiteColor={whiteColor} isScroll={isScroll}>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
  </MenuI>
);

export { MenuItem };
