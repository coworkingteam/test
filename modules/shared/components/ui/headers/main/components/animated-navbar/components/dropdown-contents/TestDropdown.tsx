import React from 'react';

// views
import { DropdownSection, Heading, LinkList, Flex, DevelopersDropdownEl } from './views';

const TestDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Heading>Вопросы и ответы</Heading>

        <Flex>
          <LinkList>Test</LinkList>
        </Flex>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default TestDropdown;
