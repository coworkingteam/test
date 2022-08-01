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
`;
