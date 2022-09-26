import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { Button } from '@md-ui/buttons/main';
import { MenuItem } from '@md-ui/menu-item/main';
// views
import { MenuWrapper, MWrapper, SWrapper } from '@md-ui/headers/main/components/mobile-menu/views';

// types
interface Props {
  data: { l: string; h: string }[];
}

const MobileMenu: React.FC<Props> = ({ data }) => {
  const { push } = useRouter();
  const onClickNumber = () => push('tel:+47 728 000 702');

  return (
    <MenuWrapper>
      <MWrapper>
        {data.map(({ l, h }) => (
          <MenuItem whiteColor key={l} href={h} label={l} />
        ))}
      </MWrapper>

      <SWrapper>
        <Button onClick={onClickNumber} whiteBG>
          +47 728 000 702
        </Button>
      </SWrapper>
    </MenuWrapper>
  );
};

export default MobileMenu;
