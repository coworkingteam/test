import * as React from 'react';
// libs
import { FormattedMessage, useIntl } from 'react-intl';
// components
import { NextSeo } from 'next-seo';
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
import { IMenuItems } from '@md-modules/menu/constants';

interface Props {
  data: IMenuItems;
}

const Menu: React.FC<Props> = ({ data }) => {
  const intl = useIntl();

  return (
    <>
      <NextSeo
        title={`${intl.formatMessage({ id: data.titleID })} | aksis`}
        description='This example uses more of the available config options.'
        openGraph={{
          title: intl.formatMessage({ id: data.titleID })
        }}
      />

      <Wrapper>
        <InnerWrapper>
          <Title>
            <FormattedMessage id={data.titleID} />
          </Title>

          <ContentWrapper>
            <LeftSide>
              {data.menuItems.length ? (
                data.menuItems.map(({ l, h }) => (
                  <Link
                    key={l}
                    hoverBGColor={data.color}
                    hoverColor={colors.black600}
                    preset='menu'
                    href={'/menu/' + h}
                  >
                    {l}

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
    </>
  );
};

export default Menu;
