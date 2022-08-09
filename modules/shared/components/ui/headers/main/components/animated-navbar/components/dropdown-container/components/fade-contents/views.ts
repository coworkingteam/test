import styled, { keyframes } from 'styled-components';

const getFadeContainerKeyFrame = ({ animatingOut, direction }: { direction?: string; animatingOut: boolean }) => {
  if (!direction) return;
  return keyframes`
  to {
    transform: translateX(0px);
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};
export const FadeContainer = styled.div<{
  direction?: string;
  duration: number;
  animatingOut: boolean;
}>`
  top: 0;
  left: 0;
  will-change: transform;
  animation-fill-mode: forwards;

  animation-name: ${getFadeContainerKeyFrame};
  animation-duration: ${({ duration }) => duration}ms;
  opacity: ${(props) => (props.direction && !props.animatingOut ? 0 : 1)};
`;
