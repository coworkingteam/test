import * as React from 'react';
// view components
import { Footer } from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
import ScrollToTopButton from '@md-ui/buttons/scroll-to-top';
// views
import { Wrapper } from './views';

interface Props {
  breadcrumbSlug?: string;
}

const MainLayout: React.FC<Props> = ({ children, breadcrumbSlug }) => {
  return (
    <Wrapper>
      <Header breadcrumbSlug={breadcrumbSlug} />
      {children}

      <ScrollToTopButton isScrolling />
      <Footer />
    </Wrapper>
  );
};

export { MainLayout };
