import messages from '@md-modules/shared/i18n/providers/main/messages';
import ServicesMenu from '@md-ui/headers/main/components/animated-navbar/components/dropdown-contents/services';
import { BLOCKED_PAGES_LIST } from '@md-modules/shared/constants/global';

export const menuItemsRelatedHuman = messages['ru-ru'].menu.services.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.itemList.${messages['ru-ru'].menu.services.itemList.findIndex(
      (menuItem) => menuItem[0] === item[0]
    )}.0`,
    h: item[1]
  }));

export const menuItemsRelatedCar = messages['ru-ru'].menu.services.categories.servicesForDrivers.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.servicesForDrivers.itemList.${messages[
      'ru-ru'
    ].menu.services.categories.servicesForDrivers.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsRelatedBusiness = messages['ru-ru'].menu.services.categories.forBusiness.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.forBusiness.itemList.${messages[
      'ru-ru'
    ].menu.services.categories.forBusiness.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const NAVBAR_CONFIG = [{ title: 'menu.services.title', dropdown: ServicesMenu }];
