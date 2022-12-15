import * as React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// providers
import { MenuAPIContext } from '@md-modules/shared/providers/menu-provider';
// components
import { MenuItem } from '@md-ui/menu-item/main';
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
  Logo,
  RightSide
} from './views';

const Footer = () => {
  const { menuItems } = React.useContext(MenuAPIContext);

  const filteredMenuItems = menuItems.filter((item) => item.type !== 'POPULAR');

  return (
    <Wrapper>
      <ContentWrapper>
        <InnerWrapper>
          <LeftSide>
            {filteredMenuItems.map((item) => (
              <MenuItemsWrapper key={item.type}>
                <Heading>
                  <FormattedMessage id={item.label} />
                </Heading>

                <LinkList>
                  {item.data.map((item) => (
                    <MenuItem whiteColor key={item.h} href={item.h} label={item.l} />
                  ))}
                </LinkList>
              </MenuItemsWrapper>
            ))}
          </LeftSide>

          <RightSide>
            <Logo src='/static/icons/big-static-logo.svg' alt='logo' />
          </RightSide>
        </InnerWrapper>

        <FAQWrapper>© aksis 2022</FAQWrapper>

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
