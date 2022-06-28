import React from 'react';
// components
import { MenuItem } from '@md-ui/menu-items/main';
import { Button } from '@md-ui/buttons/main';
// views
import { MenuWrapper, RWrapper } from '@md-ui/headers/main/components/mobile-menu/views';

interface Props {
  data: { l: string; h: string }[];
}

const MobileMenu: React.FC<Props> = ({ data }) => (
  <MenuWrapper>
    <RWrapper>
      {data.map(({ l, h }) => (
        <MenuItem key={l} href={h} label={l} />
      ))}
    </RWrapper>

    <Button whiteBG>+33 78 87 78 87</Button>
  </MenuWrapper>
);

export default MobileMenu;
