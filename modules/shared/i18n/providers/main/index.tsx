import React from 'react';
// libs
import { IntlProvider } from 'react-intl';
// managers
import { loadString, saveString } from '@md-modules/shared/managers/storage';
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
  locale: LOCALES.RUSSIAN,
  setLocale: () => {}
});

const LangProvider: React.FC = ({ children }) => {
  const [localeState, setLocaleState] = React.useState<Locales>(LOCALES.RUSSIAN);

  const setLocale = (value: Locales) => {
    saveString('locale', value);

    setLocaleState(value);
  };

  React.useEffect(() => {
    const storageLocale = loadString('locale') as Locales;

    if (!storageLocale) {
      saveString('locale', LOCALES.RUSSIAN);

      setLocaleState(LOCALES.RUSSIAN);

      return;
    }

    setLocaleState(storageLocale);
  }, []);

  console.log(flatten(messages[localeState]));

  return (
    <IntlProvider textComponent={React.Fragment} messages={flatten(messages[localeState])} locale={localeState}>
      <LangAPIContext.Provider value={{ locale: localeState, setLocale }}>{children}</LangAPIContext.Provider>
    </IntlProvider>
  );
};

export default LangProvider;
