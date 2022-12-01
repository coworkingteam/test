import React from 'react';
// hooks
import { useRouter } from 'next/router';
// views
import { BackButtonWrapper, BackIcon, BackTitle } from '@md-ui/buttons/back-button/views';

const BackButton = () => {
  const { push } = useRouter();

  const onClick = () => push('/blog');

  return (
    <BackButtonWrapper onClick={onClick}>
      <BackIcon src='/static/icons/left-arrow.svg' alt='left-arrow' />

      <BackTitle>Back</BackTitle>
    </BackButtonWrapper>
  );
};

export default BackButton;
