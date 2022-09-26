import * as React from 'react';
// libs
import ScrollToTop from 'react-scroll-to-top';
// view components
import { Footer } from '@md-ui/footer';
import { Header } from '@md-ui/headers/main';
// views
import { Wrapper } from './views';

const SCROLL_TO_TOP_BUTTON_STYLES = { borderRadius: '100%' };

const MainLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />

    <ScrollToTop smooth top={100} style={SCROLL_TO_TOP_BUTTON_STYLES} />
  </Wrapper>
);

export { MainLayout };
