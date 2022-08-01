import React from 'react';
// libs
import styled from 'styled-components';
// utils
import { Gradient } from '@md-utils/gradient';

// const COLORS = ['#A676E2', '#F37A76', '#FFD080', '#9DD2EE'];

export const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  position: absolute;

  --gradient-color-1: #a676e2;
  --gradient-color-2: #ffd080;
  --gradient-color-3: #f37a76;
  --gradient-color-4: #9dd2ee;
`;

const CanvasGradient = () => {
  React.useLayoutEffect(() => {
    const gradient = new Gradient();

    gradient.initGradient('#gradient-canvas');
  });

  return <Canvas id='gradient-canvas' data-transition-in='' />;
};

export default CanvasGradient;
