import React from 'react';
import Article from '@md-modules/article';
import { MainLayout } from '@md-modules/shared/layouts/main';

const ArticlePage = () => {
  return (
    <MainLayout>
      <Article />
    </MainLayout>
  );
};

export default ArticlePage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'canadian-visa' } }, { params: { id: 'spanish-visa' } }],
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
