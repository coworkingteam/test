import { Service } from '@md-modules/shared/types/service';
import { colors } from '@md-styles/styled/theme';

export const DATA: Service[] = [
  {
    img: '/static/images/canada.png',
    title: 'home.adsBlock.servicesTitles.canadianVisa',
    bgColor: colors.purple100,
    src: '/canadian-resident-card'
  },
  {
    img: '/static/images/spain.png',
    title: 'home.adsBlock.servicesTitles.spanishVisa',
    bgColor: colors.purple100,
    src: '/spanish-resident-card'
  },
  {
    img: '/static/images/resident-card.png',
    title: 'home.adsBlock.servicesTitles.residenceCard',
    bgColor: colors.purple100,
    src: '/resident-card'
  },
  {
    img: '/static/images/international-passport.png',
    title: 'home.adsBlock.servicesTitles.passport',
    bgColor: colors.purple100,
    src: '/international-passport?type=EXTENSION'
  },
  {
    img: '/static/images/renewal-driving-license.png',
    title: 'home.adsBlock.servicesTitles.replacementDriverLicense',
    bgColor: colors.green150,
    src: '/renewal-driving-license'
  }
];
