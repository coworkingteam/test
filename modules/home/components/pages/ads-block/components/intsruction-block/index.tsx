import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
// views
import {
  Icon,
  Title,
  Wrapper,
  SubTitle,
  InnerWrapper,
  EmojiBlock
} from '@md-modules/home/components/pages/ads-block/components/intsruction-block/views';
import { useRouter } from 'next/router';

// types
interface Props {
  header: string;
  title: string;
  emoji?: string;
  subTitle: string;
  button: {
    title: string;
    url: string;
  };
}

// styles
const TEXT_GRADIENT_COLORS = [
  ['#A676E2', '#F37A76'],
  ['#F37A76', '#A676E2']
];
const BUTTON_STYLES = { mt: 40 };

const InstructionBlock: React.FC<Props> = ({ title, header, subTitle, emoji, button }) => {
  const { push } = useRouter();

  const onClick = () => push(button.url);

  return (
    <Wrapper gradients={TEXT_GRADIENT_COLORS} property='background' duration={6000}>
      <EmojiBlock>{emoji || '🔥'}</EmojiBlock>

      <InnerWrapper>
        <SubTitle>{header}</SubTitle>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        <Button buttonStyle={BUTTON_STYLES} whiteBG onClick={onClick}>
          {button.title} <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default InstructionBlock;
