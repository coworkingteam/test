import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { MenuWrapper, MWrapper, SWrapper } from '@md-ui/headers/main/components/mobile-menu/views';

// types
interface Props {
  data: { l: string; h: string }[];
}

const MobileMenu: React.FC<Props> = ({ data }) => (
  <MenuWrapper>
    <MWrapper>
      {data.map(({ l, h }) => (
        <MenuItem key={l} href={h} label={l} />
      ))}
    </MWrapper>

    <SWrapper>
      <Button whiteBG>+33 78 87 78 87</Button>
    </SWrapper>
  </MenuWrapper>
);

export default MobileMenu;
