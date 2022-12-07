import React from 'react';
// components
import { NextSeo } from 'next-seo';
import Card from '@md-modules/blog/components/card';
// constants
import { ARTICLES } from '@md-modules/article/constants';
// views
import { InnerWrapper, Wrapper } from '@md-modules/blog/views';

const Blog = () => {
  return (
    <>
      <NextSeo
        title='База знаний | aksis' // > 70/80 char // ukr --> Помощь с документами в Польше + для беженцов
        description='This example uses more of the available config options.'
        openGraph={{
          title: 'База знаний | aksis',
          description: 'Open Graph Description'
        }}
      />

      <Wrapper>
        <InnerWrapper>
          <h1>База знаний</h1>

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
    </>
  );
};

export default Blog;
