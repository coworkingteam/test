import React from 'react';
// libs
import { Flipper } from 'react-flip-toolkit';
// components
import DropdownContainer from './components/DropdownContainer';
import Navbar from '@md-ui/headers/main/components/animated-navbar/components/navbar';
import NavbarItem from '@md-ui/headers/main/components/animated-navbar/components/navbar/components/nav-bar-item';

const AnimatedNavbar = ({ duration, isScroll, data }) => {
  const [animatingOutTimeout, setAnimatingOutTimeout] = React.useState(null);

  const [state, setState] = React.useState({
    activeIndices: [],
    animatingOut: false
  });

  const resetDropdownState = (i) => {
    setState({
      activeIndices: [i],
      animatingOut: false
    });

    setAnimatingOutTimeout(null);
  };

  const onMouseEnter = (i) => {
    if (animatingOutTimeout) {
      clearTimeout(animatingOutTimeout);

      resetDropdownState(i);
      return;
    }

    if (state.activeIndices[state.activeIndices.length - 1] === i) return;

    setState((prevState) => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false
    }));
  };

  const onMouseLeave = () => {
    setState((prevState) => ({
      ...prevState,
      animatingOut: true
    }));

    const animatingOutTimeout = setTimeout(resetDropdownState, duration);

    setAnimatingOutTimeout(animatingOutTimeout);
  };

  let CurrentDropdown;
  let PrevDropdown;
  let direction;

  const currentIndex = state.activeIndices[state.activeIndices.length - 1];
  const prevIndex = state.activeIndices.length > 1 && state.activeIndices[state.activeIndices.length - 2];

  if (typeof currentIndex === 'number') CurrentDropdown = data[currentIndex].dropdown;
  if (typeof prevIndex === 'number') {
    PrevDropdown = data[prevIndex].dropdown;
    direction = currentIndex > prevIndex ? 'right' : 'left';
  }

  return (
    <Flipper flipKey={currentIndex} spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}>
      <Navbar onMouseLeave={onMouseLeave}>
        {data.map((n, index) => {
          return (
            <NavbarItem isScroll={isScroll} key={n.title} title={n.title} index={index} onMouseEnter={onMouseEnter}>
              {currentIndex === index && (
                <DropdownContainer direction={direction} animatingOut={state.animatingOut} duration={duration}>
                  <CurrentDropdown />
                  {PrevDropdown && <PrevDropdown />}
                </DropdownContainer>
              )}
            </NavbarItem>
          );
        })}
      </Navbar>
    </Flipper>
  );
};

export default AnimatedNavbar;
