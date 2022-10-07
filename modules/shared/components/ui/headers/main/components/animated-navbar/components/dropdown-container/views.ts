import styled from 'styled-components';
// helpers
import {
  getDropdownRootKeyFrame,
  getFadeContainerKeyFrame
} from '@md-ui/headers/main/components/animated-navbar/components/dropdown-container/helpers';

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
  opacity: ${({ direction, animatingOut }) => (direction && !animatingOut ? 0 : 1)};
`;

export const DropdownRoot = styled.div<{
  direction?: string;
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
  margin-top: 16px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  will-change: transform;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 30px 0;

  background: ${({ theme }) => theme.colors.white};
`;

export const AltBackground = styled.div<{ duration: number }>`
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;

  transition: transform ${({ duration }) => duration}ms;
`;

export const InvertedDiv = styled.div<{ absolute?: boolean }>`
  will-change: transform;
  top: 0;
  left: 0;

  position: ${({ absolute }) => (absolute ? 'absolute' : 'relative')};

  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`;
