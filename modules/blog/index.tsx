import React from 'react';
// components
import Card from '@md-modules/blog/components/card';
// views
import { InnerWrapper, Wrapper } from '@md-modules/blog/views';

const Blog = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Blog</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Blog;
