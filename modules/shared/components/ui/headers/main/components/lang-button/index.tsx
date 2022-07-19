import React from 'react';
// libs
import ReactTooltip from 'react-tooltip';
// components
import { Button } from '@md-ui/buttons/main';
// constants
import { LOCALES, Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import { LangTitle, ToolTipItem, ToolTipWrapper } from '@md-ui/headers/main/components/lang-button/views';

// constants
const BUTTON_STYLES = { pb: 14, pl: 14, pr: 14, pt: 14 };
const OPTIONS: { label: string; value: Locales }[] = [
  { label: 'RU', value: LOCALES.RUSSIAN },
  { label: 'EN', value: LOCALES.ENGLISH },
  { label: 'UA', value: LOCALES.UKRAINIAN },
  { label: 'PL', value: LOCALES.POLISH }
];

// types
interface Props {
  whiteBG?: boolean;
  activeLang?: Locales;
  onSelectLang: (locale: Locales) => void;
}

const LangButton: React.FC<Props> = ({ onSelectLang, activeLang, whiteBG }) => {
  const activeLangLabel = OPTIONS.find((item) => item.value === activeLang)?.label;

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
      <Button whiteBG={whiteBG} data-tip data-for='languages' data-event='click' buttonStyle={BUTTON_STYLES}>
        <LangTitle>{activeLangLabel}</LangTitle>
      </Button>

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
