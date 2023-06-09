export default {
  baseURL: '/long-term-residence-permit',
  welcome: {
    title: 'Оформлення посвідки на проживання в Польщі',
    button: {
      title: 'Отримати посвідку',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'На яких підставах можна отримати карту побуту у Польщі ?',
      content:
        'Посвідку проживання в Польщі можна отримати на підставі кількох факторів, залежно від Вашої мети перебування в країні, а документ, що підтверджує цю мету, буде основним при подачі заяви. Отримати карту можна на наступних підставах:\n' +
        '\n' +
        '- Навчання у польському ВНЗ чи школі. У такому разі карта побуту найчастіше видається на час навчального процесу, а при подачі документів потрібно буде подати довідку про зарахування та підтвердження оплати мінімум за перший рік навчання\n' +
        '\n' +
        '- Працевлаштування. Терміни в такому випадку залежать від того, чи є кінцева дата Вашої роботи чи стажування. Якщо так, то картку видадуть із запасом у 30 днів після закінчення цього терміну, а якщо ні – термін залежить лише від консула, який виносить рішення про видачу. Головним документом у такому разі буде довідка про працевлаштування, видана фірмою, яка приймає Вас на роботу.\n' +
        '\n' +
        '- Бізнес. Якщо Ви є власником, співвласником або інвестором фірми зареєстрованої в Польщі, то можете отримати дозвіл на проживання до 5 років, а документ, що подається в консульство, повинен містити дані про фірму, Вашу посаду в ній та мету візиту\n' +
        '\n' +
        "- Шлюб. Будучи у шлюбі з громадянином ЄС, ви також можете розраховувати на отримання карти побуту. Надати в такому випадку потрібно лише свідоцтво про шлюб, але слід пам'ятати, що картка може бути анульована у разі розлучення раніше ніж через 2 роки після дати офіційного одруження\n" +
        '\n' +
        "- Об'єднання сім'ї. Не найчастіший спосіб отримати карту побуту, тож якщо ваш родич чи дитина є громадянином ЄС, то при наданні довідки, що підтверджує спорідненість, можна отримати картку з терміном від 5 до 10 років\n"
    },
    {
      title: 'Які документи потрібні для подання заяви ?',
      content:
        'Кількість та вид документів для отримання карти побуту залежить від її типу (тимчасова, робоча, студентська, довгострокова і т.д.), проте основний набір залишається незмінним:\n' +
        '\n' +
        '- Правильно заповнена анкета-внесок, різна для кожного типу картки\n' +
        '- Оригінал та три повні копії закордонного паспорта (або паспортів, якщо їх у Вас кілька)\n' +
        '- 5 роздрукованих кольорових фото, зроблених з дотриманням актуальних вимог консульства\n' +
        '- Документ або пакет документів на основі яких ви подаєтесь на карту (довідка про працевлаштування, навчання, мовні курси тощо)\n' +
        '- Оригінал та копія страхового поліса, що відповідає актуальним вимогам для типу карти, яку Ви бажаєте отримати\n' +
        '- Перекладене у присяжного перекладача свідоцтво про народження\n' +
        '- Документ, що підтверджує вашу адресу проживання на території Польщі\n' +
        '\n' +
        'Більшість довідок та документів не складні в отриманні, проте наші експерти гарантують посильну допомогу у їх отриманні та оформленні.\n' +
        'З повним списком документів для Вашої справи можна ознайомитися на офіційному сайті консульства або на нашій гарячій лінії\n'
    },
    {
      title: 'На який термін видається карта і від чого він залежить ?',
      content:
        "Для кожної підстави для перебування в Польщі існують рекомендовані терміни ВНЖ, але важливо пам'ятати, що остаточне рішення залишається за консулом і залежить від конкретної справи. Наприклад, у разі отримання картки для навчання за рік до її закінчення навряд чи вдасться отримати її більш ніж на рік. Вплинути на це рішення не можна, але кінець терміну отриманої картки ще не сигнал збирати речі\n" +
        '\n' +
        'Ви можете податись на отримання посвідки на проживання повторно, і взявши до уваги такі фактори як Ваша кредитна історія, відносини із законом та успішність навчання або роботи, консул швидше за все видасть наступну картку вже з великим терміном\n' +
        '\n' +
        'Маючи хорошу соціальну репутацію після отримання третьої або навіть другої карти Ви можете спробувати отримати карту резидента (Karta Stałego Pobytu), яка не тільки матиме куди більший термін, але й м айже прирівнює до громадянина, за винятком права голосу на виборах та купівлі землі в " вічне користування"\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Приблизні терміни:',
        content: 'Віртуальна черга 60-90 днів\n' + 'Термін винесення рішення індивідуальний\n'
      },
      price: {
        title: 'Вартість послуги:',
        content: '50 злотих за оформлення пластикової картки'
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          'Більшість людей вперше прибувають до Польщі на навчання чи роботу, виїжджаючи за візою, зробленою в країні проживання. На жаль, часто віза видається на менший термін, ніж передбачуваний час навчання, роботи або стажування. Повертатися додому через рік для отримання чергової візи – не найзручніша опція, тому найчастіше найкращим варіантом буде отримати ВНЖ (карту побуту)\n' +
          '\n' +
          'Складним цей процес назвати складно, але в його тривалості та заплутаності переконався, мабуть, кожен. Особливо скрутним він може здатися для новоприбулих, чий рівень знання мови та бюрократичних нюансів тільки перешкоджає, саме тому найнадійніше звернутися до нашої команди, чий досвід та професіоналізм допоможуть Вам отримати ВНЖ без зайвих труднощів!\n'
      },
      button: {
        title: 'Отримати посвідку',
        onClick: () => {}
      }
    }
  }
};
