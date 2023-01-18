import React from 'react';
// libs
import { FormattedMessage, useIntl } from 'react-intl';
// query
// import contentfulClient from '@md-modules/shared/services/contentful';
// components
import { NextSeo } from 'next-seo';
// import { Button } from '@md-ui/buttons/main';
import Card from '@md-modules/blog/components/card';
// hooks
// import { useRouter } from 'next/router';
// types
import { IArticle } from '@md-types/generated/contentful';
// views
import { InnerWrapper, Wrapper } from '@md-modules/blog/views';

interface Props {
  data: IArticle[];
  totalItems: number;
}

const Blog: React.FC<Props> = ({ data }) => {
  const intl = useIntl();
  // const { locale } = useRouter();
  // const [articlesData, setArticlesData] = React.useState(data);
  //
  // const [page, setPage] = React.useState(1);
  //
  // const requestMoreArticles = async () => {
  //   const data = await contentfulClient.getEntries<IArticle>({
  //     content_type: 'article',
  //     select: 'fields.title,fields.slug,fields.image',
  //     locale,
  //     skip: 8 * page,
  //     limit: 8
  //   });
  //
  //   setArticlesData((prevState) => [...prevState, ...data.items]);
  // };
  //
  // React.useEffect(() => {
  //   if (page > 1) {
  //     void requestMoreArticles();
  //   }
  // }, [page]);

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

          {/*{totalItems > 8 * page && <Button onClick={() => setPage(page + 1)}>Load more...</Button>}*/}
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Blog;
