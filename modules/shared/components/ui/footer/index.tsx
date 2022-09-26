import * as React from 'react';
// constants
import { menuItems } from '@md-ui/footer/constants';
// components
import { MenuItem } from '@md-ui/menu-item/main';
// views
import { Wrapper, ContentWrapper, FAQWrapper, InnerWrapper } from './views';

const Footer = () => (
  <Wrapper>
    <ContentWrapper>
      <InnerWrapper>
        {menuItems.map(({ l, h }, index) => (
          <MenuItem whiteColor key={index} href={h} label={l} />
        ))}
      </InnerWrapper>

      <FAQWrapper>Contrary to popular belief, Lorem Ipsum is not simply</FAQWrapper>
    </ContentWrapper>
  </Wrapper>
);

export { Footer };
