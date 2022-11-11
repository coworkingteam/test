import messages from '@md-modules/shared/i18n/providers/main/messages';
import ServicesMenu from '@md-ui/headers/main/components/animated-navbar/components/dropdown-contents/services';
import { BLOCKED_PAGES_LIST } from '@md-modules/shared/constants/global';

// menuItemsRelatedHuman
// menuItemsRelatedCar
// menuItemsRelatedBusiness

export const menuItemsIndividual = messages['ru-ru'].menu.services.categories.individuals.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.individuals.itemList.${messages[
      'ru-ru'
    ].menu.services.categories.individuals.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsPopular = messages['ru-ru'].menu.services.categories.popular.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.popular.itemList.${messages[
      'ru-ru'
    ].menu.services.categories.popular.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsAdmission = messages['ru-ru'].menu.services.categories.admission.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.admission.itemList.${messages[
      'ru-ru'
    ].menu.services.categories.admission.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsTransport = messages['ru-ru'].menu.services.categories.transport.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.transport.itemList.${messages[
      'ru-ru'
    ].menu.services.categories.transport.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
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

export const NAVBAR_CONFIG = [{ title: 'menu.services.menuItemTitle', dropdown: ServicesMenu }];
