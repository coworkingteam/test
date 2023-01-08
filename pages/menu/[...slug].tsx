import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IService, IServiceFields } from '@md-types/generated/contentful';
import contentfulClient from '@md-modules/shared/services/contentful';
import { getMenuUIData, IMenuItems, ServicesTypes } from '@md-modules/menu/constants';
import { ServiceLayout } from '@md-modules/shared/layouts/service';
import { getServiceUIKit } from '@md-modules/shared/providers/menu-provider/helpers';
import Menu from '@md-modules/menu';
import { MainLayout } from '@md-modules/shared/layouts/main';
// utils
// @ts-ignore
import translate from 'translit-ru-ua';

export enum PageTypes {
  MENU = 'MENU',
  SERVICE = 'SERVICE'
}

const ServicePage = (
  data: { typePage: PageTypes.MENU; data: IMenuItems } | { typePage: PageTypes.SERVICE; data: IService | IService[] }
) => {
  if (!data) {
    return null;
  }

  switch (data.typePage) {
    case PageTypes.MENU:
      return (
        <MainLayout>
          <Menu data={data.data} />
        </MainLayout>
      );
    case PageTypes.SERVICE: {
      const props = Array.isArray(data.data)
        ? {
            type: 'WITH_TABS' as const,
            data: data.data.map((item) => ({
              data: item.fields,
              type: translate(item.fields.type) || '',
              title: item.fields.type || ''
            })),
            themeColor: getServiceUIKit(data.data[0].fields.serviceType as ServicesTypes).bgColor
          }
        : {
            type: 'WITHOUT_TABS' as const,
            data: data.data.fields,
            themeColor: getServiceUIKit(data.data.fields.serviceType as ServicesTypes).bgColor
          };

      return <ServiceLayout {...props} />;
    }
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const data = await contentfulClient.getEntries<IServiceFields>({
    content_type: 'service',
    select: 'fields.slug,fields.serviceType'
  });

  const paths = data.items
    .map((item) =>
      (locales as string[]).map((locale) => ({
        params: { slug: [item.fields.serviceType as string] },
        locale
      }))
    )
    .flat()
    .concat(
      data.items
        .map((item) =>
          (locales as string[]).map((locale) => ({
            params: {
              slug: [item.fields.serviceType, item.fields.slug]
            },
            locale
          }))
        )
        .flat(),
      (locales as string[])
        .map((locale) => ({
          params: {
            slug: ['POPULAR']
          },
          locale
        }))
        .flat()
    );

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  try {
    const slug = params?.slug as string[];
    const isMenuPage = slug.length < 2;

    const additionalParams =
      slug.length === 1
        ? slug[0] !== 'POPULAR'
          ? { 'fields.serviceType': (slug[0] as ServicesTypes) || 'INDIVIDUALS' }
          : { 'fields.isPopularService': true }
        : { 'fields.slug': slug[1] };

    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'service',
      ...additionalParams,
      locale
    });

    if (!data) {
      return {
        redirect: {
          destination: '/404',
          permanent: false
        },
        revalidate: 20
      };
    }

    return {
      props: {
        data: isMenuPage
          ? getMenuUIData({
              type: (slug[0] as ServicesTypes) || 'INDIVIDUALS',
              menuItems: data.items.map((item) => ({
                h: `${item.fields.serviceType}/${
                  item.fields.slug + (item.fields.type ? `?type=${translate(item.fields.type)}` : '')
                }`,
                l: item.fields.menuTitle
              }))
            })
          : data.items.length < 2
          ? data.items[0]
          : data.items,
        typePage: isMenuPage ? PageTypes.MENU : PageTypes.SERVICE
      },
      revalidate: 20
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        retrieved: true
      },
      revalidate: 20
    };
  }
};

export default ServicePage;
