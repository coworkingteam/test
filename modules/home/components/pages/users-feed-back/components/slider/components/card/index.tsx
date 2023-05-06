import React from 'react';
// css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// views
import { Avatar, Name, InitialWrapper, Wrapper, Text, UserWrapper, NameWrapper } from './views';

interface Props {
  name: string;
  avatar: string;
  date: string;
  text: string;
}

const Card: React.FC<Props> = ({ name, avatar, date, text }) => (
  <Wrapper>
    <InitialWrapper>
      <UserWrapper>
        <Avatar src={avatar} alt={name} />

        <NameWrapper>
          <Name>{name}</Name>
          <Text>{new Date(date).toLocaleDateString()}</Text>
        </NameWrapper>
      </UserWrapper>

      <Text>{text}</Text>
    </InitialWrapper>
  </Wrapper>
);

export default Card;
