export default {
  questionsAndAnswers: {
    title: 'Питання та відповіді'
  },
  services: {
    menuItemTitle: 'Послуги',

    title: 'Не знаешь с чего начать? Начни с aksis',
    categories: {
      residencePermit: {
        title: 'ВНЖ послуги'
      },

      individuals: {
        title: 'фіз особам',
        itemList: [
          ['Допомога з картою побуту', '/resident-card'],
          ['Продовження терміну дії паспорта', '/international-passport?type=EXTENSION'],
          ['Отримання закордонного паспорта', '/international-passport?type=OBTAINING'],
          ['Польська посвідка на проживання', '/long-term-residence-permit'],
          ['Отримання іспанської візи', '/spanish-resident-card'],
          ['Отримання канадської візи', '/canadian-resident-card']
        ]
      },
      popular: {
        title: 'Популярне',
        itemList: [
          ['Отримання іспанської візи', '/spanish-resident-card'],
          ['Отримання канадської візи', '/canadian-resident-card']
        ]
      },
      admission: {
        title: 'Вступ',
        itemList: [
          ['Вступ до польського ВИШу', '/admission-to-university'],
          ['Запис дитини до школи', '/school-and-kindergarten?type=SCHOOL'],
          ['Запис дитини до дитсадка', '/school-and-kindergarten?type=KINDERGARTEN']
        ]
      },
      forBusiness: {
        title: 'Для бізнесу',
        itemList: [
          ['Токенізація бізнесу', '/business-tokenization'],
          ['Відкриття ІП – JDG', '/ip-opening-jdg'],
          ['Відкриття SP. Z O. O.', '/sp-opening-zoo']
        ]
      },
      transport: {
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
