import * as React from 'react';
// libs
import { FormattedMessage } from 'react-intl';
// hooks
import { useRouter } from 'next/router';
// components
import { Link } from '@md-ui/link';
// theme
import { colors } from '@md-styles/styled/theme';
// views
import {
  Title,
  Wrapper,
  Icon,
  InnerWrapper,
  RightSide,
  ContentWrapper,
  LeftSide,
  EmptyText,
  PreviewIcon,
  EmptyBlockWrapper
} from './views';
// constants
import { MENU_LISTS } from '@md-modules/menu/constants';

const Menu = () => {
  const { query } = useRouter();

  const data = MENU_LISTS.find((item) => query?.type === item.type) || MENU_LISTS[0];

  return (
    <Wrapper>
      <InnerWrapper>
        <Title>
          <FormattedMessage id={data.titleID} />
        </Title>

        <ContentWrapper>
          <LeftSide>
            {data.menuItems.length ? (
              data.menuItems.map(({ l, h }) => (
                <Link key={l} hoverBGColor={data.color} hoverColor={colors.black600} preset='menu' href={h}>
                  <FormattedMessage id={l} />

                  <Icon src='/static/icons/send-arrow-black.svg' alt='send-arrow' />
                </Link>
              ))
            ) : (
              <EmptyBlockWrapper>
                <EmptyText>These services are still under development. We will welcome you soon!</EmptyText>
                <Link hoverBGColor={data.color} hoverColor={colors.black600} preset='default' href='/'>
                  Back to home page
                </Link>
              </EmptyBlockWrapper>
            )}
          </LeftSide>

          <RightSide colorBG={data.color}>
            <PreviewIcon src={data.previewIcon} alt='send-arrow' />
          </RightSide>
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Menu;
