import React from 'react';
// libs
import styled from 'styled-components';

// styled
const NavbarEl = styled.nav`
  margin: auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

// types
interface Props {
  onMouseLeave: () => void;
}

const Navbar: React.FC<Props> = ({ children, onMouseLeave }) => (
  <NavbarEl onMouseLeave={onMouseLeave}>
    <NavbarList>{children}</NavbarList>
  </NavbarEl>
);

export default Navbar;
