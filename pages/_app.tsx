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
// global css
import 'public/fonts/styles.css';
import 'nprogress/nprogress.css';
import 'normalize.css/normalize.css';

// @ts-ignore
import TagManager from 'react-gtm-module';

type AppProps<P = any> = {
  menuItems: P;
} & NextAppProps;

const MyApp = ({ Component, pageProps, menuItems }: AppProps<IService[]>) => {
  const { pathname, locale } = useRouter();
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  const baseURL = process.env.SITE_URL + '/' || 'http://localhost:3000';

  React.useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NHSK3VS' });

    Router.events.on('routeChangeError', () => setIsPageLoading(false));
    Router.events.on('routeChangeStart', () => setIsPageLoading(true));
    Router.events.on('routeChangeComplete', () => setIsPageLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>aksis</title>
        <meta charSet='utf-8' />
        <link rel='icon' href='/static/icons/logo.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta name='facebook-domain-verification' content='nodgdfaqj127w85k0zgmlinsqt0vr3' />
      </Head>

      <NextSeo
        canonical={baseURL}
        defaultTitle='aksis'
        languageAlternates={[
          {
            href: `${baseURL}`,
            hrefLang: 'en-US'
          },
          {
            href: `${baseURL}ru/`,
            hrefLang: 'ru'
          }
        ]}
        openGraph={{
          url: `${baseURL}${locale}${pathname}`,
          title: 'aksis',
          siteName: 'aksis',
          images: [
            {
              url: '/static/images/og-image.png',
              width: 1200,
              height: 460,
              alt: 'aksis'
            }
          ]
        }}
        twitter={{
          handle: '@aksisagency',
          site: 'aksis.agency',
          cardType: 'summary'
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
      select: 'fields.menuTitle,fields.slug,fields.serviceType,fields.type,fields.isPopularService,fields.serviceImage',
      locale
    });

    return { menuItems: data.items, revalidate: 20 };
  } catch (error) {
    console.log(error);

    return {
      props: {
        retrieved: true,
        revalidate: 20
      }
    };
  }
};

export default MyApp;
