export default {
  baseURL: '/resident-card',
  welcome: {
    title: 'Поможем оформить заявление и ускорим получение вида на жительство',
    button: {
      title: 'Получить карту',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Как проходит процесс получения вида на жительство ?',
      content:
        'Процесс получения карты состоит из нескольких этапов:\n' +
        '- Прежде всего это представление пакета необходимых документов вместе с заполненной анкетой в зависимости от типа карты (рабочая, студенческая, семейная)\n' +
        '- После того, как документы будут успешно приняты, инспектор сообщит какие дополнительные справки и в какое время необходимо будет предоставить\n' +
        '- Подтверждением взятия Вашего дела на рассмотрение будет красный штамп в загранпаспорт, дающий полное право пребывания и трудоустройства в Польше до вынесения решения о Вашем представлении\n' +
        '- В ближайшее время после этого Вам будет назначаться дата визита для проведения собеседования с консулом и взятие биометрических данных\n' +
        '- После прохождения перечисленных шагов через некоторое время вы получите информацию о решении, вынесенном консулом по вашему делу, и заплатив сбор в размере 50 злотых. за пластиковую карту Вы станете ее счастливым обладателем!\n' +
        '- По разным причинам иногда представление может быть отклонено, однако успешная апелляция позволить все равно получить документ не начиная процесс с самого начала.\n'
    },
    {
      title: 'Почему происходят задержки и как их избежать ?',
      content:
        'Первая реальная преграда это очередь на подачу, в зависимости от сезона виртуальная приёмная может быть занята на месяц вперёд\n' +
        '- Решением может быть регистрация в очереди еще до сбора всех документов. Периода ожидания визита хватит чтобы получить все бумаги, а драгоценные недели уже будут сэкономлены\n' +
        '\n' +
        'Вторая и самая частая причина задержек - запрос дополнительных документов/справок/переводов. От обнаружения инспектором несоответствия до получения устраняющего его документа может пройти от 2 до 3 недель.\n' +
        '- Лучшим решением будет тщательная подготовка пакета документов с учётом возможных запросов (например перевод важного документа лучше сделать присяжным, что исключит как задержку так и возможные дополнительные траты как времени так и денег\n' +
        '- Такие бумаги как справку с места прописки, работы или учёбы лучше брать в последнюю очередь, чтобы дата выдачи не оказалась устаревшей к моменту когда дело дойдёт до рассмотрения\n' +
        '\n' +
        'Само собой предусмотреть всё невозможно, и некоторые документы придётся "доносить", на что инспектор даёт 14 дней без учёта времени пересылки бумаг почтой.\n' +
        '- Лучшее что Вы можете сделать ожидая свою карту - чаще проверять почтовый ящик, как физический так и электронный, чтобы отреагировать максимально оперативно, и не жалеть усилий чтобы получить и отправить необходимые бумаги в кратчайшие сроки'
    },
    {
      title: 'Какие документы и данные нужны для подачи ?',
      content:
        'Количество и вид документов для получения карты обихода зависит от ее типа (временная, рабочая, студенческая, долгосрочная), однако основной набор остается неизменным:\n' +
        '\n' +
        '- Правильно заполненная анкета-взнос, разная для каждого типа карты\n' +
        '- Оригинал и три полные копии загранпаспорта (или паспортов, если их у Вас несколько)\n' +
        '- 5 распечатанных цветных фото, сделанных с соблюдением актуальных требований консульства\n' +
        '- Документ или пакет документов на основе которых вы подаете на карту (справка о трудоустройстве, обучении, языковых курсах и т.д.)\n' +
        '- Оригинал и копия страхового полиса, отвечающего актуальным требованиям для типа карты, которую Вы хотите получить\n' +
        '- Переведенное у присяжного переводчика свидетельство о рождении\n' +
        '- Документ подтверждающий ваш адрес проживания на территории Польши\n' +
        '\n' +
        'Большинство справок и документов не трудны в получении, тем не менее наши эксперты гарантируют посильную помощь в их получении и оформлении. С полным списком документов для Вашего дела можно ознакомиться на нашей горячей линии или на официальном сайте консульства.'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Примерные сроки:',
        content:
          '7-30 дней очередь на подачу заявления\n' +
          '\n' +
          '14 дней срок на подачу недостающих или дополнительных бумаг\n' +
          '\n' +
          '90 дней - средний срок для дела о выдаче карты\n' +
          '\n' +
          '14 дней на составление и отправку апелляции\n'
      },
      price: {
        title: 'Стоимость:',
        content: '50 зл за изготовление пластиковой карты'
      }
    },
    rightSide: {
      description: {
        title: 'Описание услуги:',
        content:
          'Одной из ключевых составляющих быстрого получения вида на жительство является правильно собранный пакет документов, ошибки и несоответствия в котором чаще всего и становятся причиной задержек. Не менее важным будет также грамотное оформление сопровождающего письма который "напомнит" о Вашем деле если решение по нему не было вынесено перед окончанием указанного срока.\n' +
          '\n' +
          'Независимо от того на каком этапе находится Ваше дело, наша команда специалистов поможет Вам не только найти и устранить ошибки в целях ускорения принятия решения но и оформить грамотную и своевременную апеляцию в случае получения отказа\n'
      },
      button: {
        title: 'Получить карту',
        onClick: () => {}
      }
    }
  }
};
