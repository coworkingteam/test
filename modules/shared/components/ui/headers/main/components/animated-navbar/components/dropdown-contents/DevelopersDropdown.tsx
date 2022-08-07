import React from 'react';
// components
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { DropdownSection, Heading, LinkList, Flex, DevelopersDropdownEl } from './views';
// constants
import { menuItems } from '@md-ui/headers/main/constants';

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Heading>Услуги</Heading>
        <Flex>
          <div>
            <LinkList>
              {menuItems.map(({ l, h }) => (
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
