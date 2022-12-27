import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { BreadcrumbJsonLd } from 'next-seo';
// views
import { BreadcrumbName, BackIcon, Wrapper } from '@md-ui/headers/main/components/bread-crumb/views';
import { MenuAPIContext } from '@md-modules/shared/providers/menu-provider';
// utils
import { flatten } from 'lodash';

interface Props {
  showBreadcrumb: boolean;
  isScroll: boolean;
}

const Breadcrumb: React.FC<Props> = ({ showBreadcrumb, isScroll = false }) => {
  // TODO FIX IT
  const { menuItems } = React.useContext(MenuAPIContext);

  const { push, pathname, query, locale } = useRouter();

  if (pathname === '/') {
    return null;
  }

  const routersList = pathname.split('/').filter((item) => item.length);
  const id = query.id as string;
  const itemListElements = routersList.map((item, index) => ({
    position: index + 2,
    name: item.replace('[id]', id).split('-').join(' '),
    item: `${process.env.SITE_URL || 'http://localhost:3000'}/${locale}/${
      routersList[index - 1] ? routersList[index - 1] + '/' : ''
    }${
      item === 'menu' && index + 1 < routersList.length
        ? item.replace('[id]', id) +
          `?type=${
            flatten(menuItems.map((item) => item.data.map((data) => ({ ...data, type: item.type })))).find((menuItem) =>
              menuItem.h.includes(routersList[1]?.replace('[id]', id))
            )?.type
          }`
        : item.replace('[id]', id)
    }`
  }));

  const onClickHome = () => push('/');

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

        {itemListElements.map((item, index) => {
          const isLastChild = index + 1 === routersList.length;
          const url = new URL(item.item).pathname + new URL(item.item).search || '';

          return (
            <BreadcrumbName
              isScroll={isScroll}
              key={item.name}
              isLastChild={isLastChild}
              onClick={() => !isLastChild && push(`/${url}`)}
            >
              /{item.name}
            </BreadcrumbName>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Breadcrumb;
