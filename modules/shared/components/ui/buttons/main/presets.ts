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
  `,
  primary: css`
    width: 100%;
    background-color: unset;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.black600};

    border: 2px ${({ theme }) => theme.colors.black600} solid;
  `
};

export type ButtonPresets = keyof typeof buttonPresets;
