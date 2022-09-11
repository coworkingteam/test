import { createGlobalStyle } from 'styled-components';
import { colors } from '@md-styles/styled/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  body {
    font-family: 'Nagel', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    position: relative;
    font-size: 16px;
    
    color: ${colors.black600};
  }

  .sidebar-tooltip {
    margin: 0 !important;
    border: unset !important;
    background-color: unset !important;
    
    &:after {
      display: none;
    }
  }

  .ReactModal__Content {
    outline: none;
    outline-offset: unset;
  }

  .ReactModal__Overlay {
    opacity: 0;
    z-index: 999;
    transition: opacity 300ms ease-in-out;
    backdrop-filter: blur(8px);
    background: rgba(204, 204, 204, 0.7) !important;

  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .ReactModal__Content {
    outline: 0;
  }
`;
