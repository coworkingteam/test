import ServicesMenu from '@md-ui/headers/main/components/animated-navbar/components/dropdown-contents/services';

export const menuItemsRelatedHuman = [
  { l: 'Вид на жительство', h: '/resident-card' },
  { l: 'Долгосрочный вид на жительство', h: '/long-term-residence-permit' },
  { l: 'Загранпаспорт', h: '/international-passport' },
  { l: 'Поступление в ВУЗ', h: '/admission-to-university' }
];

export const menuItemsRelatedCar = [
  { l: 'Лицензия такси на пасажирские перевозоки', h: '/taxi-license-for-pass-trans' },
  { l: 'Переоформление водительских прав на польские', h: '/renewal-driving-license' },
  { l: 'Страхование автомобиля', h: '/car-insurance' },
  { l: 'Регистрация авто в Польше', h: '/car-registration' },
  { l: 'Растаможка авто в Польше', h: '/customs' },
  { l: 'Снятие авто с учёта в Польше', h: '/car-deregistration' }
];

export const menuItemsRelatedBusiness = [{ l: 'Токенизация бизнеса в Польше', h: '/business-tokenization' }];

export const NAVBAR_CONFIG = [{ title: 'Услуги', dropdown: ServicesMenu }];
