import React from 'react';
// components
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { DropdownSection, Heading, LinkList, Flex, DevelopersDropdownEl } from './views';
// constants
import { menuItemsRelatedHuman, menuItemsRelatedCar, menuItemsRelatedBusiness } from '@md-ui/headers/main/constants';

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Flex>
          <div>
            <Heading>Услуги</Heading>

            <LinkList>
              {menuItemsRelatedHuman.map(({ l, h }) => (
                <MenuItem isScroll key={l} href={h} label={l} />
              ))}
            </LinkList>
          </div>
          <div>
            <Heading>Услуги для машини</Heading>

            <LinkList>
              {menuItemsRelatedCar.map(({ l, h }) => (
                <MenuItem isScroll key={l} href={h} label={l} />
              ))}
            </LinkList>
          </div>
          <div>
            <Heading>Бизнес</Heading>

            <LinkList>
              {menuItemsRelatedBusiness.map(({ l, h }) => (
                <MenuItem isScroll key={l} href={h} label={l} />
              ))}
            </LinkList>
          </div>
        </Flex>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default DevelopersDropdown;
