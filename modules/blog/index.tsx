import React from 'react';
// libs
import { FormattedMessage, useIntl } from 'react-intl';
// components
import { NextSeo } from 'next-seo';
import Card from '@md-modules/blog/components/card';
// constants
// types
import { IArticle } from '@md-types/generated/contentful';
// views
import { InnerWrapper, Wrapper } from '@md-modules/blog/views';

interface Props {
  data: IArticle[];
}

const Blog: React.FC<Props> = ({ data }) => {
  const intl = useIntl();

  return (
    <>
      <NextSeo
        title={intl.formatMessage({ id: 'blog.seoTitle' })}
        description={intl.formatMessage({ id: 'blog.seoDescription' })}
        openGraph={{
          title: intl.formatMessage({ id: 'blog.seoDescription' }),
          description: 'Open Graph Description'
        }}
      />

      <Wrapper>
        <InnerWrapper>
          <h1>
            <FormattedMessage id='blog.title' />
          </h1>

          {data.map((item) => (
            <Card
              key={item.fields.slug}
              title={item.fields.title}
              queryId={item.fields.slug}
              description='Lorem ipsum dolor sit amet.'
              img={`https:${item.fields.image?.fields.file.url}`}
            />
          ))}
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Blog;
