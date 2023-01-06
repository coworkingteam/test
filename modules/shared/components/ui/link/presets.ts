import { css } from 'styled-components';

export const linkPresets = {
  default: css`
    font-size: 18px;
    font-weight: 400;
  `,
  large: css`
    font-size: 22px;
    font-weight: 700;
    text-decoration: underline;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `,
  menu: css<{ hoverBGColor?: string; hoverColor?: string; isActive: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 14px 24px;
    font-size: 26px;
    border-radius: 10px;
    line-height: 36px;
    transition: all 250ms ease-in-out;
    margin-bottom: 38px;
    text-decoration: none !important;

    background: ${({ theme }) => theme.colors.white};

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      background: ${({ theme, hoverBGColor }) => hoverBGColor || theme.colors.black600};
      color: ${({ theme, hoverColor }) => hoverColor || theme.colors.white};
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `,
  menuSmall: css<{ hoverBGColor?: string; hoverColor?: string; isActive: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 6px;
    margin: 4px 0;
    transition: all 250ms ease;

    svg {
      width: 16px;
      margin-left: 10px;
      opacity: 0;
    }

    &:hover {
      text-decoration: none !important;

      background: ${({ theme, hoverBGColor }) => hoverBGColor || theme.colors.black600};
      color: ${({ theme, hoverColor }) => hoverColor || theme.colors.white};

      svg {
        opacity: 1;

        path {
          fill: ${({ theme, hoverColor }) => hoverColor || theme.colors.white};
        }
      }
    }

    ${({ isActive, hoverBGColor, hoverColor, theme }) =>
      isActive &&
      css`
        text-decoration: none !important;

        background: ${hoverBGColor || theme.colors.black600};
        color: ${hoverColor || theme.colors.white};

        svg {
          opacity: 1;

          path {
            fill: ${hoverColor || theme.colors.white};
          }
        }
      `}
  `,
  primary: css`
    font-size: 14px;
    font-weight: 500;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.blue400} !important;
  `
};

export type LinkPresets = keyof typeof linkPresets;
