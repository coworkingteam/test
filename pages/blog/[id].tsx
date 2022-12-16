import React from 'react';
import Article from '@md-modules/article';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { GetStaticPaths, GetStaticProps } from 'next';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IArticleFields, IServiceFields } from '@md-types/generated/contentful';

const ArticlePage = ({ article }: { article: IArticleFields }) => {
  if (!article) {
    return null;
  }

  return (
    <MainLayout>
      <Article article={article} />
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await contentfulClient.getEntries<IArticleFields>({
    content_type: 'article',
    select: 'fields.slug'
  });

  return {
    paths: data.items.map((item) => ({ params: { id: item.fields.slug } })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  try {
    const slug = params?.id;

    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'article',
      'fields.slug': slug,
      locale
    });

    const [article] = data.items;

    if (!article) {
      return {
        redirect: {
          destination: '/404',
          permanent: false
        }
      };
    }

    return {
      props: {
        article: article.fields
      }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        retrieved: true
      }
    };
  }
};

export default ArticlePage;
