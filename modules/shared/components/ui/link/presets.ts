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
  menu: css`
    padding: 8px 0;
    font-size: 22px;
    font-weight: 700;
    border-radius: 10px;
    transition: all 250ms ease;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    &:hover {
      padding: 8px 20px;
      color: ${({ theme }) => theme.colors.white} !important;
      background: ${({ theme }) => theme.colors.black600};
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
