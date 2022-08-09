import React from 'react';
// views
import { FadeContainer } from './views';

interface Props {
  duration: number;
  direction?: string;
  animatingOut: boolean;
}

const FadeContents: React.FC<Props> = ({ children, duration, animatingOut, direction }) => (
  <FadeContainer aria-hidden={animatingOut} animatingOut={animatingOut} direction={direction} duration={duration}>
    {children}
  </FadeContainer>
);

export default FadeContents;
