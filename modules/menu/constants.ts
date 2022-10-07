import {
  menuItemsAdmission,
  menuItemsIndividual,
  menuItemsRelatedBusiness,
  menuItemsTransport
} from '@md-ui/headers/main/constants';
import { colors } from '@md-styles/styled/theme';

export const MENU_LISTS = [
  {
    type: 'INDIVIDUALS',
    color: colors.purple100,
    titleID: 'menu.services.categories.individuals.title',
    menuItems: menuItemsIndividual.concat(menuItemsAdmission)
  },
  {
    type: 'FOR_BUSINESS',
    color: colors.blue100,
    titleID: 'menu.services.categories.forBusiness.title',
    menuItems: menuItemsRelatedBusiness
  },
  {
    type: 'TRANSPORT',
    color: colors.green150,
    titleID: 'menu.services.categories.transport.title',
    menuItems: menuItemsTransport
  }
];
