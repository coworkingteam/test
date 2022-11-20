import * as React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// constants
import {
  menuItemsIndividual,
  menuItemsAdmission,
  menuItemsTransport,
  menuItemsRelatedBusiness
} from '@md-ui/headers/main/constants';
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
  LinkListWithoutBorder,
  LeftSide,
  Logo,
  RightSide
} from './views';

const Footer = () => (
  <Wrapper>
    <ContentWrapper>
      <InnerWrapper>
        <LeftSide>
          {(menuItemsIndividual.length || menuItemsAdmission.length) && (
            <MenuItemsWrapper>
              <Heading>
                <FormattedMessage id='menu.services.categories.individuals.title' />
              </Heading>

              <LinkList>
                {menuItemsIndividual.map(({ l, h }) => (
                  <MenuItem whiteColor key={h} href={h} label={l} />
                ))}

                {menuItemsAdmission.map(({ l, h }) => (
                  <MenuItem whiteColor key={h} href={h} label={l} />
                ))}
              </LinkList>
            </MenuItemsWrapper>
          )}

          {!!menuItemsTransport.length && (
            <MenuItemsWrapper>
              <Heading>
                <FormattedMessage id='menu.services.categories.transport.title' />
              </Heading>

              <LinkList>
                {menuItemsTransport.map(({ l, h }) => (
                  <MenuItem whiteColor key={h} href={h} label={l} />
                ))}
              </LinkList>
            </MenuItemsWrapper>
          )}

          {!!menuItemsRelatedBusiness.length && (
            <MenuItemsWrapper>
              <Heading>
                <FormattedMessage id='menu.services.categories.forBusiness.title' />
              </Heading>

              <LinkListWithoutBorder>
                {menuItemsRelatedBusiness.map(({ l, h }) => (
                  <MenuItem whiteColor key={h} href={h} label={l} />
                ))}
              </LinkListWithoutBorder>
            </MenuItemsWrapper>
          )}
        </LeftSide>

        <RightSide>
          <Logo src='/static/icons/big-static-logo.svg' alt='logo' />
        </RightSide>
      </InnerWrapper>

      <FAQWrapper>© aksis 2022</FAQWrapper>

      <FAQWrapper>
        BAGHEERA (R&K GROUP) SP. Z O.O. to firma, której branża została w Polskiej Klasyfikacji Działalności (PKD)
        sklasyfikowana jako: Działalność związana z wyszukiwaniem miejsc pracy i pozyskiwaniem pracowników. Powstała w
        2021 roku. Forma prawna firmy BAGHEERA (R&K GROUP) SP. Z O.O. to Spółka z ograniczoną odpowiedzialnością. Firma
        posiada numer NIP 7822895535, numer REGON 388431682 i KRS 0000889522, a jej siedziba mieści się pod adresem: Ul.
        Stanisława Małachowskiego 8/PI, 61-129 w Poznaniu, województwo Wielkopolskie. Z firmą BAGHEERA (R&K GROUP) SP. Z
        O.O. skontaktujesz się telefonicznie pod numerem +48 728 000 702. Odwiedź stronę internetową firmy BAGHEERA (R&K
        GROUP) SP. Z O.O., lub wyślij wiadomość na adres e-mail{' '}
        <a href='mailto:support@aksis.agency'>support@aksis.agency</a>
      </FAQWrapper>
    </ContentWrapper>
  </Wrapper>
);

export { Footer };
