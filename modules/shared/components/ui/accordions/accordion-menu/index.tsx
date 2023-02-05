import React from 'react';
// libs
import styled from 'styled-components';
// types
import { IMenuAccordionItem } from '@md-types/accordion';
// components
import MenuAccordionItem from '@md-ui/accordions/accordion-menu/components/accordion-item';

interface Props {
  isOpen?: boolean;
  data: IMenuAccordionItem[];
  blackTheme?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
`;

const AccordionMenu: React.FC<Props> = ({ data, isOpen, blackTheme }) => (
  <Wrapper>
    {data.map((item) => (
      <MenuAccordionItem isOpen={isOpen} {...item} key={item.id} blackTheme={blackTheme} />
    ))}
  </Wrapper>
);

export default AccordionMenu;
