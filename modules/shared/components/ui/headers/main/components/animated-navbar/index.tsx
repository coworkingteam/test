import React from 'react';
// libs
import { Flipper } from 'react-flip-toolkit';
// components
import DropdownContainer from './components/dropdown-container';
import Navbar from '@md-ui/headers/main/components/animated-navbar/components/navbar';
import NavbarItem from '@md-ui/headers/main/components/animated-navbar/components/navbar/components/nav-bar-item';

interface Props {
  duration: number;
  isScroll: boolean;
  data: {
    title: string;
    dropdown: () => JSX.Element;
  }[];
}

const AnimatedNavbar: React.FC<Props> = ({ duration, isScroll, data }) => {
  const [animatingOutTimeout, setAnimatingOutTimeout] = React.useState<number | null>(null);

  const [state, setState] = React.useState<{ activeIndices: (number | undefined)[]; animatingOut: boolean }>({
    activeIndices: [],
    animatingOut: false
  });

  let CurrentDropdown: (() => JSX.Element) | null = null;
  let PrevDropdown: (() => JSX.Element) | null = null;
  let direction: 'right' | 'left' | undefined;

  const currentIndex = state.activeIndices[state.activeIndices.length - 1];
  const prevIndex = state.activeIndices.length > 1 && state.activeIndices[state.activeIndices.length - 2];

  if (typeof currentIndex === 'number') CurrentDropdown = data[currentIndex].dropdown;
  if (typeof prevIndex === 'number' && typeof currentIndex === 'number') {
    PrevDropdown = data[prevIndex].dropdown;
    direction = currentIndex > prevIndex ? 'right' : 'left';
  }

  const resetDropdownState = (i: number) => {
    setState({
      activeIndices: [i],
      animatingOut: false
    });

    setAnimatingOutTimeout(null);
  };

  const onMouseEnter = (i: number) => {
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

  return (
    <Flipper flipKey={currentIndex} spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}>
      <Navbar onMouseLeave={onMouseLeave}>
        {data.map((n, index) => (
          <NavbarItem isScroll={isScroll} key={n.title} title={n.title} index={index} onMouseEnter={onMouseEnter}>
            {currentIndex === index && (
              <DropdownContainer direction={direction} animatingOut={state.animatingOut} duration={duration}>
                {CurrentDropdown && <CurrentDropdown />}
                {PrevDropdown && <PrevDropdown />}
              </DropdownContainer>
            )}
          </NavbarItem>
        ))}
      </Navbar>
    </Flipper>
  );
};

export default AnimatedNavbar;
