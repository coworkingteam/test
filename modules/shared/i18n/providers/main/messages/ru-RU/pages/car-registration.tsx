export default {
  welcome: {
    title: 'Регистрация авто в Польше',
    button: {
      title: 'Получить карту',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Какие документы нужны для заявления на регистрацию ?',
      content:
        'Прежде всего нужно убедиться что у Вас есть все документы подтверждающие легальность купли-продажи авто, а также документы  которые прошлый владелец обязан передать новому, а именно:\n' +
        '- Сам договор купли-продажи, содержащий данные продавца, покупателя, информацию о транспорте и стоимости самой сделки\n' +
        '- Техпаспорт авто, то есть документ содержащий данные о его марке, модели, мощности двигателя, ёмкости бензобака и т.д.\n' +
        '- Свидетельство о регистрации транспортного средства, подтверждающее постановку автомобиля на учёт и принадлежность конкретному владельцу (При покупке автомобиля с рук будет содержать данные предыдущего владельца, при купле же в салоне вместо него нужно предоставить подтверждение покупки авто - подойдет чек, фактура или договор продажи)\n' +
        '- Страховой полис (если есть), если он ещё действителен. В противном случае его нужно будет оформить, а как это сделать можно узнать здесь\n' +
        '\n' +
        ' Для регистрации авто нужно подать заявление и пакет соответствующих документов в отдел общественного транспорта муниципального управления (Wydział Komunikacji i Transportu Starostwa Powiatowego). Кроме перечисленных выше документов вам пригодятся:\n' +
        '- Заявление владельца авто о его регистрации, бланк можно найти здесь\n' +
        '- Плашки с номерами машины, если у неё был предыдущий владелец\n' +
        '- Ваш загранпаспорт или другое удостоверение личности (если есть) вместе с визой или другим документом подтверждающим легальность пребывания в стране. Срок действия регистрации будет привязан к сроку истечения этого документа, поэтому не стоит заниматься покупкой авто за несколько месяцев до истечения визы или ВНЖ\n' +
        '- Если хозяином машины числится фирма а не физ. лицо, нужно предоставить выписку из KRS (Krajowy Rejestr Sądowy) о её регистрации\n' +
        '- В случае регистрации авто на имя третьего лица нужно подготовить нотариально подтверждённую доверенность и её присяжный перевод, если она была выдана в другой стране\n'
    },
    {
      title: 'Какова стоимость процедуры и от чего она зависит ?',
      content:
        'Если речь идет о транспортном средстве купленном или прежде зарегистрированном в Польше, нужно будет обратиться сначала в отделение налоговой службы по Вашему месту проживания. Там нужно будет заполнить форму РСС-3 (саму форму можно получить на месте или скачать формуляр с официального сайта налоговой) и оплатить налоговый сбор на покупку автотранспорта, который составляет 2% от его стоимости брутто. На оплату этого налога Вам даётся 14 дней с момента подписания договора купли-продажи\n' +
        '\n' +
        'Регистрация авто также подразумевает дополнительные оплаты и сборы, размер которых зависит в основном от того, на какие номера регистрируется средство. Здесь у автовладельца есть три варианта:\n' +
        '\n' +
        '- Регистрация авто на старых номерах, которые получил при регистрации предыдущий владелец. В таком случае перерегистрация авто на вас обойдётся всего в 81 злотый\n' +
        '- Регистрация на новых номерах обяжет вас также заплатить сбор за их изготовление и добавление в базу, что поднимет стоимость до 180,50 зл\n' +
        '- Регистрация на номерах по индивидуальному заказу. Цена плашек с текстом по вашему желанию - 1000 злотых, но остальные сборы остаются без изменений, а именно:\n' +
        '\n' +
        '- 54,00 зл стоит новый регистрационный документ, в эту цену вписаны почти все пошлины самого муниципального учреждения\n' +
        '- 13,50 зл будет стоить временный документ, позволяющий пользоваться авто пока идёт процесс регистрации\n' +
        '- 18,50 зл нужно будет отдать за голографическую наклейку номера, подтверждающую взятие авто на учёт\n' +
        '- 12,50 зл стоит голографическая наклейка на номера, подтверждающая легальность их происхождения\n' +
        '- 2,00 зл оплаты за взятие вашего заявления на рассмотрение\n' +
        '\n' +
        'В случае регистрации транспорта на третье лицо нужно будет внести 17 злотых взноса за изготовление официальной доверенности на авто\n'
    },
    {
      title: 'О чём нужно помнить регистрируя авто ?',
      content:
        'Чтобы не попасть в неловкую ситуацию при подаче заявления нужно позаботиться о том чтобы все документы были в порядке а регистрируемый автомобиль отвечал всем требованиям. Прежде всего следует убедиться что:\n' +
        '\n' +
        '- Автомобиль прошёл техобслуживание и его срок истекает не раньше чем через 3 месяца, иначе в регистрации может быть отказано\n' +
        '- Автомобиль застрахован обязательным страховым полисом, и он оформлен (или переоформлен) на Вас как на нового владельца. В случае если бывший владелец недоступен Вы можете самостоятельно разорвать его контракт со страховой компанией как новый хозяин авто\n' +
        '\n' +
        'В случае если покупка авто осуществляется с целью перепродажи, то справку о его сбыте нужно предоставить в муниципальное учреждение, на учёте которого транспорт находился до покупки, или аналогичную справку доставить в ваше отделение налоговой службы, заполнив соответствующую форму (её можно получить на месте или скачать на официальном сайте)\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Примерные сроки:',
        content: 'До 30 дней от подачи заявления до получения'
      },
      registration: {
        title: 'Регистрация:',
        content: 'От заявки до перевыпуска 30 до 50 рабочих дней'
      },
      price: {
        title: 'Стоимость услуги:',
        content:
          'До 100 зл. за регистрацию на старых номерах\n' +
          'До 200 зл. за регистрацию на новых номерах\n' +
          'До 1200 зл. за регистрацию на заказных номерах\n',
        reMaking: '+ Налог 2% от цены авто'
      }
    },
    rightSide: {
      description: {
        title: 'Описание услуги:',
        content:
          'Для нашего человека, живи он в Минске, Киеве или Варшаве автомобиль всегда будет символом достатка и роскоши. Многие приезжают в Польшу за более высокооплачиваемой работой, поэтому покупка автомобиля здесь становится вопросом времени. Собственное транспортное средство дарит не только свободу передвижения по городу и стране, но и открывает перспективы для работы!\n' +
          '\n' +
          'Вторым заманчивым фактором для покупки автомобиля в Европе является его цена, так как принцип налогообложения транспорта здесь сильно отличается от привычного нам. Последней преградой перед становлением счастливого обладателя заветного Мерседеса - его регистрация, поэтому наша команда рада будет взять этот процесс на себя, чтобы Вы могли скорее взяться за руль\n'
      },
      button: {
        title: 'Заменить права',
        onClick: () => {}
      }
    }
  }
};
