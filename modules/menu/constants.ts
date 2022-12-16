import { colors } from '@md-styles/styled/theme';

interface IMenuItem {
  h: string;
  l: string;
}

export type MenuTypes = 'INDIVIDUALS' | 'FOR_BUSINESS' | 'TRANSPORT' | 'RESIDENCE_PERMIT' | 'POPULAR';

export interface IMenuItems {
  type: MenuTypes;
  color: string;
  titleID: string;
  menuItems: IMenuItem[];
  previewIcon: string;
}

export const getMenuUIData = ({ type, menuItems }: { type: MenuTypes; menuItems: IMenuItem[] }) => {
  switch (type) {
    case 'TRANSPORT':
      return {
        type: 'TRANSPORT',
        color: colors.green150,
        menuItems: menuItems,
        titleID: 'menu.services.categories.transport.title',
        previewIcon: '/static/images/car.png'
      };
    case 'POPULAR':
      return {
        type: 'POPULAR',
        color: colors.gray170,
        titleID: 'home.adsBlock.title',
        menuItems: menuItems,
        previewIcon: '/static/images/basket(dark).png'
      };
    case 'INDIVIDUALS':
      return {
        type: 'INDIVIDUALS',
        color: colors.yellow300,
        menuItems: menuItems,
        previewIcon: '/static/images/stamp.svg',
        titleID: 'menu.services.categories.individuals.title'
      };
    case 'FOR_BUSINESS':
      return {
        type: 'FOR_BUSINESS',
        color: colors.blue100,
        titleID: 'menu.services.categories.forBusiness.title',
        menuItems: menuItems,
        previewIcon: '/static/images/basket(dark).png'
      };
    case 'RESIDENCE_PERMIT':
      return {
        type: 'RESIDENCE_PERMIT',
        color: colors.purple100,
        titleID: 'menu.services.categories.residencePermit.title',
        menuItems: menuItems,
        previewIcon: '/static/images/documents.png'
      };
    default:
      return {
        type: 'INDIVIDUALS',
        color: colors.yellow300,
        menuItems: menuItems,
        previewIcon: '/static/images/stamp.svg',
        titleID: 'menu.services.categories.individuals.title'
      };
  }
};
