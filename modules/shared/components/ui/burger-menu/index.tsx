import * as React from 'react';
// libs
import styled from 'styled-components';
import { Props as MenuProps, slide as Menu } from 'react-burger-menu';
// static
import Plus from 'public/static/icons/plus';

//  types
type TMenuProps = Omit<MenuProps, 'right' | 'customBurgerIcon' | 'outerContainerId'>;

interface IBurgerMenu extends Partial<TMenuProps> {
  isRight: boolean;
  isOpen: boolean;
  pageWrapId: string;
}

// constants
export const CloseIconWrapper = styled.div`
  padding: 4px;
  transform: rotate(45deg);
`;
export const ROOT_DIV_ID = '__next';
export const CROSS_ICON = (
  <CloseIconWrapper>
    <Plus />
  </CloseIconWrapper>
);

const BurgerMenu: React.FC<IBurgerMenu> = ({
  children,
  isOpen,
  isRight,
  pageWrapId,
  customCrossIcon = CROSS_ICON,
  ...rest
}) => (
  <Menu
    isOpen={isOpen}
    pageWrapId={pageWrapId}
    outerContainerId={ROOT_DIV_ID}
    customBurgerIcon={false}
    customCrossIcon={customCrossIcon}
    right={isRight}
    {...rest}
  >
    {children}
  </Menu>
);

export default BurgerMenu;
