import * as React from 'react';
import Menu from '@md-modules/menu';
import { GetServerSideProps } from 'next';
import { MainLayout } from '@md-modules/shared/layouts/main';
import contentfulClient from '@md-modules/shared/services/contentful';
import { IServiceFields } from '@md-types/generated/contentful';
import { getMenuUIData, IMenuItems, MenuTypes } from '@md-modules/menu/constants';
// utils
// @ts-ignore
import translate from 'translit-ru-ua';

const MenuPage = ({ data }: { data: IMenuItems }) => {
  if (!data) {
    return null;
  }

  return (
    <MainLayout>
      <Menu data={data} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  try {
    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'service',
      select: 'fields.menuTitle,fields.slug,fields.type,fields.isPopularService',
      ...(query.type !== 'POPULAR' && { 'fields.serviceType': (query.type as MenuTypes) || 'INDIVIDUALS' }),
      ...(query.type === 'POPULAR' && { 'fields.isPopularService': true }),
      locale
    });

    return {
      props: {
        data: getMenuUIData({
          type: (query.type as MenuTypes) || 'INDIVIDUALS',
          menuItems: data.items.map((item) => ({
            h: item.fields.slug + (item.fields.type ? `?type=${translate(item.fields.type)}` : ''),
            l: item.fields.menuTitle
          }))
        }),
        revalidate: 20
      }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        retrieved: true,
        revalidate: 20
      }
    };
  }
};

export default MenuPage;
