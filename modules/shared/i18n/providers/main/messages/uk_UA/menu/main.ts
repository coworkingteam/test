export default {
  services: {
    menuItemTitle: 'Послуги',
    itemList: [
      ['Допомога з картою побуту', '/resident-card'],
      ['Продовження терміну дії паспорта', '/international-passport?type=EXTENSION'],
      ['Отримання закордонного паспорта', '/international-passport?type=OBTAINING'],
      ['Польська посвідка на проживання', '/long-term-residence-permit'],
      ['Вступ до польського ВИШу', '/admission-to-university'],
      ['Запис дитини до школи', '/school-and-kindergarten?type=SCHOOL'],
      ['Запис дитини до дитсадка', '/school-and-kindergarten?type=KINDERGARTEN'],
      ['Отримання іспанської візи', '/spanish-resident-card'],
      ['Отримання канадської візи', '/canadian-resident-card']
    ],
    categories: {
      forBusiness: {
        title: 'Для бізнесу',
        itemList: [['Токенізація бізнесу', '/business-tokenization']]
      },
      servicesForDrivers: {
        title: 'Послуги для авто',
        itemList: [
          ['Заміна водійських прав на польські', '/renewal-driving-license'],
          ['Страхування автомобіля', '/car-insurance'],
          ['Оформлення ліцензії таксі', '/taxi-license-for-pass-trans'],
          ['Реєстрація авто', '/car-registration'],
          ['Отримання Коду 95', '/code-95'],
          ['Розмитнення авто', '/customs'],
          ['Зняття авто з обліку', '/car-deregistration']
        ]
      }
    }
  }
};
