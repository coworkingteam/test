import { Service } from '@md-modules/shared/types/service';
import { colors } from '@md-styles/styled/theme';

export const DATA: Service[] = [
  {
    img: '/static/images/canada.png',
    title: 'Виза CUAET',
    bgColor: colors.purple100,
    src: '/canadian-resident-card'
  },
  {
    img: '/static/images/spain.png',
    title: 'Испанская карта TIE',
    bgColor: colors.purple100,
    src: '/spanish-resident-card'
  },
  {
    img: '/static/images/resident-card.png',
    title: 'Карта побыту',
    bgColor: colors.purple100,
    src: '/resident-card'
  },
  {
    img: '/static/images/international-passport.png',
    title: 'Загранпаспорт',
    bgColor: colors.purple100,
    src: '/international-passport?type=EXTENSION'
  },
  {
    img: '/static/images/renewal-driving-license.png',
    title: 'Замена водительских прав',
    bgColor: colors.green150,
    src: '/renewal-driving-license'
  }
];
