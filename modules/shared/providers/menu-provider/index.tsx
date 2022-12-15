import React from 'react';
// types
import { IService } from '@md-types/generated/contentful';
import { getServiceUIKit } from '@md-modules/shared/providers/menu-provider/helpers';
// utils
import _ from 'lodash';
// @ts-ignore
import translate from 'translit-ru-ua';

export type ServicesTypes = 'POPULAR' | 'INDIVIDUALS' | 'RESIDENCE_PERMIT' | 'FOR_BUSINESS' | 'TRANSPORT';

export interface IMenuItem {
  type: ServicesTypes;
  label: string;
  data: {
    l: string;
    h: string;
  }[];
  bgColor?: string;
}
interface Context {
  menuItems: IMenuItem[];
}

interface ContextProps {
  menuItems: IService[];
}

export const MenuAPIContext = React.createContext<Context>({
  menuItems: []
});

const MenuProvider: React.FC<ContextProps> = ({ children, menuItems }) => {
  const items = Object.entries({
    ...(menuItems.some((item) => item.fields.isPopularService) && {
      POPULAR: menuItems.filter((item) => item.fields.isPopularService)
    }),
    ..._.groupBy(menuItems, (item) => item.fields.serviceType)
  }).map((item) => ({
    type: item[0] as ServicesTypes,
    ...getServiceUIKit(item[0] as ServicesTypes),
    data: item[1].map((item) => ({
      h: `/menu/${item.fields.slug}${item.fields.type ? `?type=${translate(item.fields.type)}` : ''}`,
      l: item.fields.menuTitle
    }))
  }));

  return (
    <MenuAPIContext.Provider
      value={{
        menuItems: items
      }}
    >
      {children}
    </MenuAPIContext.Provider>
  );
};

export default MenuProvider;
