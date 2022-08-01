import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// view components
import { Logo } from '@md-ui/logos/main';
import BurgerMenu from '@md-ui/burger-menu';
import { Button } from '@md-ui/buttons/main';
import LangButton from '@md-ui/headers/main/components/lang-button';
import MobileMenu from '@md-ui/headers/main/components/mobile-menu';
import AnimatedNavbar from '@md-ui/headers/main/components/animated-navbar/';
import DevelopersDropdown from '@md-ui/headers/main/components/animated-navbar/components/DropdownContents/DevelopersDropdown';
// context
import { LangAPIContext } from '@md-modules/shared/i18n/providers/main';
// constants
import { menuItems } from './constants';
import { Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, BurgerIcon, BurgerWrapper } from './views';

const BUTTON_STYLES = { mr: 26 };

const Header = () => {
  const { push } = useRouter();
  const { setLocale, locale } = React.useContext(LangAPIContext);

  const [isScroll, setIsScroll] = React.useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = React.useState(false);

  const toggleMainMenu = () => setIsOpenBurgerMenu((prevState) => !prevState);
  const onClickHome = () => push('/');
  const onChangeLocale = (value: Locales) => setLocale(value);

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const navbarConfig = [
    { title: 'Услуги', dropdown: DevelopersDropdown },
    { title: 'Вопросы и ответы', dropdown: DevelopersDropdown }
  ];

  return (
    <>
      <Wrapper isScroll={isScroll}>
        <IWrapper>
          <LWrapper onClick={onClickHome}>
            <Logo />
          </LWrapper>

          <RWrapper>
            <AnimatedNavbar isScroll={isScroll} data={navbarConfig} duration={300} />

            {/*{menuItems.map(({ l, h }) => (*/}
            {/*  <MenuItem isScroll={isScroll} key={l} href={h} label={l} />*/}
            {/*))}*/}
          </RWrapper>

          <Button buttonStyle={BUTTON_STYLES}>+47 728 000 702</Button>

          <BurgerWrapper>
            <BurgerIcon onClick={toggleMainMenu} src='/static/icons/menu.png' alt='burger' />

            <LangButton activeLang={locale} onSelectLang={onChangeLocale} />
          </BurgerWrapper>
        </IWrapper>
      </Wrapper>

      <BurgerMenu isRight isOpen={isOpenBurgerMenu} pageWrapId='mobile-main-menu' width={260} onClose={toggleMainMenu}>
        <MobileMenu data={menuItems} />
      </BurgerMenu>
    </>
  );
};

export { Header };
