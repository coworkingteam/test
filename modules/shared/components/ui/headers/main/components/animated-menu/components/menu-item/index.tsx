import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// views
import {
  DropdownBackground,
  NavbarItemTitle,
  Wrapper
} from '@md-ui/headers/main/components/animated-menu/components/menu-item/views';

interface Props {
  text: string;
  activeColor?: string;
  isScroll: boolean;
}

const MenuItemVariants = {
  rest: {
    scale: 0,
    opacity: 0
  },
  hover: {
    x: 0,
    scale: 1,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
      type: 'spring',
      duration: 0.4,
      delayChildren: 0.2
    }
  }
};

const MenuItem: React.FC<Props> = ({ text, isScroll, activeColor, children }) => (
  <Wrapper initial='rest' whileHover='hover' animate='rest'>
    <NavbarItemTitle isScroll={isScroll}>
      <FormattedMessage id={text} />
    </NavbarItemTitle>

    <DropdownBackground activeColor={activeColor} isScroll={isScroll} variants={MenuItemVariants}>
      {children}
    </DropdownBackground>
  </Wrapper>
);

export default MenuItem;
