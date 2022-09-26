import React from 'react';
// components
import { Link } from '@md-ui/link';
import CanvasGradient from '@md-ui/canvas-gradient';
// views
import { Wrapper, InnerWrapper, Title, SubTitle } from '@md-modules/custom-404/views';

const TEXT_GRADIENT_COLORS = [
  ['#a676e2', '#F37A76'],
  ['#FFD080', '#6ca1bc']
];

const Custom404Page = () => (
  <Wrapper>
    <CanvasGradient />
    <InnerWrapper>
      <Title angle='90deg' gradients={TEXT_GRADIENT_COLORS} property='text'>
        404
      </Title>

      <SubTitle>This page does not exist or is still under development</SubTitle>

      <Link preset='default' href='/'>
        Back To Home Page
      </Link>
    </InnerWrapper>
  </Wrapper>
);

export default Custom404Page;
