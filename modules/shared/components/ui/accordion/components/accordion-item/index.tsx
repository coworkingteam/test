import React from 'react';
// components
import Plus from 'public/static/icons/plus';
import Minus from 'public/static/icons/minus';
// views
import { AContent, ATitle, ATitleWrapper, Wrapper } from '@md-ui/accordion/components/accordion-item/views';

interface Props {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
  blackTheme?: boolean;
  setIsActive: (id: string) => void;
}

const AccordionItem: React.FC<Props> = ({ title, blackTheme = false, content, isActive, id, setIsActive }) => {
  const onClick = () => setIsActive(id);

  return (
    <Wrapper blackTheme={blackTheme} isActive={isActive}>
      <ATitleWrapper blackTheme={blackTheme} isActive={isActive} onClick={onClick}>
        <ATitle>{title}</ATitle>

        <ATitle>{isActive ? <Minus /> : <Plus />}</ATitle>
      </ATitleWrapper>

      <AContent isActive={isActive}>{content}</AContent>
    </Wrapper>
  );
};

export default AccordionItem;
