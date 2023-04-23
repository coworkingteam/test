import React from 'react';
// libs
import ReactTooltip from 'react-tooltip';
// constants
import { LOCALES, Locales } from '@md-modules/shared/i18n/providers/main/locales';
// theme
import { theme } from '@md-styles/styled/theme';
// views
import {
  ChangeLanguageIcon,
  ChangeLangWrapper,
  Image,
  ToolTipItem,
  ToolTipWrapper
} from '@md-ui/headers/main/components/lang-button/views';
import ChangeLangArrow from '../../../../../../../../public/static/icons/change-lang-arrow';

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
  blackTheme?: boolean;
  onSelectLang: (locale: Locales) => void;
}

const LangButton: React.FC<Props> = ({ onSelectLang, activeLang, blackTheme }) => {
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
      <ChangeLangWrapper data-tip data-for={`languages/${blackTheme}`} data-event='click'>
        <ChangeLanguageIcon alt='change-language' src={activeLangImage || '/static/icons/change-language.svg'} />

        <ChangeLangArrow color={blackTheme ? theme.colors.black600 : theme.colors.white} />
      </ChangeLangWrapper>

      <ReactTooltip
        id={`languages/${blackTheme}`}
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
