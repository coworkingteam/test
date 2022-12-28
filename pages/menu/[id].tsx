import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IService, IServiceFields } from '@md-types/generated/contentful';
import contentfulClient from '@md-modules/shared/services/contentful';
import { ServicesTypes } from '@md-modules/shared/providers/menu-provider';
import { ServiceLayout } from '@md-modules/shared/layouts/service';
import { getServiceUIKit } from '@md-modules/shared/providers/menu-provider/helpers';
// utils
// @ts-ignore
import translate from 'translit-ru-ua';

const ServicePage = ({ service }: { service: IService | IService[] }) => {
  if (!service) {
    return null;
  }

  const isArray = Array.isArray(service);

  const data = isArray
    ? {
        type: 'WITH_TABS' as const,
        data: service.map((item) => ({
          data: item.fields,
          type: translate(item.fields.type) || '',
          title: item.fields.type || ''
        })),
        themeColor: getServiceUIKit(service[0].fields.serviceType as ServicesTypes).bgColor
      }
    : {
        type: 'WITHOUT_TABS' as const,
        data: service.fields,
        themeColor: getServiceUIKit(service.fields.serviceType as ServicesTypes).bgColor
      };

  return <ServiceLayout {...data} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await contentfulClient.getEntries<IServiceFields>({
    content_type: 'service',
    select: 'fields.slug'
  });

  return {
    paths: data.items.map((item) => ({ params: { id: item.fields.slug } })),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  try {
    const slug = params?.id;

    const data = await contentfulClient.getEntries<IServiceFields>({
      content_type: 'service',
      'fields.slug': slug,
      locale
    });

    const service = data.items.length < 2 ? data.items[0] : data.items;

    if (!service) {
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
        service: service
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
