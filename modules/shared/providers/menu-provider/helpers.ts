import { colors } from '@md-styles/styled/theme';
import { ServicesTypes } from '@md-modules/menu/constants';

export const getServiceUIKit = (type: ServicesTypes) => {
  switch (type) {
    case 'INDIVIDUALS':
      return {
        label: 'menu.services.categories.individuals.title',
        bgColor: colors.yellow300
      };
    case 'RESIDENCE_PERMIT':
      return {
        label: 'menu.services.categories.residencePermit.title',
        bgColor: colors.purple100
      };
    case 'FOR_BUSINESS':
      return {
        label: 'menu.services.categories.forBusiness.title',
        bgColor: colors.blue100
      };
    case 'POPULAR':
      return {
        label: 'menu.services.categories.popular.title',
        // TODO fix color
        bgColor: '#F1A3A3'
      };
    case 'TRANSPORT':
      return {
        label: 'menu.services.categories.transport.title',
        bgColor: colors.green150
      };
    default:
      return {
        label: 'menu.services.categories.popular.title',
        bgColor: colors.gray170
      };
  }
};
