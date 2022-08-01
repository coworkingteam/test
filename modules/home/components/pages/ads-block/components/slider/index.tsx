import React from 'react';
// types
import Slider from 'react-slick';
// hooks
import { useSlider } from '@md-modules/shared/hooks/slider';
// types
import { Service } from '@md-modules/shared/types/service';
// components
import ImageButton from '@md-ui/buttons/image-button';
import ServiceCard from '@md-modules/home/components/pages/ads-block/components/slider/components/service-card';
// views
import { ArrowButtonsWrapper, SliderWrapper, Title } from './views';

const sliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

interface Props {
  data: Service[];
}

const ServiceSlider: React.FC<Props> = ({ data }) => {
  const sliderRef = React.useRef(null);
  const { prevSlide, nextSlide } = useSlider(sliderRef);

  return (
    <SliderWrapper>
      <Title>Популярные Услуги</Title>

      <ArrowButtonsWrapper>
        <ImageButton size='medium' onClick={prevSlide} image='/static/icons/left-button.svg' />
        <ImageButton size='medium' onClick={nextSlide} image='/static/icons/right-button.svg' />
      </ArrowButtonsWrapper>

      <Slider ref={sliderRef} {...sliderSetting}>
        {data.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ServiceSlider;
