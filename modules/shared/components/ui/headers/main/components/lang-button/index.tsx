import React from 'react';
// libs
import ReactTooltip from 'react-tooltip';
// constants
import { LOCALES, Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import {
  ChangeLanguageIcon,
  Image,
  ToolTipItem,
  ToolTipWrapper
} from '@md-ui/headers/main/components/lang-button/views';

// constants
const OPTIONS: { label: string; image: string; value: Locales }[] = [
  { label: 'EN', image: '/static/icons/uk.svg', value: LOCALES.ENGLISH },
  // { label: 'UA', image: '/static/icons/ukraine.svg', value: LOCALES.UKRAINIAN },
  // { label: 'PL', image: '/static/icons/poland.svg', value: LOCALES.POLISH },
  { label: 'RU', image: '/static/icons/russia.svg', value: LOCALES.RUSSIAN }
];

// types
interface Props {
  activeLang?: Locales;
  onSelectLang: (locale: Locales) => void;
}

const LangButton: React.FC<Props> = ({ onSelectLang, activeLang }) => {
  const activeLangImage = React.useMemo(
    () => OPTIONS.find((option) => option.value === activeLang)?.image,
    [activeLang]
  );

  const langList = React.useMemo(
    () =>
      OPTIONS.map((option) => {
        const isActive = activeLang === option.value;

        return (
          <ToolTipItem onClick={() => !isActive && onSelectLang(option.value)} isActive={isActive} key={option.value}>
            {option.label}
            <Image src={option.image} alt={option.image} />
          </ToolTipItem>
        );
      }),
    [activeLang]
  );

  return (
    <>
      <ChangeLanguageIcon
        data-tip
        data-for='languages'
        data-event='click'
        alt='change-language'
        src={activeLangImage || '/static/icons/change-language.svg'}
      />

      <ReactTooltip
        id='languages'
        clickable
        delayHide={100}
        effect='solid'
        place='bottom'
        eventOff='scroll'
        globalEventOff='click'
        className='sidebar-tooltip'
      >
        <ToolTipWrapper>{langList}</ToolTipWrapper>
      </ReactTooltip>
    </>
  );
};

export default LangButton;
