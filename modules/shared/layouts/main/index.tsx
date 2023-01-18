import * as React from 'react';
// libs
import ScrollToTop from 'react-scroll-to-top';
// view components
import { Footer } from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
// views
import { Wrapper } from './views';

const SCROLL_TO_TOP_BUTTON_STYLES = { borderRadius: '100%' };

interface Props {
  breadcrumbSlug?: string;
}

const MainLayout: React.FC<Props> = ({ children, breadcrumbSlug }) => (
  <Wrapper>
    <Header breadcrumbSlug={breadcrumbSlug} />
    {children}
    <Footer />

    <ScrollToTop width='24px' height='24px' smooth top={100} style={SCROLL_TO_TOP_BUTTON_STYLES} />
  </Wrapper>
);

export { MainLayout };
