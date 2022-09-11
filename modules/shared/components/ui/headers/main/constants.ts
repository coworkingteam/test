import messages from '@md-modules/shared/i18n/providers/main/messages';
import ServicesMenu from '@md-ui/headers/main/components/animated-navbar/components/dropdown-contents/services';

export const menuItemsRelatedHuman = messages['ru-ru'].menu.services.itemList.map((item, index) => ({
  l: `menu.services.itemList.${index}.0`,
  h: item[1]
}));

export const menuItemsRelatedCar = messages['ru-ru'].menu.services.categories.servicesForDrivers.itemList.map(
  (item, index) => ({
    l: `menu.services.categories.servicesForDrivers.itemList.${index}.0`,
    h: item[1]
  })
);

export const menuItemsRelatedBusiness = messages['ru-ru'].menu.services.categories.forBusiness.itemList.map(
  (item, index) => ({
    l: `menu.services.categories.forBusiness.itemList.${index}.0`,
    h: item[1]
  })
);

export const NAVBAR_CONFIG = [{ title: 'menu.services.title', dropdown: ServicesMenu }];
