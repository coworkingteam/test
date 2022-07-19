import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // blue
  blue400: '#0070f3',
  // green
  green100: '#C8E6C9',
  green200: '#87cc43',
  // gray
  gray100: '#F5F5F5',
  gray150: '#f2f2f2',
  gray400: '#BEBEBE',
  gray500: '#6e6e6e',
  gray550: '#4d4d4d',
  gray600: '#191e2d',
  // yellow
  yellow400: '#FFD080',
  // red
  red400: '#F37A76',
  // other
  black600: '#212121',
  black800: '#161616',
  white: '#fff'
};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
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
