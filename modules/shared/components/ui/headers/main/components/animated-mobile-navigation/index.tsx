import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Logo } from '@md-ui/logos/main';
import AccordionMenu from '@md-ui/accordions/accordion-menu';
import { IMenuItem } from '@md-modules/shared/providers/menu-provider';
// views
import {
  Background,
  NavigationButton,
  NavigationIcon,
  NavigationListWrapper,
  NavigationWrapper,
  Wrapper,
  LWrapper,
  ItemListWrapper,
  Icon,
  Title,
  ContactsButton
} from '@md-ui/headers/main/components/animated-mobile-navigation/views';
import { NavigationLink } from '@md-ui/accordions/accordion-menu/components/accordion-item/views';

interface Props {
  menuData: IMenuItem[];
}

const AnimateMobileNav: React.FC<Props> = ({ menuData }) => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const onClickNumber = () => push('tel:+34 633 872 870');
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
            <NavigationLink preset='mobileMenu' isOpen={isOpen} key='/blog' href='/blog'>
              <FormattedMessage id='menu.questionsAndAnswers.title' />
            </NavigationLink>

            <AccordionMenu
              isOpen={isOpen}
              data={menuData.map((item) => ({ title: item.label, id: item.label, content: item.data }))}
            />
          </ItemListWrapper>

          <ContactsButton onClick={onClickNumber}>
            <p>+34 633 872 870</p>
            <p>Бесплатно по Испании</p>
          </ContactsButton>
        </NavigationListWrapper>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default AnimateMobileNav;
