import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { BreadcrumbJsonLd } from 'next-seo';
// constants
import { PAGES_NAMES } from '@md-modules/shared/i18n/pages-names';
import { LOCALES, Locales } from '@md-modules/shared/i18n/providers/main/locales';
// views
import { BreadcrumbName, BackIcon, Wrapper } from '@md-ui/headers/main/components/bread-crumb/views';

interface Props {
  showBreadcrumb: boolean;
  isScroll: boolean;
}

const Breadcrumb: React.FC<Props> = ({ showBreadcrumb, isScroll = false }) => {
  // TODO FIX IT

  const { push, pathname, query, locale } = useRouter();

  const routersList = pathname.split('/').filter((item) => item.length);

  const itemListElements = routersList.map((item, index) => ({
    position: index + 2,

    name: PAGES_NAMES[(locale as Locales) || LOCALES.ENGLISH]?.find((item) => item.url === pathname)?.name || '',
    item: `${process.env.SITE_URL || 'http://localhost:3000'}/${item.replace('[id]', query.id as string)}`
  }));

  const onClickHome = () => push('/');

  if (pathname === '/') {
    return null;
  }

  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,

            name: 'Home',
            item: `${process.env.SITE_URL || 'http://localhost:3000'}/`
          },
          ...itemListElements
        ]}
      />

      <Wrapper showBreadcrumb={showBreadcrumb}>
        <BackIcon onClick={onClickHome} src='/static/icons/left-arrow.svg' alt='left-arrow' />
        <BreadcrumbName isScroll={isScroll} onClick={onClickHome}>
          home
        </BreadcrumbName>

        {routersList.map((item, index) => {
          const isLastChild = index + 1 === routersList.length;
          const url =
            PAGES_NAMES[(locale as Locales) || LOCALES.ENGLISH]?.find((item) => item.url === pathname)?.name ||
            item
              .replace('[id]', query.id as string)
              .split('-')
              .join(' ');

          return (
            <BreadcrumbName
              isScroll={isScroll}
              key={item}
              isLastChild={isLastChild}
              onClick={() => !isLastChild && push(`/${item}`)}
            >
              /{url}
            </BreadcrumbName>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Breadcrumb;
