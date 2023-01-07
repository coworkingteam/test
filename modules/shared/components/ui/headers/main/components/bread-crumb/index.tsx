import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import { BreadcrumbJsonLd } from 'next-seo';
// views
import { BreadcrumbName, BackIcon, Wrapper } from '@md-ui/headers/main/components/bread-crumb/views';

interface Props {
  showBreadcrumb: boolean;
  isScroll: boolean;
}

const Breadcrumb: React.FC<Props> = ({ showBreadcrumb, isScroll = false }) => {
  const { push, pathname, query, locale } = useRouter();

  if (pathname === '/') {
    return null;
  }

  const routersList = pathname
    .split('/')
    .filter((item) => item.length && item !== '[...slug]')
    .concat(query.slug || []);
  const itemListElements = routersList.map((item, index) => ({
    position: index + 2,
    name: item
      .replace('[id]', query.id as string)
      .split('-')
      .join(' '),
    item: `${process.env.SITE_URL || 'http://localhost:3000'}/${locale}/${
      routersList[index - 1] ? routersList[index - 1] + '/' : ''
    }${item.replace('[id]', query.id as string)}`
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
              /{item.name.replace('_', ' ').toLowerCase()}
            </BreadcrumbName>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Breadcrumb;
