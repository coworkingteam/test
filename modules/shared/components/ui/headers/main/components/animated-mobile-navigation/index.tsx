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
  SocialNetworksWrapper,
  Title,
  ContactsButton
} from '@md-ui/headers/main/components/animated-mobile-navigation/views';
import { SocialNetworkIcon } from '@md-ui/footer/views';
import { NavigationLink } from '@md-ui/accordions/accordion-menu/components/accordion-item/views';
import LangButton from '@md-ui/headers/main/components/lang-button';
import { LangAPIContext } from '@md-modules/shared/i18n/providers/main';
import { Locales } from '@md-modules/shared/i18n/providers/main/locales';

interface Props {
  menuData: IMenuItem[];
}

const AnimateMobileNav: React.FC<Props> = ({ menuData }) => {
  const { push } = useRouter();
  const { setLocale, locale } = React.useContext(LangAPIContext);
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
  const onChangeLocale = (value: Locales) => setLocale(value);
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

          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0 0 0' }}
          >
            <LangButton activeLang={locale} onSelectLang={onChangeLocale} />

            <ContactsButton onClick={onClickNumber}>
              <p>+34 633 872 870</p>
              <FormattedMessage id='buttons.contactUs' />
            </ContactsButton>
          </div>

          <SocialNetworksWrapper>
            <SocialNetworkIcon
              alt='instagram'
              src='/static/icons/instagram.svg'
              onClick={() => push('https://www.instagram.com/aksis.agency/')}
            />
            <SocialNetworkIcon
              alt='facebook'
              src='/static/icons/facebook.svg'
              onClick={() => push('https://www.facebook.com/aksis.agency/')}
            />
            <SocialNetworkIcon
              alt='twitter'
              src='/static/icons/twitter.svg'
              onClick={() => push('https://twitter.com/aksisagency')}
            />
            <SocialNetworkIcon
              alt='tik-tok'
              src='/static/icons/tik-tok.svg'
              onClick={() => push('https://www.tiktok.com/@aksis.agency')}
            />
            <SocialNetworkIcon
              alt='linkedin'
              src='/static/icons/linkedin.svg'
              onClick={() => push('https://www.linkedin.com/company/aksis-agency-consulting-tax-audit/')}
            />
          </SocialNetworksWrapper>
        </NavigationListWrapper>
      </NavigationWrapper>
    </Wrapper>
  );
};

export default AnimateMobileNav;
