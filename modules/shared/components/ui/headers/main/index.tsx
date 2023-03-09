import * as React from 'react';
// hooks
import { useRouter } from 'next/router';
// view components
import { Logo } from '@md-ui/logos/main';
import { MenuItem } from '@md-ui/menu-item/main';
import LangButton from '@md-ui/headers/main/components/lang-button';
import AnimatedMenu from '@md-ui/headers/main/components/animated-menu';
import Breadcrumb from '@md-ui/headers/main/components/bread-crumb';
import AnimateMobileNav from '@md-ui/headers/main/components/animated-mobile-navigation';
// context
import { LangAPIContext } from '@md-modules/shared/i18n/providers/main';
import { MenuAPIContext } from '@md-modules/shared/providers/menu-provider';
// constants
import { Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import { Wrapper, IWrapper, LWrapper, RWrapper, BurgerWrapper, ContactsButton } from './views';

interface Props {
  breadcrumbSlug?: string;
}

const Header: React.FC<Props> = ({ breadcrumbSlug }) => {
  const { menuItems } = React.useContext(MenuAPIContext);

  const { push } = useRouter();
  const { setLocale, locale } = React.useContext(LangAPIContext);

  const [isScroll, setIsScroll] = React.useState(false);
  const [showBreadcrumb, setShowBreadcrumb] = React.useState(true);

  const onClickHome = () => push('/');
  const onChangeLocale = (value: Locales) => setLocale(value);
  const onClickNumber = () => push('tel:+34 633 872 870');

  React.useLayoutEffect(() => {
    const scrollHandler = () => {
      setIsScroll(window.scrollY > 20);
      setShowBreadcrumb(window.scrollY < 588);
    };

    scrollHandler();

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Wrapper isScroll={isScroll}>
      <IWrapper>
        <LWrapper onClick={onClickHome}>
          <Logo />
        </LWrapper>

        <RWrapper>
          <AnimatedMenu menuData={menuItems} isScroll={isScroll} />
          <MenuItem isScroll={isScroll} href='/blog' label='menu.questionsAndAnswers.title' />
        </RWrapper>

        <ContactsButton onClick={onClickNumber}>
          <p>+34 633 872 870</p>
          <p>Бесплатно по Польше</p>
        </ContactsButton>

        <BurgerWrapper>
          <LangButton activeLang={locale} onSelectLang={onChangeLocale} />

          <AnimateMobileNav menuData={menuItems} />
        </BurgerWrapper>
      </IWrapper>

      <Breadcrumb breadcrumbSlug={breadcrumbSlug} isScroll={isScroll} showBreadcrumb={showBreadcrumb} />
    </Wrapper>
  );
};

export { Header };
