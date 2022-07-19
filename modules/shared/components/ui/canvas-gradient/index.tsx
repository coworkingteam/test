import React from 'react';
// libs
import styled from 'styled-components';
// utils
import { Gradient } from '@md-utils/gradient';

export const Canvas = styled.canvas`
  width: 100vw;
  height: 100vh;
`;

const COLORS = [
  // '#f7c1a8',
  // '#cde8f7',
  // '#6aff91',
  // '#64a3ff',
  // '#b3d1ee',
  // '#bc8dcb',
  // '#ea9ab3',
  // '#f1e0d8',
  // '#cde8f7',
  // '#a87ae1',
  // '#db8284',
  // '#ffd07f',
  '#A676E2',
  '#F37A76',
  '#FFD080',
  '#9DD2EE'
];

const CanvasGradient = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const gradient = new Gradient(COLORS);

    gradient.initGradient(canvasRef.current);
  }, []);

  return <Canvas ref={canvasRef}></Canvas>;
};

export default CanvasGradient;
