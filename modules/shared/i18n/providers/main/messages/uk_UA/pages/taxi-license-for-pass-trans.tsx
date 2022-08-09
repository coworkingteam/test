export default {
  welcome: {
    title: 'Ліцензія таксі на пасажирські перевезення',
    button: {
      title: 'Получить лицензию',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Які документи потрібні для отримання ліцензії?',
      content:
        "Для отримання ліцензії на пасажирські перевезення у таксі Вам потрібно буде подати пакет документів до відділу громадського транспорту муніципального управління (Wydział Komunikacji i Transportu Starostwa Powiatowego). До цього пакета обов'язково повинні входити:\n" +
        '- Безпосередньо сама заява, що включає:\n' +
        "     * Особисту інформацію про підприємця на ім'я якого оформляється ліцензія (швидше за все про Вас)\n" +
        '     * Підтвердження реєстрації в CEIDG (Centralna Ewidencja Informacji o Działalności Gospodarczej) або KRS (Krajowy Rejestr Sądowy)\n' +
        '     * NIP (Numer Identyfikacji Podatkowej) Вашої фірми\n' +
        '     * Дані про те на яких умовах і де Ви збираєтеся здійснювати\n' +
        '        перевезення (у разі таксі – пасажирські)\n' +
        '     * Термін на який Ви б хотіли отримати ліцензію (від 2 до 50 років)\n' +
        '     * Список автомобілів на які поширюватиметься Ваша ліцензія (також потрібно надати право власності, довіреність на керування або довідку про лізинг/оренду на кожен з них)\n' +
        "- Посвідчення хорошої репутації, доступне тут (включає прикріплення до анкети офіційних виписок про те, що Ви або Ваші водії не були засуджені за злочини, що перешкоджають веденню комерційної діяльності пов'язаної з перевезеннями)\n" +
        '- Контракти про прийом на роботу всіх водіїв та довідки про несудимість за вищезгадані злочини\n' +
        '     * Довідки про несудимість мають бути датовані не раніше місяця перед поданням заяви, інакше юридично вони втрачають актуальність\n' +
        '- Список транспортних засобів для ліцензування та дані про них\n' +
        '     * Мова йде про таку інформацію як тип і марка авто, його призначення,\n' +
        '       реєстраційний номер, код VIN та документ, що підтверджує\n' +
        '       володіння транспортом - договір купівлі-продажу чи підтвердження\n' +
        '       оренди/лізингу\n' +
        '- Підтвердження оплати всіх зборів та податків\n' +
        '- Довіреність на адміністративну діяльність (якщо ліцензія оформляється на третю особу) та підтвердження оплати за її видачу\n'
    },
    {
      title: 'На який термін видається ліцензія і скільки це коштує?',
      content:
        'Ще на етапі заповнення заяви Ви можете вибрати термін надання ліцензії – від 2 до 50 років. Від цього терміну також залежатиме розмір збору та податку (10%) на кожен транспортний засіб:\n' +
        ' - 320 злотих - від 2 до 15 років + 35,20 злотих. за авто + виписка 3,20 зл\n' +
        ' - 380 злотих - від 15 до 30 років + 41,80 злотих. за авто + виписка 3,80 зл\n' +
        ' - 450 злотих - від 30 до 50 років + 49,50 злотих. за авто + виписка 4,50 зл\n' +
        '\n' +
        'До кожного авто на яке поширюється ліцензія потрібно зробити виписку, вартість якої дорівнює 1% вартості ліцензії\n' +
        '\n' +
        'У разі подання заяви про надання ліцензії на здійснення автомобільних перевезень на таксі одного або більше одного автомобіля, сам збір, сума податків за кожне авто та вартість відповідної кількості виписок підсумовуються та оплачуються разом\n' +
        '\n' +
        'За видачу ліцензії на будь-який транспортний засіб, не зазначений у заяві на отримання ліцензії, стягується оплата у розмірі 11% вартості ліцензії\n' +
        '\n' +
        'За зміну ліцензії стягується оплата у розмірі 10% від оплати за видачу ліцензії, а за видачу виписки з ліцензії при внесенні змін до неї стягується оплата у розмірі 5% від вартості ліцензії\n'
    },
    {
      title: 'Що може піти не так і як цього уникнути?',
      content:
        'Найбільше труднощів виникає на етапі подання пакета документів, оскільки у разі помилок, невідповідностей чи відсутності якоїсь довідки установа дає лише 7 днів на усунення проблеми, після чого заява більше недійсна та гроші повернути не вдасться\n' +
        '- Щоб цього уникнути, потрібно перевіряти пошту в перші дні після подання заяви і діяти оперативно, або проконсультуватися з нашими експертами, щоб не допустити жодних невідповідностей\n' +
        '\n' +
        'Автомобіль або автомобілі, якщо ви реєструєте більше одного, повинні відповідати всім нормам, передбаченим для отримання ліцензії на пасажирські перевезення, а саме:\n' +
        '- Мати таксометр та електронну фіскальну касу\n' +
        '- Аптечку першої допомоги та вогнегасник в салоні\n' +
        '- Запасне колесо та інструменти для його заміни\n' +
        '- Шашку з написом "TAXI" на даху\n' +
        '- Світловідбивний знак або конус на випадок екстреної зупинки\n' +
        '- Свідоцтво про пройдене ТО, а також дійсний страховий поліс\n' +
        '* Дізнатися як і де його оформити можна тут'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Подача заяви:',
        content: '1 робочий день'
      },
      registration: {
        title: 'Регистрация:',
        content: 'до 18 рабочих дней'
      },
      price: {
        title: 'Вартість:',
        content:
          '320 злотих - від 2 до 15 років + 35,20 злотих. за авто\n' +
          '380 злотих - від 15 до 30 років + 41,80 злотих. за авто\n' +
          '450 злотих - від 30 до 50 років + 49,50 злотих. за авто\n'
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          "В умовах сучасної урбаністики водіння автомобіля для багатьох асоціюється з безліччю незручностей, будь то пошук паркувального місця або постійні витрати пов'язані з утриманням автомобіля, саме тому попит на послуги таксі зростає з кожним роком, що приваблює безліч підприємців\n" +
          '\n' +
          "На жаль, оформлення ліцензії таксі - процес досить складний і трудомісткий, з огляду на необхідність отримання безлічі документів, у зв'язку з чим ми пропонуємо комплексну підтримку та допомогу на всіх етапах процедури\n"
      },
      button: {
        title: 'Получить лицензию',
        onClick: () => {}
      }
    }
  }
};
