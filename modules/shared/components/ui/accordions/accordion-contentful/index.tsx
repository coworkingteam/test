import React from 'react';
// libs
import styled from 'styled-components';
// types
import { IContentfulAccordionItem } from '@md-types/accordion';
// components
import AccordionItem from '@md-ui/accordions/accordion-contentful/components/accordion-item';

interface Props {
  data: IContentfulAccordionItem[];
  blackTheme?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
`;

const Accordion: React.FC<Props> = ({ data, blackTheme }) => (
  <Wrapper>
    {data.map((item) => (
      <AccordionItem {...item} key={item.id} blackTheme={blackTheme} />
    ))}
  </Wrapper>
);

export default Accordion;
