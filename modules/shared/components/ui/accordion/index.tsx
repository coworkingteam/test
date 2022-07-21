import React from 'react';
// libs
import styled from 'styled-components';
// types
import { IAccordionItem } from '@md-modules/shared/types/accordion';
// components
import AccordionItem from '@md-ui/accordion/components/accordion-item';

interface Props {
  data: IAccordionItem[];
  blackTheme?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
`;

const Accordion: React.FC<Props> = ({ data, blackTheme }) => {
  const [activeItemId, setActiveItemId] = React.useState<string>();

  const onClickActive = (id: string) => setActiveItemId((prevState) => (prevState === id ? undefined : id));

  return (
    <Wrapper>
      {data.map((item) => (
        <AccordionItem
          {...item}
          key={item.id}
          blackTheme={blackTheme}
          setIsActive={onClickActive}
          isActive={activeItemId === item.id}
        />
      ))}
    </Wrapper>
  );
};

export default Accordion;
