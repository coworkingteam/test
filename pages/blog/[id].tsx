import React from 'react';
import Article from '@md-modules/article';
import { MainLayout } from '@md-modules/shared/layouts/main';
import { GetStaticPaths } from 'next';

const ArticlePage = () => {
  return (
    <MainLayout>
      <Article />
    </MainLayout>
  );
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'canadian-visa' } }, { params: { id: 'spanish-visa' } }],
    fallback: true
  };
};

export async function getStaticProps() {
  return {
    props: {}
  };
}
