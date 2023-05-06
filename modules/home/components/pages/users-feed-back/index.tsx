import React from 'react';
// types
import { IComment } from '@md-types/generated/contentful';
// components
import Slider from '@md-modules/home/components/pages/users-feed-back/components/slider';
// views
import { InnerWrapper, Wrapper } from './views';

interface Props {
  commentsData: IComment[];
}

const UsersFeedBack: React.FC<Props> = ({ commentsData }) => {
  const data =
    commentsData.map((item) => ({
      avatar: `https:${item.fields.avatar.fields.file.url}`,
      name: item.fields.name,
      text: item.fields.text,
      date: item.fields.date
    })) || [];

  return (
    <Wrapper id='feed-back'>
      <InnerWrapper>
        <Slider data={data} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default UsersFeedBack;
