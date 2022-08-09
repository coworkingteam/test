import React from 'react';

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
