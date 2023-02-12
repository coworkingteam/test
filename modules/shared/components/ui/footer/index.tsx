import * as React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// providers
import { MenuAPIContext } from '@md-modules/shared/providers/menu-provider';
// components
import { MenuItem } from '@md-ui/menu-item/main';
import ScrollToTopButton from '@md-ui/buttons/scroll-to-top';
// views
import {
  Wrapper,
  ContentWrapper,
  FAQWrapper,
  InnerWrapper,
  Heading,
  LinkList,
  MenuItemsWrapper,
  LeftSide,
  TextLogo,
  RightSide,
  SocialNetworkIcon,
  SocialNetworksWrapper,
  ScrollToTopWrapper
} from './views';

const Footer = () => {
  const { push } = useRouter();
  const { menuItems } = React.useContext(MenuAPIContext);

  const filteredMenuItems = menuItems.filter((item) => item.type !== 'POPULAR');

  return (
    <Wrapper>
      <ContentWrapper>
        <ScrollToTopWrapper>
          <ScrollToTopButton isScrolling={false} />
        </ScrollToTopWrapper>

        <InnerWrapper>
          <LeftSide>
            <TextLogo src='/static/icons/logo-text.svg' alt='logo-text' />
          </LeftSide>

          <RightSide>
            {filteredMenuItems.map((item, index) => (
              <MenuItemsWrapper key={item.type}>
                <Heading>
                  <FormattedMessage id={item.label} />
                </Heading>

                <LinkList>
                  {item.data.map((item) => (
                    <MenuItem whiteColor key={item.h} href={item.h} label={item.l} />
                  ))}
                </LinkList>

                {filteredMenuItems.length === index + 1 && (
                  <SocialNetworksWrapper>
                    <SocialNetworkIcon
                      alt='instagram'
                      src='/static/icons/instagram.svg'
                      onClick={() => push('https://www.instagram.com/aksis.agency/')}
                    />
                    <SocialNetworkIcon
                      alt='facebook'
                      src='/static/icons/facebook.svg'
                      onClick={() => push('https://m.me/aksis.agency?ref=w18286973')}
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
                )}
              </MenuItemsWrapper>
            ))}
          </RightSide>
        </InnerWrapper>

        <FAQWrapper>© aksis 2023</FAQWrapper>

        <FAQWrapper>
          BAGHEERA (R&K GROUP) SP. Z O.O. to firma, której branża została w Polskiej Klasyfikacji Działalności (PKD)
          sklasyfikowana jako: Działalność związana z wyszukiwaniem miejsc pracy i pozyskiwaniem pracowników. Powstała w
          2021 roku. Forma prawna firmy BAGHEERA (R&K GROUP) SP. Z O.O. to Spółka z ograniczoną odpowiedzialnością.
          Firma posiada numer NIP 7822895535, numer REGON 388431682 i KRS 0000889522, a jej siedziba mieści się pod
          adresem: Ul. Stanisława Małachowskiego 8/PI, 61-129 w Poznaniu, województwo Wielkopolskie. Z firmą BAGHEERA
          (R&K GROUP) SP. Z O.O. skontaktujesz się telefonicznie pod numerem +48 728 000 702. Odwiedź stronę internetową
          firmy BAGHEERA (R&K GROUP) SP. Z O.O., lub wyślij wiadomość na adres e-mail{' '}
          <a href='mailto:support@aksis.agency'>support@aksis.agency</a>
        </FAQWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export { Footer };
