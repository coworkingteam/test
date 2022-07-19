import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
// providers
import { ThemeProvider } from 'styled-components';
import LangProvider from '@md-modules/shared/i18n/providers/main';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'public/fonts/styles.css';
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Aksis</title>
      <link rel='icon' href='/static/icons/logo.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>

    <ThemeProvider theme={theme}>
      <LangProvider>
        <Component {...pageProps} />
      </LangProvider>
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
