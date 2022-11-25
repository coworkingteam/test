import React from 'react';
// libs
import Slider, { Settings } from 'react-slick';
// css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// views
import {
  DotInnerWrapper,
  DotWrapper,
  Dot
} from '@md-modules/shared/layouts/service/components/pages/short-description/components/slider/views';

const SliderComponent: React.FC = ({ children }) => {
  const sliderRef = React.useRef<Slider | null>(null);

  const SLIDER_SETTINGS: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots: React.ReactElement[]) => (
      <DotWrapper>
        <DotInnerWrapper>
          {dots.map((item, index) => (
            <Dot
              key={index}
              isActive={!!item.props.className}
              onClick={() => sliderRef && sliderRef.current?.slickGoTo(index)}
            />
          ))}
        </DotInnerWrapper>
      </DotWrapper>
    )
  };

  return (
    <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
      {children}
    </Slider>
  );
};

export default SliderComponent;
