import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { Button } from '@md-ui/buttons/main';
// views
import {
  Title,
  SubTitle
} from '@md-modules/shared/layouts/service/components/pages/short-description/components/card/views';

interface Props {
  title: string;
  subTitle?: string;
  button: {
    title?: string;
    src: string;
  };
}

const Card: React.FC<Props> = ({ title, subTitle, button }) => {
  const { push } = useRouter();

  const onClick = () => push(button.src);

  return (
    <>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}

      <Button onClick={onClick}>{button.title || 'Узнать больше'}</Button>
    </>
  );
};

export default Card;
