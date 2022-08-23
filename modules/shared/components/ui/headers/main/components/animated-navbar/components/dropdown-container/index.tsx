import React, { Children } from 'react';
// libs
import { Flipped } from 'react-flip-toolkit';
// helpers
import { updateAltBackground } from '@md-ui/headers/main/components/animated-navbar/components/dropdown-container/helpers';
// views
import {
  InvertedDiv,
  DropdownRoot,
  FadeContainer,
  AltBackground,
  DropdownBackground
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
                <FadeContainer direction={direction} duration={duration} animatingOut={animatingOut}>
                  {currentDropdown}
                </FadeContainer>
              </div>
            </InvertedDiv>
          </Flipped>

          <Flipped inverseFlipId='dropdown' scale>
            <InvertedDiv absolute>
              {prevDropdown && (
                <div ref={prevDropdownEl}>
                  <FadeContainer animatingOut direction={direction} duration={duration}>
                    {prevDropdown}
                  </FadeContainer>
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
