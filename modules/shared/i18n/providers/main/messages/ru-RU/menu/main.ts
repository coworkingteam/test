export default {
  questionsAndAnswers: {
    title: 'Вопросы и ответы'
  },
  services: {
    menuItemTitle: 'Услуги',

    title: 'Не знаешь с чего начать? Начни с aksis',
    categories: {
      root: {
        title: 'Меню'
      },

      residencePermit: {
        title: 'ВНЖ услуги'
      },

      individuals: {
        title: 'физ лицам',
        itemList: [
          ['Помощь с картой побыту', '/resident-card'],
          ['Продление загранпаспорта', '/international-passport?type=EXTENSION'],
          ['Получение загранпаспорта', '/international-passport?type=OBTAINING'],
          ['Польский вид на жительство', '/long-term-residence-permit'],
          ['Получение испанской визы', '/spanish-resident-card'],
          ['Получение канадской визы', '/canadian-resident-card']
        ]
      },
      popular: {
        title: 'Популярное',
        itemList: [
          ['Получение испанской визы', '/spanish-resident-card'],
          ['Получение канадской визы', '/canadian-resident-card']
        ]
      },
      admission: {
        title: 'Поступление',
        itemList: [
          ['Поступление в польский ВУЗ', '/admission-to-university'],
          ['Запись ребёнка в школу', '/school-and-kindergarten?type=SCHOOL'],
          ['Запись ребёнка в детсад', '/school-and-kindergarten?type=KINDERGARTEN']
        ]
      },
      forBusiness: {
        title: 'Для бизнеса',
        itemList: [
          ['Токенизация бизнеса', '/business-tokenization'],
          ['Открытие ИП - JDG', '/ip-opening-jdg'],
          ['Открытие SP. Z O. O.', '/sp-opening-zoo']
        ]
      },
      transport: {
        title: 'Транспорт',
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
