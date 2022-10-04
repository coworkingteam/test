import * as React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Link } from '@md-ui/link';
// views
import { Title, Wrapper } from './views';
// constants
import { MENU_LISTS } from '@md-modules/menu/constants';

const Menu = () => {
  const { query } = useRouter();

  const data = MENU_LISTS.find((item) => query?.type === item.type) || MENU_LISTS[0];

  return (
    <Wrapper>
      <Title>
        <FormattedMessage id={data.titleID} />
      </Title>

      {data.menuItems.map(({ l, h }) => (
        <Link preset='menu' key={l} href={h}>
          <FormattedMessage id={l} />
        </Link>
      ))}
    </Wrapper>
  );
};

export default Menu;
