import { colors } from '@md-styles/styled/theme';
import { ServicesTypes } from '@md-modules/menu/constants';

export const getMenuUIData = (type: ServicesTypes) => {
  switch (type) {
    case 'TRANSPORT':
      return colors.green150;
    case 'INDIVIDUALS':
      return colors.yellow300;
    case 'FOR_BUSINESS':
      return colors.blue100;
    case 'RESIDENCE_PERMIT':
      return colors.purple100;
    default:
      return colors.yellow300;
  }
};
