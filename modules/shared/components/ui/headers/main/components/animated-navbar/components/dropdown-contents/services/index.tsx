import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// views
import { DropdownSection, Heading, LinkList, Flex, DevelopersDropdownEl, Title, Icon } from '../views';
// constants
import {
  menuItemsIndividual,
  menuItemsPopular,
  menuItemsAdmission,
  menuItemsTransport,
  menuItemsRelatedBusiness
} from '@md-ui/headers/main/constants';
import { Link } from '@md-ui/link';
import { colors } from '@md-styles/styled/theme';
import SendArrow from '../../../../../../../../../../../public/static/icons/send-arrow';

const ServicesMenu = () => (
  <DevelopersDropdownEl>
    <DropdownSection data-first-dropdown-section>
      <Title>
        <FormattedMessage id='menu.services.title' />
        <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
      </Title>
      <Flex>
        <div>
          {!!menuItemsIndividual.length && (
            <>
              <Heading>
                <FormattedMessage id='menu.services.categories.individuals.title' />
              </Heading>

              <LinkList>
                {menuItemsIndividual.map(({ l, h }) => (
                  <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                    <FormattedMessage id={l} />
                    <SendArrow />
                  </Link>
                ))}
              </LinkList>
            </>
          )}

          {!!menuItemsPopular.length && (
            <>
              <Heading>
                <FormattedMessage id='menu.services.categories.popular.title' />
              </Heading>

              <LinkList>
                {menuItemsPopular.map(({ l, h }) => (
                  <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                    <FormattedMessage id={l} />
                    <SendArrow />
                  </Link>
                ))}
              </LinkList>
            </>
          )}
        </div>

        <div>
          {!!menuItemsAdmission.length && (
            <>
              <Heading>
                <FormattedMessage id='menu.services.categories.admission.title' />
              </Heading>

              <LinkList>
                {menuItemsAdmission.map(({ l, h }) => (
                  <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                    <FormattedMessage id={l} />
                    <SendArrow />
                  </Link>
                ))}
              </LinkList>
            </>
          )}

          {!!menuItemsRelatedBusiness.length && (
            <>
              <Heading>
                <FormattedMessage id='menu.services.categories.forBusiness.title' />
              </Heading>

              <LinkList>
                {menuItemsRelatedBusiness.map(({ l, h }) => (
                  <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                    <FormattedMessage id={l} />
                    <SendArrow />
                  </Link>
                ))}
              </LinkList>
            </>
          )}
        </div>

        <div>
          {!!menuItemsTransport.length && (
            <>
              <Heading>
                <FormattedMessage id='menu.services.categories.transport.title' />
              </Heading>

              <LinkList>
                {menuItemsTransport.map(({ l, h }) => (
                  <Link hoverColor={colors.white} hoverBGColor={colors.black600} preset='menuSmall' key={l} href={h}>
                    <FormattedMessage id={l} />
                    <SendArrow />
                  </Link>
                ))}
              </LinkList>
            </>
          )}
        </div>
      </Flex>
    </DropdownSection>
  </DevelopersDropdownEl>
);

export default ServicesMenu;
