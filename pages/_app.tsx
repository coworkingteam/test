import * as React from 'react';
import Router from 'next/router';
// libs
// import NProgress from 'nprogress';
// providers
import { ThemeProvider } from 'styled-components';
import LangProvider from '@md-modules/shared/i18n/providers/main';
// components
import Head from 'next/head';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// types
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'public/fonts/styles.css';
import 'nprogress/nprogress.css';
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  // NProgress.configure({ showSpinner: false, speed: 500 });
  Router.events.on('routeChangeError', () => setIsPageLoading(false));
  Router.events.on('routeChangeStart', () => setIsPageLoading(true));
  Router.events.on('routeChangeComplete', () => setIsPageLoading(false));
  return (
    <>
      <Head>
        <title>Aksis</title>
        <link rel='icon' href='/static/icons/logo.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <ThemeProvider theme={theme}>
        <LangProvider>
          {/* TODO test version of loading  */}
          <ContentLoader isLoading={isPageLoading}>
            <Component {...pageProps} />
          </ContentLoader>
        </LangProvider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default MyApp;
