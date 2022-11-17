import React from 'react';
// libs
import Collapsible from 'react-collapsible';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
// components
import Plus from 'public/static/icons/plus';
import Minus from 'public/static/icons/minus';
// views
import { AContent, ATitle, ATitleWrapper, Wrapper } from '@md-ui/accordion/components/accordion-item/views';

interface Props {
  title: string | JSX.Element;
  open?: boolean;
  content: string | JSX.Element;
  blackTheme?: boolean;
}

const AccordionItem: React.FC<Props> = ({ title, blackTheme = false, open, content }) => {
  const [isActive, setIsActive] = React.useState(!!open);

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
      <Collapsible
        open={open}
        trigger={trigger}
        transitionTime={200}
        onOpening={toggleAccordion}
        onClosing={toggleAccordion}
      >
        <AContent>
          <FormattedHTMLMessage id={content} />
        </AContent>
      </Collapsible>
    </Wrapper>
  );
};

export default AccordionItem;
