import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Button } from '@md-ui/buttons/main';
// views
import {
  Image,
  Wrapper,
  Title,
  LeftSide,
  InnerWrapper
} from '@md-modules/shared/layouts/service/components/pages/welcome/views';

export interface WelcomeData {
  img?: string;
  titleID: string;
  button: {
    titleID: string;
    onClick?: () => void;
  };
}

interface Props {
  themeColor?: string;
  data: WelcomeData;
}

const Welcome: React.FC<Props> = ({ themeColor, data }) => {
  return (
    <Wrapper themeColor={themeColor}>
      <InnerWrapper>
        <LeftSide>
          <Title>
            <FormattedMessage id={data?.titleID} />
          </Title>
          <Button onClick={data?.button?.onClick}>
            <FormattedMessage id={data?.button?.titleID} />
          </Button>
        </LeftSide>

        <Image src={data?.img} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Welcome;
