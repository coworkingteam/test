import * as React from 'react';
// view components
import { Logo } from '@md-ui/logos/main';
import BurgerMenu from '@md-ui/burger-menu';
import { Button } from '@md-ui/buttons/main';
import { MenuItem } from '@md-ui/menu-items/main';
import MobileMenu from '@md-ui/headers/main/components/mobile-menu';
// constants
import { menuItems } from './constants';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, LogoText, BurgerIcon } from './views';

const Header = () => {
  const [isScroll, setIsScroll] = React.useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = React.useState(false);

  const toggleMainMenu = () => setIsOpenBurgerMenu((prevState) => !prevState);

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

  return (
    <>
      <Wrapper isScroll={isScroll}>
        <IWrapper>
          <LWrapper>
            <Logo />

            <LogoText>Aksis</LogoText>
          </LWrapper>

          <RWrapper>
            {menuItems.map(({ l, h }) => (
              <MenuItem isScroll={isScroll} key={l} href={h} label={l} />
            ))}
          </RWrapper>

          <Button>+33 78 87 78 87</Button>

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
