import React from 'react';
// hooks
import { useRouter } from 'next/router';
// views
import { BreadcrumbName, BackIcon, Wrapper } from '@md-ui/headers/main/components/bread-crumb/views';

interface Props {
  showBreadcrumb: boolean;
}

const Breadcrumb: React.FC<Props> = ({ showBreadcrumb }) => {
  const { push, pathname, query } = useRouter();

  const routersList = pathname.split('/').filter((item) => item.length);

  const onClickHome = () => push('/');

  if (pathname === '/') {
    return null;
  }

  return (
    <Wrapper showBreadcrumb={showBreadcrumb}>
      <BackIcon onClick={onClickHome} src='/static/icons/left-arrow.svg' alt='left-arrow' />
      <BreadcrumbName onClick={onClickHome}>home</BreadcrumbName>

      {routersList.map((item, index) => {
        const isLastChild = index + 1 === routersList.length;
        const url = item
          .replace('[id]', query.id as string)
          .split('-')
          .join(' ');

        return (
          <BreadcrumbName key={item} isLastChild={isLastChild} onClick={() => !isLastChild && push(`/${item}`)}>
            /{url}
          </BreadcrumbName>
        );
      })}
    </Wrapper>
  );
};

export default Breadcrumb;
