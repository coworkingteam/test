import React from 'react';
// libs
import Collapsible from 'react-collapsible';
import { FormattedMessage } from 'react-intl';
// components
import Plus from 'public/static/icons/plus';
import Minus from 'public/static/icons/minus';
// views
import { AContent, ATitle, ATitleWrapper, Wrapper } from '@md-ui/accordion/components/accordion-item/views';

interface Props {
  title: string;
  content: string;
  blackTheme?: boolean;
}

const AccordionItem: React.FC<Props> = ({ title, blackTheme = false, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  const toggleAccordion = () => setIsActive((prevState) => !prevState);

  const trigger = React.useMemo(
    () => (
      <ATitleWrapper isActive={isActive} blackTheme={blackTheme}>
        <ATitle>
          <FormattedMessage id={title} />
        </ATitle>

        <ATitle>{isActive ? <Minus /> : <Plus />}</ATitle>
      </ATitleWrapper>
    ),
    [isActive, blackTheme, title]
  );

  return (
    <Wrapper isActive={isActive} blackTheme={blackTheme}>
      <Collapsible onOpening={toggleAccordion} onClosing={toggleAccordion} transitionTime={200} trigger={trigger}>
        <AContent>
          <FormattedMessage id={content} />
        </AContent>
      </Collapsible>
    </Wrapper>
  );
};

export default AccordionItem;
