import styled, { keyframes } from 'styled-components';

const getDropdownRootKeyFrame = ({ animatingOut, direction }: { direction: string; animatingOut: boolean }) => {
  if (!animatingOut && direction) return null;
  return keyframes`
  from {
    transform: ${animatingOut ? 'rotateX(0)' : 'rotateX(-15deg)'};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? 'rotateX(-15deg)' : 'rotateX(0)'};
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};

export const DropdownRoot = styled.div<{
  direction: string;
  duration: number;
  animatingOut: boolean;
}>`
  transform-origin: 0 0;
  will-change: transform;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;

  animation-name: ${getDropdownRootKeyFrame};
  animation-duration: ${({ duration }) => duration}ms;
`;

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  margin-top: 16px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  will-change: transform;
`;

export const AltBackground = styled.div<{ duration: number }>`
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform ${({ duration }) => duration}ms;
`;

export const InvertedDiv = styled.div<{ absolute: boolean }>`
  will-change: transform;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;

  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`;
