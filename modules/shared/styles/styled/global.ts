import { createGlobalStyle } from 'styled-components';

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
  }

  .rbc-time-view .rbc-time-view-resources {
    width: 95vw
  }

  .sidebar-tooltip {
    opacity: 1 !important;
  }

  .rbc-time-content > .rbc-time-gutter {
    display: none;
  }

  .rbc-label {
    display: none;
  }

  .ProseMirror {
    min-height: 90%;
    outline: none;
    outline-offset: unset;
    padding: 15px 5px;

    p, h1, h2, h3 {
      margin: 0 !important;
    }
  }
`;
