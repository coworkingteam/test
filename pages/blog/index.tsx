import * as React from 'react';
import Blog from '@md-modules/blog';
import { MainLayout } from '@md-modules/shared/layouts/main';

const BlogPage = () => {
  return (
    <MainLayout>
      <Blog />
    </MainLayout>
  );
};

export default BlogPage;
