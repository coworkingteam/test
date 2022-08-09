import React from 'react';
// libs
import { Wrapper, InnerWrapper } from '@md-ui/headers/main/components/animated-navbar/components/navbar/views';

interface Props {
  onMouseLeave: () => void;
}

const Navbar: React.FC<Props> = ({ children, onMouseLeave }) => (
  <Wrapper onMouseLeave={onMouseLeave}>
    <InnerWrapper>{children}</InnerWrapper>
  </Wrapper>
);

export default Navbar;
