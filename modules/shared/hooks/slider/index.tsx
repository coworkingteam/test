import React from 'react';
import Slider from 'react-slick';

interface returnUseSlider {
  prevSlide: () => void;
  nextSlide: () => void;
}

export const useSlider = (sliderRef: { current: Slider } | React.MutableRefObject<null>): returnUseSlider => {
  const nextSlide = React.useCallback(() => {
    sliderRef && sliderRef.current && sliderRef.current.slickNext();
  }, []);
  const prevSlide = React.useCallback(() => {
    sliderRef && sliderRef.current && sliderRef.current.slickPrev();
  }, []);

  return {
    prevSlide,
    nextSlide
  };
};
