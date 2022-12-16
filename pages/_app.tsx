import * as React from 'react';
import Router, { useRouter } from 'next/router';
// libs
import { NextSeo } from 'next-seo';
import { createClient } from 'contentful';
import { Toaster } from 'react-hot-toast';
// providers
import { ThemeProvider } from 'styled-components';
import LangProvider from '@md-modules/shared/i18n/providers/main';
import MenuProvider from '@md-modules/shared/providers/menu-provider';
// components
import Head from 'next/head';
import { ContentLoader } from '@md-ui/loaders/content-loader';
// types
import { AppProps as NextAppProps, AppContext } from 'next/app';
import { IService, IServiceFields } from '@md-types/generated/contentful';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// constants
import { BLOCKED_PAGES_LIST } from '@md-modules/shared/constants/global';
// global css
import 'public/fonts/styles.css';
import 'nprogress/nprogress.css';
import 'normalize.css/normalize.css';

type AppProps<P = any> = {
  menuItems: P;
} & NextAppProps;

const MyApp = ({ Component, pageProps, menuItems }: AppProps<IService[]>) => {
  const { pathname, locale } = useRouter();
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  const baseURL = process.env.SITE_URL || 'http://localhost:3000';

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
        canonical={baseURL}
        languageAlternates={[
          {
            href: `${baseURL}/`,
            hrefLang: 'en-US'
          },
          {
            href: `${baseURL}/ru/`,
            hrefLang: 'ru'
          }
        ]}
        openGraph={{
          siteName: 'aksis',
          url: `https://aksis.agency/${locale}${pathname}`
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />

      <ThemeProvider theme={theme}>
        <LangProvider>
          <MenuProvider menuItems={menuItems}>
            <ContentLoader isLoading={isPageLoading}>
              <Component {...pageProps} />
              <Toaster />
            </ContentLoader>
          </MenuProvider>
        </LangProvider>
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
};

MyApp.getInitialProps = async ({ ctx: { locale } }: AppContext) => {
  try {
    const contentfulClient = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN || ''
    });

    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'service',
      select: 'fields.menuTitle,fields.slug,fields.serviceType,fields.type,fields.isPopularService',
      locale
    });

    return { menuItems: data.items };
  } catch (error) {
    console.log(error);

    return {
      props: {
        retrieved: true
      }
    };
  }
};

export default MyApp;
