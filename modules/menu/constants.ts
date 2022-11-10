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
    color: colors.yellow300,
    titleID: 'menu.services.categories.individuals.title',
    menuItems: menuItemsAdmission,
    previewIcon: '/static/images/stamp3 1.svg'
  },
  {
    type: 'FOR_BUSINESS',
    color: colors.blue100,
    titleID: 'menu.services.categories.forBusiness.title',
    menuItems: menuItemsRelatedBusiness,
    previewIcon: '/static/images/basket(dark).png'
  },
  {
    type: 'TRANSPORT',
    color: colors.green150,
    titleID: 'menu.services.categories.transport.title',
    menuItems: menuItemsTransport,
    previewIcon: '/static/images/Perspective_View_2_home-qksis 3 2.svg'
  },
  {
    type: 'RESIDENCE_PERMIT',
    color: colors.purple100,
    titleID: 'menu.services.categories.residencePermit.title',
    menuItems: menuItemsIndividual,
    previewIcon: '/static/images/documents.png'
  }
];
