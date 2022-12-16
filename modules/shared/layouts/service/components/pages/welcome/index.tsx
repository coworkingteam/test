import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
// views
import {
  Image,
  Wrapper,
  Title,
  LeftSide,
  InnerWrapper,
  StrafeButton,
  ArrowDown
} from '@md-modules/shared/layouts/service/components/pages/welcome/views';

export interface WelcomeData {
  img: {
    url: string;
    alt: string;
  };
  titleID: string;
  tabTitleID?: string;
  button: {
    titleID: string;
    onClick?: () => void;
  };
}

interface Props {
  themeColor?: string;
  data: WelcomeData;
  toggleModal: () => void;
}

const Welcome: React.FC<Props> = ({ themeColor, data, toggleModal }) => (
  <Wrapper themeColor={themeColor}>
    <InnerWrapper>
      <LeftSide>
        <Title>{data?.titleID}</Title>

        <Button preset='large' onClick={toggleModal}>
          {data?.button?.titleID}
        </Button>
      </LeftSide>

      <Image src={data?.img.url} alt={data?.img.alt} />
    </InnerWrapper>

    <StrafeButton to='hero' spy smooth offset={-100} duration={500} activeClass='active' themeColor={themeColor}>
      <ArrowDown src='/static/icons/arrow-down.svg' />
    </StrafeButton>
  </Wrapper>
);

export default Welcome;
