import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import Link from 'next/link';
// libs
import styled, { css } from 'styled-components';
import { FormattedMessage } from 'react-intl';

interface Props {
  href: string;
  label: string;
  isScroll?: boolean;
  whiteColor?: boolean;
}

const MenuI = styled.div<{ isScroll?: boolean; whiteColor?: boolean; isActive: boolean }>`
  padding: 0 34px;
  font-size: 16px;

  a {
    text-decoration: none;
    transition: all 0.2s ease;

    color: ${({ theme, whiteColor }) => (whiteColor ? theme.colors.gray160 : theme.colors.black600)};

    ${({ isScroll, theme, isActive, whiteColor }) => {
      if (isActive) {
        if (isScroll && whiteColor) {
          return css`
            color: ${theme.colors.white};
          `;
        }

        if (isScroll && !whiteColor) {
          return css`
            text-decoration: underline;
          `;
        }

        if (whiteColor) {
          return css`
            color: ${theme.colors.white};
          `;
        }

        return css`
          text-decoration: underline;
          color: ${theme.colors.black600};
        `;
      }
    }}

    ${({ isScroll, theme, whiteColor }) => {
      if (isScroll && !whiteColor) {
        return css`
          &:hover {
            text-decoration: underline;
          }
        `;
      }

      if (whiteColor) {
        return css`
          &:hover {
            text-decoration: underline;
          }
        `;
      }

      return css`
        &:hover {
          color: ${theme.colors.white};
        }
      `;
    }}
  }
`;

const MenuItem: React.FC<Props> = ({ href, label, isScroll, whiteColor }) => {
  const { pathname } = useRouter();

  const isActive = pathname.includes(href);

  return (
    <MenuI isActive={isActive} whiteColor={whiteColor} isScroll={isScroll}>
      <Link href={href} passHref>
        <a>
          <FormattedMessage id={label} />
        </a>
      </Link>
    </MenuI>
  );
};

export { MenuItem };
