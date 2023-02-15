import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// types
import Slider from 'react-slick';
// hooks
import { useSlider } from '@md-modules/shared/hooks/slider';
// types
import { Service } from '@md-modules/shared/types/service';
// components
import LeftButton from '../../../../../../../public/static/icons/left-bottom';
import RightButton from '../../../../../../../public/static/icons/right-bottom';
import ServiceCard from '@md-modules/home/components/pages/ads-block/components/slider/components/service-card';
// views
import { ArrowButtonsWrapper, SliderWrapper, Title, Link, HeaderWrapper } from './views';

const SLIDER_SETTINGS = {
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
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
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
  const { locale } = useRouter();
  const sliderRef = React.useRef(null);
  const { prevSlide, nextSlide } = useSlider(sliderRef);

  return (
    <SliderWrapper>
      <HeaderWrapper>
        <Link href={`${locale}/menu/POPULAR`}>
          <Title>
            <FormattedMessage id='home.adsBlock.title' />
          </Title>
        </Link>

        <ArrowButtonsWrapper>
          <LeftButton onClick={prevSlide} />
          <RightButton onClick={nextSlide} />
        </ArrowButtonsWrapper>
      </HeaderWrapper>

      <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
        {data.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ServiceSlider;
