export default {
  welcome: {
    title: 'Реєстрація авто у Польщі',
    button: {
      title: 'Зареєструвати авто',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Які документи потрібні для заяви на реєстрацію ?',
      content:
        "Насамперед потрібно переконатися, що у Вас є всі документи, що підтверджують легальність купівлі-продажу авто, а також документи, які попередній власник зобов'язаний передати новому, а саме:\n" +
        '- Сам договір купівлі-продажу, що містить дані продавця, покупця, інформацію про транспорт та вартість самої угоди\n' +
        '- Техпаспорт авто, тобто документ, що містить дані про його марку, модель, потужність двигуна, ємність бензобака і т.д.\n' +
        '- Свідоцтво про реєстрацію транспортного засобу, що підтверджує постановку автомобіля на облік та його належність конкретному власнику (При покупці автомобіля з рук міститиме дані попереднього власника, при покупці ж у салоні замість нього потрібно надати підтвердження покупки авто - підійде чек, фактура або договір продажу)\n' +
        '- Страховий поліс (якщо є), якщо він ще дійсний. В іншому випадку його потрібно буде оформити, а як саме - можна дізнатися тут\n' +
        '\n' +
        ' Для реєстрації авто потрібно подати заяву та пакет відповідних документів до відділу громадського транспорту муніципального управління (Wydział Komunikacji i Transportu Starostwa Powiatowego). Крім перерахованих вище документів вам знадобляться:\n' +
        '- Заява власника авто про його реєстрацію, бланк можна знайти тут\n' +
        '- Плашки з номерами машини, якщо вона мала попереднього власника\n' +
        "- Ваш закордонний паспорт або інше посвідчення особи (якщо є) разом із візою або іншим документом, що підтверджує легальність перебування в країні. Термін дії реєстрації буде прив'язаний до терміну закінчення цього документа, тому не варто займатися покупкою авто за кілька місяців до закінчення візи або карти побуту\n" +
        '- Якщо  машина знаходиться у власності фірми а не фіз.особи, потрібно надати виписку з KRS (Krajowy Rejestr Sądowy) про її реєстрацію\n' +
        "- У разі реєстрації авто на ім'я третьої особи потрібно підготувати нотаріально підтверджену довіреність та її присяжний переклад, якщо вона була видана в іншій країні\n"
    },
    {
      title: 'Яка вартість процедури і від чого вона залежить ?',
      content:
        'Якщо йдеться про транспортний засіб, куплений або раніше зареєстрований у Польщі, потрібно буде звернутися спочатку до відділення податкової служби за Вашим місцем проживання. Там потрібно буде заповнити форму РСС-3 (саму форму можна отримати на місці або завантажити формуляр з офіційного сайту податкової) та сплатити податковий збір на купівлю автотранспорту, який становить 2% від його вартості брутто. На сплату цього податку Вам надається 14 днів з моменту підписання договору купівлі-продажу\n' +
        '\n' +
        'Реєстрація авто також передбачає додаткові оплати та збори, розмір яких залежить переважно від того, на які номери реєструється транспорт. На цьому етапі автовласник має три варіанти:\n' +
        '\n' +
        '- Реєстрація авто на старих номерах, які отримав під час реєстрації попередній власник. У такому разі перереєстрація авто на вас обійдеться всього у 81 злотий\n' +
        "- Реєстрація на нових номерах зобов'яже вас також заплатити збір за їх виготовлення та додавання до бази, що підніме вартість до 180,50 злотих\n" +
        '- Реєстрація на номерах під індивідуальне замовлення. Ціна плашок з текстом за вашим бажанням - 1000 злотих, але решта зборів залишається без змін, а саме:\n' +
        '\n' +
        '- 54,00 зл коштує новий реєстраційний документ, в цю ціну вписані майже всі збори самої муніципальної установи\n' +
        '- 13,50 злотих коштуватиме тимчасовий документ, що дозволяє користуватися авто поки триває процес реєстрації\n' +
        '- 18,50 злотих потрібно буде віддати за голографічну наклейку номера, що підтверджує взяття авто на облік\n' +
        '- 12,50 злотих коштує голографічна наклейка на номери, що підтверджує легальність їх походження\n' +
        '- 2,00 зл оплати за взяття вашої заяви на розгляд\n' +
        '\n' +
        'У разі реєстрації транспорту на третю особу потрібно буде внести 17 злотих внеску за виготовлення офіційної довіреності на авто\n'
    },
    {
      title: "Про що потрібно пам'ятати реєструючи авто ?",
      content:
        'Щоб не потрапити в незручну ситуацію при подачі заяви потрібно подбати про те, щоб усі документи були в порядку, а реєстрований автомобіль  відповідав усім вимогам. Насамперед слід переконатися що:\n' +
        '\n' +
        '- Автомобіль пройшов техобслуговування та його термін спливає не раніше ніж через 3 місяці, інакше у реєстрації може бути відмовлено\n' +
        "- Автомобіль застрахований обов'язковим страховим полісом, і він оформлений (або переоформлений) на Вас як нового власника. Якщо колишній власник недоступний Ви можете самостійно розірвати його контракт зі страховою компанією як новий власник авто\n" +
        '\n' +
        'Якщо купівля авто здійснюється з метою перепродажу, то довідку про його продаж потрібно протягом 30 днів з моменту набуття надати до муніципальної установи, на обліку якої транспорт перебував до покупки, або аналогічну довідку доставити до вашого відділення податкової служби, заповнивши відповідну форму (її можна отримати на місці або завантажити з офіційного сайту)\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Приблизні терміни:',
        content: 'До 30 днів від подання заяви до отримання'
      },
      price: {
        title: 'Вартість послуги:',
        content:
          'До 100 злотих. за реєстрацію на старих номерах\n' +
          'До 200 злотих. за реєстрацію на нових номерах\n' +
          'До 1200 злотих. за реєстрацію на рекомендованих номерах\n',
        reMaking: '+ Податок 2% від ціни авто'
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          'Для нашої людини, живи вона у Мінську, Києві чи Варшаві автомобіль завжди буде символом достатку та розкоші. Багато хто приїжджає до Польщі за більш високооплачуваною роботою, тому покупка автомобіля тут стає питанням часу. Власний транспортний засіб дарує не лише свободу пересування містом та країною, а й відкриває нові перспективи для заробітку!\n' +
          '\n' +
          'Другим привабливим фактором для покупки автомобіля в Європі є його ціна, тому що принцип оподаткування транспорту тут дуже відрізняється від звичного нам. Остання перешкода перед новим власником заповітного Мерседеса - його реєстрація, тому наша команда рада буде взяти цей процес на себе, щоб Ви могли швидше взятися за кермо\n'
      },
      button: {
        title: 'Зареєструвати авто',
        onClick: () => {}
      }
    }
  }
};
