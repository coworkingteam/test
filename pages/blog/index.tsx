import * as React from 'react';
import Blog from '@md-modules/blog';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { GetServerSideProps } from 'next';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IArticle, IServiceFields } from '@md-types/generated/contentful';

const BlogPage = ({ data }: { data: IArticle[] }) => (
  <MainLayout>
    <Blog data={data} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'article',
      select: 'fields.title,fields.slug,fields.image',
      locale
    });

    return {
      props: {
        data: data.items,
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
