import * as React from 'react';
import Blog from '@md-modules/blog';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { GetStaticProps } from 'next';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IArticle, IServiceFields } from '@md-types/generated/contentful';

const BlogPage = ({ data }: { data: IArticle[] }) => (
  <MainLayout>
    <Blog data={data} />
  </MainLayout>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'article',
      select: 'fields.title,fields.slug,fields.image',
      locale
    });

    return {
      props: {
        data: data.items
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
export default BlogPage;
