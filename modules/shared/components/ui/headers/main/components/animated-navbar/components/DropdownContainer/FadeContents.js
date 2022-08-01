import React, { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';

const getFadeContainerKeyFrame = ({ animatingOut, direction }) => {
  if (!direction) return;
  return keyframes`
  to {
    transform: translateX(0px);
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};
const FadeContainer = styled.div`
  top: 0;
  left: 0;
  will-change: transform;
  animation-fill-mode: forwards;

  animation-name: ${getFadeContainerKeyFrame};
  animation-duration: ${(props) => props.duration}ms;
  opacity: ${(props) => (props.direction && !props.animatingOut ? 0 : 1)};
`;

const FadeContents = forwardRef(({ children, duration, animatingOut, direction }, ref) => (
  <FadeContainer
    // prevent screen readers from reading out hidden content
    aria-hidden={animatingOut}
    animatingOut={animatingOut}
    direction={direction}
    duration={duration}
    ref={ref}
  >
    {children}
  </FadeContainer>
));

export default FadeContents;
