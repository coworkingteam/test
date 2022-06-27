import * as React from 'react';
// constants
import { menuItems } from '@md-ui/footer/constants';
// components
import { MenuItem } from '@md-ui/menu-items/main';
// views
import { Wrapper, IWrapper, FAQWrapper } from './views';

const Footer = () => {
  return (
    <Wrapper>
      <IWrapper>
        {menuItems.map(({ l, h }) => (
          <MenuItem key={l} href={h} label={l} />
        ))}
      </IWrapper>

      <FAQWrapper>Contrary to popular belief, Lorem Ipsum is not simply</FAQWrapper>
    </Wrapper>
  );
};

export { Footer };
