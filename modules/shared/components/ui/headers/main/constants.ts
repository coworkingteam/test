import DevelopersDropdown from '@md-ui/headers/main/components/animated-navbar/components/dropdown-contents/DevelopersDropdown';

export const menuItems = [
  { l: 'Вид на жительство', h: '/resident-card' },
  { l: 'Загранпаспорт', h: '/international-passport' },
  { l: 'Лицензия такси на пасажирские перевозоки', h: '/taxi-license-for-pass-trans' },
  { l: 'Переоформление водительских прав на польские', h: '/renewal-driving-license' },
  { l: 'Страхование автомобиля', h: '/car-insurance' }
];

export const NAVBAR_CONFIG = [
  { title: 'Услуги', dropdown: DevelopersDropdown },
  { title: 'Вопросы и ответы', dropdown: DevelopersDropdown }
];
