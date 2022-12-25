import React from 'react';
// hooks
import { useRouter } from 'next/router';
// libs
import { IntlProvider } from 'react-intl';
// constants
import messages from './messages';
import { LOCALES, Locales } from '@md-modules/shared/i18n/providers/main/locales';
// utils
import flatten from 'flat';

interface Context {
  locale: Locales;
  setLocale: (value: Locales) => void;
}

export const LangAPIContext = React.createContext<Context>({
  locale: LOCALES.ENGLISH,
  setLocale: () => {}
});

const LangProvider: React.FC = ({ children }) => {
  const { push, asPath, locale } = useRouter();
  const [localeState, setLocaleState] = React.useState<Locales>(locale as Locales);

  const setLocale = (value: Locales) => {
    setLocaleState(value);

    void push(asPath, asPath, { locale: value });
  };

  return (
    <IntlProvider textComponent={React.Fragment} messages={flatten(messages[localeState])} locale={localeState}>
      <LangAPIContext.Provider value={{ locale: localeState, setLocale }}>{children}</LangAPIContext.Provider>
    </IntlProvider>
  );
};

export default LangProvider;
