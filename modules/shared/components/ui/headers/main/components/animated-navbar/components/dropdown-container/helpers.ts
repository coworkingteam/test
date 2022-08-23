import React from 'react';
import { keyframes } from 'styled-components';

const getFirstDropdownSectionHeight = (el: React.RefObject<HTMLDivElement>) => {
  if (!el || !el.current?.querySelector || !el.current?.querySelector('*[data-first-dropdown-section]')) return 0;

  return el.current.querySelector('*[data-first-dropdown-section]')?.scrollHeight;
};

export const updateAltBackground = ({
  altBackground,
  prevDropdown,
  currentDropdown
}: {
  altBackground: React.RefObject<HTMLDivElement>;
  prevDropdown: React.RefObject<HTMLDivElement>;
  currentDropdown: React.RefObject<HTMLDivElement>;
}) => {
  const prevHeight = getFirstDropdownSectionHeight(prevDropdown);
  const currentHeight = getFirstDropdownSectionHeight(currentDropdown);

  const immediateSetTranslateY = (el: React.RefObject<HTMLDivElement>, translateY?: number) => {
    el.current?.style.setProperty('transform', `translateY(${translateY}px)`);
    el.current?.style.setProperty('transition', 'transform 0s');

    requestAnimationFrame(() => el.current?.style.setProperty('transitionDuration', ''));
  };

  if (prevHeight) {
    // transition the grey ("alt") background from its previous height to its current height
    immediateSetTranslateY(altBackground, prevHeight);
    requestAnimationFrame(() => {
      altBackground.current?.style.setProperty('transform', `translateY(${currentHeight}px)`);
    });
  } else {
    // just immediately set the background to the appropriate height
    // since we don't have a stored value
    immediateSetTranslateY(altBackground, currentHeight);
  }
};

export const getDropdownRootKeyFrame = ({ animatingOut, direction }: { direction?: string; animatingOut: boolean }) => {
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

export const getFadeContainerKeyFrame = ({
  animatingOut,
  direction
}: {
  direction?: string;
  animatingOut: boolean;
}) => {
  if (!direction) return;
  return keyframes`
  to {
    transform: translateX(0px);
    opacity: ${animatingOut ? 0 : 1};
  }
`;
};
