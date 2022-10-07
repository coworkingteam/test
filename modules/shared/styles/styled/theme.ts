import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // purple
  purple100: '#D0C6FD',
  // blue
  blue100: '#93CBFF',
  blue400: '#0070f3',
  // green
  green100: '#C8E6C9',
  green150: '#A3F1CB',
  green200: '#87cc43',
  // gray
  gray100: '#F5F5F5',
  gray150: '#f2f2f2',
  gray400: '#BEBEBE',
  gray500: '#6e6e6e',
  gray550: '#4d4d4d',
  gray560: '#2121214d',
  gray600: '#191e2d',
  // yellow
  yellow300: '#FFECB3',
  yellow400: '#FFD080',
  yellow600: '#FFDA44',
  // red
  red400: '#F37A76',
  // other
  black600: '#212121',
  black800: '#161616',
  white: '#fff',
  black: '#000'
};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  boxShadow: css`
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 50px;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `,
  ellipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  dynamicFont: (s: { minSize: number; maxSize: number; minViewport: number; maxViewport: number }) => css`
    font-size: ${() =>
      `calc(${s.minSize}px + (${s.maxSize} - ${s.minSize}) * (100vw - ${s.minViewport}px) / (${s.maxViewport} - ${s.minViewport}))`};
  `
};

export const dimensions = {
  pageMaxWidth: 1071
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions
};
