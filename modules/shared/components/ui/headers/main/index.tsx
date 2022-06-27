import * as React from 'react';
// view components
import { Logo } from '@md-ui/logos/main';
import { Button } from '@md-ui/buttons/main';
import { MenuItem } from '@md-ui/menu-items/main';
// constants
import { menuItems } from './constants';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, LogoText } from './views';

const Header = () => {
  const [isScroll, setIsScroll] = React.useState(false);

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
      </IWrapper>
    </Wrapper>
  );
};

export { Header };
