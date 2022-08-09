import React, { Children } from 'react';
// libs
import { Flipped } from 'react-flip-toolkit';
// components
import FadeContents from '@md-ui/headers/main/components/animated-navbar/components/dropdown-container/components/fade-contents';
// helpers
import { updateAltBackground } from '@md-ui/headers/main/components/animated-navbar/components/dropdown-container/helpers';
// views
import {
  AltBackground,
  DropdownBackground,
  DropdownRoot,
  InvertedDiv
} from '@md-ui/headers/main/components/animated-navbar/components/dropdown-container/views';

interface Props {
  duration: number;
  direction?: string;
  animatingOut: boolean;
}

const DropdownContainer: React.FC<Props> = ({ children, direction, animatingOut, duration }) => {
  const currentDropdownEl = React.useRef(null);
  const prevDropdownEl = React.useRef(null);
  const altBackgroundEl = React.useRef(null);
  const [currentDropdown, prevDropdown] = Children.toArray(children);

  React.useEffect(() => {
    updateAltBackground({
      altBackground: altBackgroundEl,
      prevDropdown: prevDropdownEl,
      currentDropdown: currentDropdownEl
    });
  }, []);

  return (
    <DropdownRoot direction={direction} animatingOut={animatingOut} duration={duration}>
      <Flipped flipId='dropdown'>
        <DropdownBackground>
          <Flipped inverseFlipId='dropdown'>
            <InvertedDiv>
              <AltBackground ref={altBackgroundEl} duration={duration} />
              <div ref={currentDropdownEl}>
                <FadeContents direction={direction} duration={duration} animatingOut={animatingOut}>
                  {currentDropdown}
                </FadeContents>
              </div>
            </InvertedDiv>
          </Flipped>

          <Flipped inverseFlipId='dropdown' scale>
            <InvertedDiv absolute>
              {prevDropdown && (
                <div ref={prevDropdownEl}>
                  <FadeContents animatingOut direction={direction} duration={duration}>
                    {prevDropdown}
                  </FadeContents>
                </div>
              )}
            </InvertedDiv>
          </Flipped>
        </DropdownBackground>
      </Flipped>
    </DropdownRoot>
  );
};

export default DropdownContainer;
