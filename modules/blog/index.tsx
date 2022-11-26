import React from 'react';
// components
import Card from '@md-modules/blog/components/card';
// constants
import { ARTICLES } from '@md-modules/article/constants';
// views
import { InnerWrapper, Wrapper } from '@md-modules/blog/views';

const Blog = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Blog</h1>

        {ARTICLES.map((item) => (
          <Card
            img={item.img}
            key={item.title}
            title={item.title}
            queryId={item.queryId}
            description='Lorem ipsum dolor sit amet.'
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Blog;
