import messages from '@md-modules/shared/i18n/providers/main/messages';
import { BLOCKED_PAGES_LIST } from '@md-modules/shared/constants/global';

export const menuItemsIndividual = messages['ru'].menu.services.categories.individuals.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.individuals.itemList.${messages[
      'ru'
    ].menu.services.categories.individuals.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsPopular = messages['ru'].menu.services.categories.popular.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.popular.itemList.${messages['ru'].menu.services.categories.popular.itemList.findIndex(
      (menuItem) => menuItem[0] === item[0]
    )}.0`,
    h: item[1]
  }));

export const menuItemsAdmission = messages['ru'].menu.services.categories.admission.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.admission.itemList.${messages[
      'ru'
    ].menu.services.categories.admission.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsTransport = messages['ru'].menu.services.categories.transport.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.transport.itemList.${messages[
      'ru'
    ].menu.services.categories.transport.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));

export const menuItemsRelatedBusiness = messages['ru'].menu.services.categories.forBusiness.itemList
  .filter((item) => !BLOCKED_PAGES_LIST.some((page) => page === item[1].split('?')[0]))
  .map((item) => ({
    l: `menu.services.categories.forBusiness.itemList.${messages[
      'ru'
    ].menu.services.categories.forBusiness.itemList.findIndex((menuItem) => menuItem[0] === item[0])}.0`,
    h: item[1]
  }));
