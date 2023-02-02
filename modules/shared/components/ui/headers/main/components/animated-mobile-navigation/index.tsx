import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Logo } from '@md-ui/logos/main';
// views
import {
  Background,
  NavigationButton,
  NavigationIcon,
  NavigationLink,
  NavigationListWrapper,
  NavigationWrapper,
  Wrapper,
  LWrapper,
  ItemListWrapper,
  Icon,
  Title
} from '@md-ui/headers/main/components/animated-mobile-navigation/views';

interface Props {
  data: { l: string; h: string }[];
}

const AnimateMobileNav: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper>
      <NavigationButton onClick={toggleMenu} isOpen={isOpen}>
        <NavigationIcon isOpen={isOpen} />
      </NavigationButton>

      <Background isOpen={isOpen} />

      <NavigationWrapper isOpen={isOpen}>
        <NavigationListWrapper>
          <LWrapper>
            <Logo />
          </LWrapper>

          <Title>
            <FormattedMessage id='menu.services.title' />
            <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />
          </Title>

          <ItemListWrapper>
            {[{ h: '/blog', l: 'menu.questionsAndAnswers.title' }, ...data].map(({ l, h }) => (
              <NavigationLink preset='mobileMenu' isOpen={isOpen} key={l} href={h}>
                <FormattedMessage id={l} />
              </NavigationLink>
            ))}
          </ItemListWrapper>
        </NavigationListWrapper>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default AnimateMobileNav;
