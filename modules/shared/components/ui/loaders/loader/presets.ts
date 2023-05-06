import { css } from 'styled-components';

export const loaderPresets = {
  large: css`
    width: 100%;
    height: 100%;
  `,
  small: css`
    width: 72px;
    height: 72px;
  `
};

export type LoaderPresets = keyof typeof loaderPresets;
