export default {
  services: {
    title: 'Услуги',
    itemList: [
      ['Помощь с картой побыту', '/resident-card'],
      ['Продление загранпаспорта', '/international-passport?type=EXTENSION'],
      ['Получение загранпаспорта', '/international-passport?type=OBTAINING'],
      ['Польский вид на жительство', '/long-term-residence-permit'],
      ['Поступление в польский ВУЗ', '/admission-to-university'],
      ['Запись ребёнка в школу', '/school-and-kindergarten?type=SCHOOL'],
      ['Запись ребёнка в детсад', '/school-and-kindergarten?type=KINDERGARTEN'],
      ['Получение испанской визы', '/spanish-resident-card'],
      ['Получение канадской визы', '/canadian-resident-card']
    ],
    categories: {
      forBusiness: {
        title: 'Для бизнеса',
        itemList: [['Токенизация бизнеса', '/business-tokenization']]
      },
      servicesForDrivers: {
        title: 'Авто услуги',
        itemList: [
          ['Замена прав на польские', '/renewal-driving-license'],
          ['Страхование автомобиля', '/car-insurance'],
          ['Оформление лицензии такси', '/taxi-license-for-pass-trans'],
          ['Регистрация авто', '/car-registration'],
          ['Получение Кода 95', '/code-95'],
          ['Растаможка авто', '/customs'],
          ['Снятие авто с учёта', '/car-deregistration']
        ]
      }
    }
  }
};
