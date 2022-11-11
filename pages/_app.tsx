import * as React from 'react';
import Router, { useRouter } from 'next/router';
// libs
import { Toaster } from 'react-hot-toast';
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
// constants
import { BLOCKED_PAGES_LIST } from '@md-modules/shared/constants/global';
// global css
import 'public/fonts/styles.css';
import 'nprogress/nprogress.css';
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  React.useEffect(() => {
    if (BLOCKED_PAGES_LIST.some((pageURL) => pageURL === pathname)) {
      void Router.push('/404');
    }

    Router.events.on('routeChangeError', () => setIsPageLoading(false));
    Router.events.on('routeChangeStart', () => setIsPageLoading(true));
    Router.events.on('routeChangeComplete', (url) => {
      if (BLOCKED_PAGES_LIST.some((pageURL) => pageURL === url.split('?')[0])) {
        Router.push('/404').then(() => setIsPageLoading(false));

        return;
      }

      setIsPageLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Aksis</title>
        <link rel='icon' href='/static/icons/logo.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <ThemeProvider theme={theme}>
        <LangProvider>
          <ContentLoader isLoading={isPageLoading}>
            <Component {...pageProps} />
            <Toaster />
          </ContentLoader>
        </LangProvider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default MyApp;
