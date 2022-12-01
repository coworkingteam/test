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
    previewIcon: '/static/images/stamp.svg'
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
    previewIcon: '/static/images/car.png'
  },
  {
    type: 'RESIDENCE_PERMIT',
    color: colors.purple100,
    titleID: 'menu.services.categories.residencePermit.title',
    menuItems: menuItemsIndividual,
    previewIcon: '/static/images/documents.png'
  },
  {
    type: 'POPULAR',
    color: '#fac32a',
    titleID: 'home.adsBlock.title',
    menuItems: [
      {
        l: 'home.adsBlock.servicesTitles.canadianVisa',
        h: '/canadian-resident-card'
      },
      {
        l: 'home.adsBlock.servicesTitles.spanishVisa',
        h: '/spanish-resident-card'
      },
      {
        l: 'home.adsBlock.servicesTitles.residenceCard',
        h: '/resident-card'
      },
      {
        l: 'home.adsBlock.servicesTitles.passport',
        h: '/international-passport?type=EXTENSION'
      },
      {
        l: 'home.adsBlock.servicesTitles.replacementDriverLicense',
        h: '/renewal-driving-license'
      }
    ],
    previewIcon: '/static/images/basket(dark).png'
  }
];
