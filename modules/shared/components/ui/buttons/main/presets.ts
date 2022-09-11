import { css } from 'styled-components';

export const buttonPresets = {
  default: css`
    background-color: ${({ theme }) => theme.colors.black600};
  `,
  large: css`
    height: 60px;
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.black600};
  `,
  link: css`
    background: none;
    text-decoration: underline;
  `
};

export type ButtonPresets = keyof typeof buttonPresets;
