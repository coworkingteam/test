import React from 'react';
// hooks
import { useRouter } from 'next/router';
// views
import { SubTitle, Title, Wrapper } from '@md-modules/blog/components/card/views';

const Card = () => {
  const { push } = useRouter();

  const onClick = () => push('/blog');

  return (
    <Wrapper>
      <div>
        <Title onClick={onClick}>Что нужно знать о программе CUAET и переезде в Канаду ?</Title>
        <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
      </div>
    </Wrapper>
  );
};

export default Card;
