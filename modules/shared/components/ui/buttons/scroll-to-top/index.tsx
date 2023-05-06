import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import TopArrow from '../../../../../../public/static/icons/top-arrow';
// views
import { Title, Wrapper } from '@md-ui/buttons/scroll-to-top/views';

interface Props {
  isScrolling?: boolean;
}

const ScrollToTopButton: React.FC<Props> = ({ isScrolling }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 200) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClick = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  if (!isActive) {
    return null;
  }

  return (
    <Wrapper isScrolling={!!isScrolling} onClick={onClick}>
      <Title isScrolling={!!isScrolling}>
        <FormattedMessage id='buttons.scrollToTop' /> <TopArrow />
      </Title>
    </Wrapper>
  );
};

export default ScrollToTopButton;
