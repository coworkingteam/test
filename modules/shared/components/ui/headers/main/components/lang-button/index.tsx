import React from 'react';
// libs
import ReactTooltip from 'react-tooltip';
// constants
import { LOCALES, Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import { ChangeLanguageIcon, ToolTipItem, ToolTipWrapper } from '@md-ui/headers/main/components/lang-button/views';

// constants
const OPTIONS: { label: string; value: Locales }[] = [
  { label: 'RU', value: LOCALES.RUSSIAN },
  { label: 'EN', value: LOCALES.ENGLISH },
  { label: 'UA', value: LOCALES.UKRAINIAN },
  { label: 'PL', value: LOCALES.POLISH }
];

// types
interface Props {
  activeLang?: Locales;
  onSelectLang: (locale: Locales) => void;
}

const LangButton: React.FC<Props> = ({ onSelectLang, activeLang }) => {
  const langList = React.useMemo(
    () =>
      OPTIONS.map((option) => {
        const isActive = activeLang === option.value;

        return (
          <ToolTipItem onClick={() => !isActive && onSelectLang(option.value)} isActive={isActive} key={option.value}>
            {option.label}
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
        src='/static/icons/change-language.svg'
        alt='change-language'
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
