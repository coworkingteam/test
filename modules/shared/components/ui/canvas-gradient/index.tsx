import React from 'react';
// libs
import styled from 'styled-components';
// theme
import { colors } from '@md-styles/styled/theme';
// utils
import { Gradient } from '@md-utils/gradient';

export const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  position: absolute;

  --gradient-color-1: ${colors.yellow300};
  //--gradient-color-2: ${colors.green150};
  --gradient-color-3: ${colors.blue100};
  --gradient-color-4: ${colors.purple100};
`;

const CanvasGradient = () => {
  React.useLayoutEffect(() => {
    const gradient = new Gradient();

    gradient.initGradient('#gradient-canvas');
  });

  return <Canvas id='gradient-canvas' data-transition-in='' />;
};

export default CanvasGradient;
