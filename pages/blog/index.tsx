import * as React from 'react';
import Blog from '@md-modules/blog';
import { MainLayout } from '@md-modules/shared/layouts/main';

const HomePage = () => {
  return (
    <MainLayout>
      <Blog />
    </MainLayout>
  );
};

export default HomePage;
