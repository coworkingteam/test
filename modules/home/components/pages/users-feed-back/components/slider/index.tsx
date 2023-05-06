import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// types
import Slider from 'react-slick';
// hooks
import { useSlider } from '@md-modules/shared/hooks/slider';
// components
import LeftButton from '../../../../../../../public/static/icons/left-bottom';
import RightButton from '../../../../../../../public/static/icons/right-bottom';
import Card from '@md-modules/home/components/pages/users-feed-back/components/slider/components/card';
// views
import { ArrowButtonsWrapper, SliderWrapper, Title, HeaderWrapper } from './views';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

interface Props {
  data: {
    avatar: string;
    name: string;
    text: string;
    date: string;
  }[];
}

const CommentsSlider: React.FC<Props> = ({ data }) => {
  const sliderRef = React.useRef(null);
  const { prevSlide, nextSlide } = useSlider(sliderRef);

  return (
    <SliderWrapper>
      <HeaderWrapper>
        <Title>
          <FormattedMessage id='home.usersFeedBack.title' />
        </Title>

        <ArrowButtonsWrapper>
          <LeftButton onClick={prevSlide} />
          <RightButton onClick={nextSlide} />
        </ArrowButtonsWrapper>
      </HeaderWrapper>

      <Slider ref={sliderRef} {...SLIDER_SETTINGS}>
        {data.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default CommentsSlider;
