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
  LinkListWithoutBorder
} from './views';

const Footer = () => (
  <Wrapper>
    <ContentWrapper>
      <InnerWrapper>
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
      </InnerWrapper>

      <FAQWrapper>© aksis 2022</FAQWrapper>

      <FAQWrapper>
        If you would like to find out more about which Revolut entity you receive services from, or if you have any
        other questions, please reach out to us via the in-app chat in the Revolut app. Revolut Ltd (No. 08804411) is
        authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 (Firm Reference
        900562). Registered address: 7 Westferry Circus, Canary Wharf, London, England, E14 4HD. Insurance
        related-products are arranged by Revolut Travel Ltd which is authorised by the Financial Conduct Authority to
        undertake insurance distribution activities (FCA No: 780586) and by Revolut Ltd, an Appointed Representative of
        Revolut Travel Ltd in relation to insurance distribution activities. Trading and investment products are
        provided by Revolut Trading Ltd (No. 832790) is wholly owned subsidiary of Revolut Ltd and is an appointed
        representative of Resolution Compliance Ltd which is authorised and regulated by the Financial Conduct
        Authority.
      </FAQWrapper>

      <FAQWrapper>
        Revolut's cryptocurrency service is not regulated by the FCA, other than for the purposes of money laundering.
        Revolut Ltd has been temporarily registered with the FCA as a cryptoasset business, pending determination of its
        application by the FCA.
      </FAQWrapper>

      <FAQWrapper>Revolut's commodities service is not regulated by the FCA.</FAQWrapper>
    </ContentWrapper>
  </Wrapper>
);

export { Footer };
