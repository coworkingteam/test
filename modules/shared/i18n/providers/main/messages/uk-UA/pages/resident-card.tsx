export default {
  baseURL: '/resident-card',
  welcome: {
    title: 'Допоможемо прискорити отримання карти побуту',
    button: {
      title: 'Отримати карту',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Як відбувається процес отримання посвідки на проживання ?',
      content:
        'Процес отримання карти складається з кількох етапів:\n' +
        '- Насамперед це подання пакету необхідних документів разом із заповненою анкетою залежно від типу картки (робоча, студентська, сімейна)\n' +
        '- Після того, як документи будуть успішно прийняті, інспектор повідомить які додаткові довідки і в який час необхідно буде надати\n' +
        '- Підтвердженням взяття Вашої справи на розгляд буде червоний штамп у закордонний паспорт, що дає повне право перебування та працевлаштування у Польщі до винесення рішення у Вашій справі\n' +
        '- У найближчий час після цього Вам призначать дату візиту для проведення співбесіди з консулом та взяття біометричних даних\n' +
        '- Після проходження перерахованих кроків через деякий час ви отримаєте інформацію про рішення, винесене консулом у вашій справі, та оплативши збір у розмірі 50 злотих за пластикову картку Ви станете її щасливим власником!\n' +
        '- З різних причин іноді подання може бути відхилено, проте успішна апеляція дозволить все одно отримати документ, не починаючи процес із самого початку\n'
    },
    {
      title: 'Чому відбуваються затримки та як їх уникнути ?',
      content:
        'Перша реальна перешкода це черга на подачу, залежно від сезону, віртуальна прийомна може бути зайнята на місяць вперед\n' +
        '- Вирішенням може бути реєстрація у черзі ще до зібрання всіх документів. Періоду очікування візиту вистачить щоб отримати всі необхідні папери, а дорогоцінні тижні вже будуть зекономлені\n' +
        '\n' +
        'Друга та найчастіша причина затримок - запит додаткових документів/довідок/перекладів. Від виявлення інспектором невідповідності до отримання документа, що його усуває, може пройти від 2 до 3 тижнів.\n' +
        '- Найкращим рішенням буде ретельна підготовка пакету документів з урахуванням можливих запитів (наприклад, переклад важливого документа краще зробити присяжним, що виключить як затримку так і можливі додаткові витрати часу і грошей\n' +
        '- Такі папери як довідку з місця прописки, роботи чи навчання краще брати в останню чергу, щоб дата видачі не виявилася застарілою до моменту, коли справа дійде до розгляду\n' +
        '\n' +
        'Само собою передбачити все неможливо, і деякі документи доведеться "доносити", на що інспектор дає 14 днів без урахування часу пересилання паперів поштою\n' +
        '- Найкраще що Ви можете зробити чекаючи на свою карту - частіше перевіряти поштову скриньку, як фізичну так і електронну, аби зреагувати максимально оперативно, і не шкодувати зусиль щоб отримати та відправити необхідні папери в найкоротші терміни\n'
    },
    {
      title: 'Як можна прискорити розгляд Вашої справи ?',
      content:
        'Крім перелічених вище пунктів завжди є шанс, що причина затримки не залежить від Вас, але на такий випадок передбачено кілька механізмів, і якщо використовувати їх правильно - справу можна легко зрушити з мертвої точки\n' +
        '\n' +
        'Перший це тзв. "Прискорювальний лист" в консульство (ponaglenie). При правильному оформленні він зверне увагу консула на Вашу справу та прискорить процес її розгляду. Загальноприйнятого формуляра для такого листа немає, проте він повинен містити заяву в м\'якій формі про те, що затягнутий розгляд заважає Вам побачитися з близькими, робити робочі поїздки або просто завдає незручностей. Такий лист можна і потрібно надсилати щомісяця після закінчення терміну, але найчастіше відповідь та результат Ви отримаєте після перших двох листів\n' +
        '\n' +
        'Якщо ж листи не допомагають, а доводити справу до суду немає часу та ресурсів Ви можете записатися на прийом до консула або інспектора, де зможете особисто переконатися на якому етапі знаходиться справа та дізнаєтесь причину затримки. Після такого візиту статистична більшість іноземців отримують картку протягом 20-30 днів.\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Приблизні терміни:',
        content:
          '7-30 днів черга на подання заяви\n' +
          '\n' +
          '14 днів термін на подачу відсутніх або додаткових документів\n' +
          '\n' +
          '90 днів – середній термін очікування рішення консула\n' +
          '\n' +
          '14 днів на складення та відправлення апеляції\n'
      },
      price: {
        title: 'Вартість послуги:',
        content: '50 зл за видання пластикової карти'
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          'Однією з ключових складових швидкого отримання карти побуту є правильно зібраний пакет документів, помилки та невідповідності в якому найчастіше і спричиняють затримки. Не менш важливим буде також грамотне оформлення листа, що супроводжує, який "нагадає" про Вашу справу якщо рішення не було винесене перед закінченням зазначеного терміну.\n' +
          '\n' +
          'Незалежно від того, на якому етапі знаходиться Ваша справа, наша команда фахівців допоможе Вам не тільки знайти та усунути помилки з метою прискорення прийняття рішення, але й оформити грамотну та своєчасну апеляцію у разі отримання відмови\n'
      },
      button: {
        title: 'Отримати карту',
        onClick: () => {}
      }
    }
  }
};
