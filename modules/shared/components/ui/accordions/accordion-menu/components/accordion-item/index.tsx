import React from 'react';
// libs
import Collapsible from 'react-collapsible';
import { FormattedMessage } from 'react-intl';
// types
import { IMenuAccordionItem } from '@md-ui/accordions/accordion-menu';
// components
import Arrow from 'public/static/icons/bottom-arrow';
// views
import {
  AContent,
  ATitle,
  ATitleWrapper,
  Wrapper,
  NavigationLink
} from '@md-ui/accordions/accordion-menu/components/accordion-item/views';

interface Props extends IMenuAccordionItem {
  blackTheme?: boolean;
  isOpen?: boolean;
}

const MenuAccordionItem: React.FC<Props> = ({ title, blackTheme = false, open, isOpen, content }) => {
  const [isActive, setIsActive] = React.useState(!!open);

  const toggleAccordion = () => setIsActive((prevState) => !prevState);

  const trigger = React.useMemo(
    () => (
      <ATitleWrapper isActive={isActive} blackTheme={blackTheme}>
        <ATitle>
          <FormattedMessage id={title} />
        </ATitle>

        <ATitle>
          <Arrow isActive={isActive} />
        </ATitle>
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
          {content.map(({ l, h }) => (
            <NavigationLink preset='mobileMenu' isOpen={!!isOpen} key={l} href={h}>
              <FormattedMessage id={l} />
            </NavigationLink>
          ))}
        </AContent>
      </Collapsible>
    </Wrapper>
  );
};

export default MenuAccordionItem;
