import * as React from 'react';
// components
import Link from 'next/link';
// libs
import styled from 'styled-components';

interface Props {
  href: string;
  label: string;
  isScroll?: boolean;
}

const MenuI = styled.div<{ isScroll?: boolean }>`
  padding: 5px 50px;
  font-size: 14px;

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    color: ${({ theme, isScroll }) => (isScroll ? theme.colors.black600 : theme.colors.white)};

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;

const MenuItem: React.FC<Props> = ({ href, label, isScroll }) => (
  <MenuI isScroll={isScroll}>
    <Link href={href} passHref>
      <a>{label}</a>
    </Link>
  </MenuI>
);

export { MenuItem };
