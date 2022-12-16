import React from 'react';
// libs
import Collapsible from 'react-collapsible';
// types
import { IContentfulAccordionItem } from '@md-types/accordion';
// utils
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// components
import Plus from 'public/static/icons/plus';
import Minus from 'public/static/icons/minus';
// views
import { AContent, ATitle, ATitleWrapper, Wrapper } from '@md-ui/accordions/accordion/components/accordion-item/views';

interface Props extends IContentfulAccordionItem {
  blackTheme?: boolean;
}

const AccordionItem: React.FC<Props> = ({ title, blackTheme = false, open, content }) => {
  const [isActive, setIsActive] = React.useState(!!open);

  const toggleAccordion = () => setIsActive((prevState) => !prevState);

  const trigger = React.useMemo(
    () => (
      <ATitleWrapper isActive={isActive} blackTheme={blackTheme}>
        <ATitle>{title}</ATitle>

        <ATitle>{isActive ? <Minus /> : <Plus />}</ATitle>
      </ATitleWrapper>
    ),
    [isActive, blackTheme, title]
  );

  if (!content || !title) {
    return null;
  }

  return (
    <Wrapper isActive={isActive} blackTheme={blackTheme}>
      <Collapsible
        open={open}
        trigger={trigger}
        transitionTime={200}
        onOpening={toggleAccordion}
        onClosing={toggleAccordion}
      >
        <AContent>{documentToReactComponents(content)}</AContent>
      </Collapsible>
    </Wrapper>
  );
};

export default AccordionItem;
