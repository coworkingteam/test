import * as React from 'react';
import Router, { useRouter } from 'next/router';
// libs
import { NextSeo } from 'next-seo';
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
  const { pathname, locale } = useRouter();
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
        <title>aksis</title>
        <link rel='icon' href='/static/icons/logo.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
      </Head>

      <NextSeo
        canonical={process.env.SITE_URL || 'http://localhost:3000'}
        languageAlternates={[
          {
            href: `${process.env.SITE_URL || 'http://localhost:3000'}/uk-ua/`,
            hrefLang: 'uk-ua'
          },
          {
            href: `${process.env.SITE_URL || 'http://localhost:3000'}/ru/`,
            hrefLang: 'ru'
          }
        ]}
        openGraph={{
          siteName: 'aksis',
          url: `https://aksis.agency/${locale}${pathname}`
          // images: [
          //   {
          //     url: 'https://www.example.ie/og-image-01.jpg',
          //     width: 800,
          //     height: 600,
          //     alt: 'Og Image Alt',
          //     type: 'image/jpeg'
          //   },
          //   {
          //     url: 'https://www.example.ie/og-image-02.jpg',
          //     width: 900,
          //     height: 800,
          //     alt: 'Og Image Alt Second',
          //     type: 'image/jpeg'
          //   },
          //   { url: 'https://www.example.ie/og-image-03.jpg' },
          //   { url: 'https://www.example.ie/og-image-04.jpg' }
          // ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />

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
