import { css } from 'styled-components';

export const linkPresets = {
  default: css`
    font-size: 18px;
    font-weight: 400;
  `,
  large: css`
    font-size: 22px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `,
  primary: css`
    font-size: 14px;
    font-weight: 500;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.blue400} !important;
  `
};

export type LinkPresets = keyof typeof linkPresets;
