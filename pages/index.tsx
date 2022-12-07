import * as React from 'react';
import Home from '@md-modules/home';
import { MainLayout } from '@md-modules/shared/layouts/main';

const HomePage = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {}
//   };
// }
export default HomePage;
