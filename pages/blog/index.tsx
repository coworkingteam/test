import * as React from 'react';
import Blog from '@md-modules/blog';
import { GetServerSideProps } from 'next';
import { IArticle, IArticleFields } from '@md-types/generated/contentful';
import { MainLayout } from '@md-modules/shared/layouts/main';
import contentfulClient from '@md-modules/shared/services/contentful';

const BlogPage = ({ data, totalItems }: { data: IArticle[]; totalItems: number }) => (
  <MainLayout>
    <Blog totalItems={totalItems} data={data} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await contentfulClient.getEntries<IArticleFields>({
      content_type: 'article',
      select: 'fields.title,fields.slug,fields.image,fields.serviceType,fields.shortDescription,fields.cardColorCode',
      locale,
      skip: 0,
      limit: 8
    });

    return {
      props: {
        data: data.items,
        totalItems: data.total,
        revalidate: 20
      }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        retrieved: true,
        revalidate: 20
      }
    };
  }
};
export default BlogPage;
