import React from 'react';
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
          <ServiceName>{serviceName}</ServiceName>
          <SubName>{subName}</SubName>
          <Description>{description}</Description>

          <Button>
            {button.title}
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
