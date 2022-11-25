import React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Button } from '@md-ui/buttons/main';
// views
import {
  InnerWrapper,
  SubName,
  Wrapper,
  LeftSideWrapper,
  ServiceName,
  Image,
  EmojiImage,
  Description,
  Icon
} from '@md-modules/home/components/pages/services/components/ad-block/views';

// types
interface Props {
  emojiIcon: string;
  serviceName: string;
  subName: string;
  description: string;
  img: string;
  button: {
    title: string;
    url: string;
  };
}

const AdBlock: React.FC<Props> = ({ subName, serviceName, description, img, emojiIcon, button }) => {
  const { push } = useRouter();

  const onClick = () => push(button.url);

  return (
    <Wrapper>
      <InnerWrapper onClick={onClick}>
        <LeftSideWrapper>
          <ServiceName>
            <FormattedMessage id={serviceName} />
          </ServiceName>
          <SubName>
            <FormattedMessage id={subName} />
          </SubName>
          <Description>
            <FormattedMessage id={description} />
          </Description>

          <Button>
            <FormattedMessage id={button.title} />
            <Icon src='/static/icons/send-arrow-white.svg' alt='send-arrow' />
          </Button>
        </LeftSideWrapper>

        <Image src={img} alt={serviceName} />
      </InnerWrapper>
      <EmojiImage src={emojiIcon} alt={emojiIcon} />
    </Wrapper>
  );
};

export default AdBlock;
