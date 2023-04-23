import * as React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// providers
import { MenuAPIContext } from '@md-modules/shared/providers/menu-provider';
// components
import { MenuItem } from '@md-ui/menu-item/main';
import AccordionMenu from '@md-ui/accordions/accordion-menu';
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
  ScrollToTopWrapper,
  DesktopFooterMenuWrapper,
  MobileFooterMenuWrapper
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
            <MobileFooterMenuWrapper>
              <AccordionMenu
                data={filteredMenuItems.map((item) => ({ title: item.label, id: item.label, content: item.data }))}
              />
            </MobileFooterMenuWrapper>

            {filteredMenuItems.map((item, index) => (
              <MenuItemsWrapper key={item.type}>
                <DesktopFooterMenuWrapper>
                  <Heading>
                    <FormattedMessage id={item.label} />
                  </Heading>

                  <LinkList>
                    {item.data.map((item) => (
                      <MenuItem whiteColor key={item.h} href={item.h} label={item.l} />
                    ))}
                  </LinkList>
                </DesktopFooterMenuWrapper>

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
                )}
              </MenuItemsWrapper>
            ))}
          </RightSide>
        </InnerWrapper>

        <FAQWrapper>© aksis 2023</FAQWrapper>

        <FAQWrapper>
          <a href='mailto:support@aksis.agency'>support@aksis.agency</a>
        </FAQWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export { Footer };
