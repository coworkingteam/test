import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { DropdownSection, Heading, LinkList, Flex, DevelopersDropdownEl } from '../views';
// constants
import { menuItemsRelatedHuman, menuItemsRelatedCar, menuItemsRelatedBusiness } from '@md-ui/headers/main/constants';

const ServicesMenu = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Flex>
          <div>
            <Heading>
              <FormattedMessage id='menu.services.title' />
            </Heading>

            <LinkList>
              {menuItemsRelatedHuman.map(({ l, h }) => (
                <MenuItem isScroll key={l} href={h} label={l} />
              ))}
            </LinkList>

            <Heading>
              <FormattedMessage id='menu.services.categories.forBusiness.title' />
            </Heading>

            <LinkList>
              {menuItemsRelatedBusiness.map(({ l, h }) => (
                <MenuItem isScroll key={l} href={h} label={l} />
              ))}
            </LinkList>
          </div>
          <div>
            <Heading>
              <FormattedMessage id='menu.services.categories.servicesForDrivers.title' />
            </Heading>

            <LinkList>
              {menuItemsRelatedCar.map(({ l, h }) => (
                <MenuItem isScroll key={l} href={h} label={l} />
              ))}
            </LinkList>
          </div>
        </Flex>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default ServicesMenu;
