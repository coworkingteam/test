import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// components
import { Button } from '@md-ui/buttons/main';
// views
import { Image, Wrapper, Title, LeftSide } from '@md-modules/shared/layouts/service/components/pages/welcome/views';

export interface WelcomeData {
  img?: string;
  title: string;
  button: {
    title: string;
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
      <LeftSide>
        <Title>
          <FormattedMessage id={data?.title} />
        </Title>
        <Button onClick={data?.button?.onClick}>
          <FormattedMessage id={data?.button?.title} />
        </Button>
      </LeftSide>

      <Image src={data?.img} />
    </Wrapper>
  );
};

export default Welcome;
