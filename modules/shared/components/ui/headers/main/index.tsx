import * as React from 'react';
// libs
import type { LottiePlayer } from 'lottie-web';
// hooks
import { useRouter } from 'next/router';
// view components
// import { Logo } from '@md-ui/logos/main';
import BurgerMenu from '@md-ui/burger-menu';
import { Button } from '@md-ui/buttons/main';
import { MenuItem } from '@md-ui/menu-items/main';
import LangButton from '@md-ui/headers/main/components/lang-button';
import MobileMenu from '@md-ui/headers/main/components/mobile-menu';
// context
import { LangAPIContext } from '@md-modules/shared/i18n/providers/main';
// constants
import { menuItems } from './constants';
import { Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, LogoText, BurgerIcon } from './views';

const BUTTON_STYLES = { mr: 26 };

const Header = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = React.useState<LottiePlayer | null>(null);

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

  React.useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  React.useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/static/animations/logo.json'
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <>
      <Wrapper isScroll={isScroll}>
        <IWrapper>
          <LWrapper onClick={onClickHome}>
            {/*<Logo />*/}

            <div style={{ width: '120px', height: '36px' }} ref={ref} />
            {/*<Lottie options={defaultOptions} height={400} width={400} />*/}

            <LogoText>Aksis</LogoText>
          </LWrapper>

          <RWrapper>
            {menuItems.map(({ l, h }) => (
              <MenuItem isScroll={isScroll} key={l} href={h} label={l} />
            ))}
          </RWrapper>

          <Button buttonStyle={BUTTON_STYLES}>+33 78 87 78 87</Button>
          <LangButton activeLang={locale} onSelectLang={onChangeLocale} />

          <BurgerIcon onClick={toggleMainMenu} src='/static/icons/menu.png' alt='burger' />
        </IWrapper>
      </Wrapper>

      <BurgerMenu isRight isOpen={isOpenBurgerMenu} pageWrapId='mobile-main-menu' width={260} onClose={toggleMainMenu}>
        <MobileMenu data={menuItems} />
      </BurgerMenu>
    </>
  );
};

export { Header };
