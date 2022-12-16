import React from 'react';
// components
import { Button } from '@md-ui/buttons/main';
// types
import { BLOCKS, Document, MARKS } from '@contentful/rich-text-types';
// views
import {
  Icon,
  InfoBlockWrapper,
  RightSide,
  LeftSide,
  SubTitle,
  Title,
  Wrapper
} from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card/views';
// utils
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export interface ServiceRegistrationData {
  leftSide: {
    content: Document;
  };
  rightSide: {
    title: string;
    content: Document;

    button: {
      title: string;
      onClick?: () => void;
    };
  };
}

interface Props extends ServiceRegistrationData {
  link?: string;
  toggleModal: () => void;
}

const ServiceRegistrationCard: React.FC<Props> = ({ leftSide, rightSide, link, toggleModal }) => (
  <Wrapper id={link}>
    <LeftSide>
      {documentToReactComponents(leftSide.content, {
        renderMark: {
          [MARKS.BOLD]: (text) => <Title>{text}</Title>
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <SubTitle>{children}</SubTitle>
        }
      })}
    </LeftSide>

    <RightSide>
      <InfoBlockWrapper>
        <Title>{rightSide.title}</Title>

        <SubTitle opacity={0.8}>{documentToReactComponents(rightSide.content)}</SubTitle>
      </InfoBlockWrapper>

      <Button whiteBG onClick={toggleModal}>
        <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
        {rightSide.button.title}
      </Button>
    </RightSide>
  </Wrapper>
);

export default ServiceRegistrationCard;
