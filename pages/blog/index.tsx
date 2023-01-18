import * as React from 'react';
import Blog from '@md-modules/blog';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { GetServerSideProps } from 'next';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IArticle } from '@md-types/generated/contentful';

const BlogPage = ({ data, totalItems }: { data: IArticle[]; totalItems: number }) => (
  <MainLayout>
    <Blog totalItems={totalItems} data={data} />
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await contentfulClient.getEntries<IArticle>({
      content_type: 'article',
      select: 'fields.title,fields.slug,fields.image',
      locale
      // skip: 0,
      // limit: 8
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
