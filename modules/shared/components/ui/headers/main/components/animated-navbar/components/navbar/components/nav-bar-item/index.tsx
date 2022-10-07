import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// views
import {
  NavbarItemTitle,
  NavbarItemEl,
  DropdownSlot
} from '@md-ui/headers/main/components/animated-navbar/components/navbar/components/nav-bar-item/views';

interface Props {
  title: string;
  index: number;
  isScroll: boolean;
  onMouseEnter: (index: number) => void;
}

const NavbarItem: React.FC<Props> = ({ children, title, isScroll, index, onMouseEnter }) => {
  const onMouseEnterEvent = () => onMouseEnter(index);

  return (
    <NavbarItemEl isScroll={isScroll} onMouseEnter={onMouseEnterEvent} onFocus={onMouseEnterEvent}>
      <NavbarItemTitle isScroll={isScroll}>
        <FormattedMessage id={title} />
      </NavbarItemTitle>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  );
};

export default NavbarItem;
