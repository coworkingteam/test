export default {
  welcome: {
    title: 'Зняття авто з обліку в Польщі',
    button: {
      title: 'Зняти авто з обліку',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Як і де потрібно знімати автомобіль з обліку ?',
      content:
        'Насамперед потрібно звернутися до міської муніципальної установи (Urząd Miejski) за місцем реєстрації авто, бажано вже маючи при собі всі необхідні документи. Такі бланки як заява про зняття з реєстрації та згода на обробку даних можна отримати на місці або заздалегідь завантажити та роздрукувати. Залежно від міста та відділення запис може проводитись онлайн, по талончиках або в порядку живої черги до віконця інспектора\n' +
        '\n' +
        'Безпосередньо сам інспектор перевірить Ваші документи на відповідність вимогам, і якщо помилок виявлено не буде - вам на місці видадуть тимчасовий техпаспорт разом із довідкою про зняття авто з обліку та транзитні номери замість звичайних, які при подачі заяви також доведеться здати.\n' +
        '\n' +
        'Заміна техпаспорта рідко триває довше 30 днів, тому варто перевіряти електронну скриньку, щоб не пропустити дату її отримання\n'
    },
    {
      title: 'Які документи для цього потрібні ?',
      content:
        'На зустріч з інспектором бажано приходити в повній готовності, зібравши та правильно оформивши всі необхідні документи. До них відносяться:\n' +
        '\n' +
        '- Заповнені бланки заяв на зняття авто з обліку та згоду на обробку муніципалітетом Ваших персональних даних. Їх можна отримати на місці або роздрукувати, попередньо завантаживши тут\n' +
        '- Закордонний паспорт як посвідчення особи. Якщо у Вас є карта поляка або посвідка на проживання - їх теж варто принести\n' +
        '- Техпаспорт і реєстраційний документ на авто, якщо він є\n' +
        '- Документ, на підставі якого автомобіль знімається з обліку (це може бути як договір купівлі-продажу, так і транзитний документ або підтвердження утилізації)\n' +
        '- Номерні знаки, тому що в будь-якому з перерахованих сценаріїв вони підлягають знищенню та видаленню інформації з бази\n' +
        "- Страховий поліс, дійсний ще як мінімум 2 місяці та оформлений на Ваше ім'я\n" +
        '- Копія договору купівлі-продажу чи фактури на купівлю транспорту\n' +
        '\n' +
        'Якщо в процесі реєстрації задіяна третя особа, необхідно буде також надати відповідну довіреність та підтвердження оплати за її виготовлення\n'
    },
    {
      title: "Про що ще потрібно пам'ятати знімаючи транспорт з обліку ?",
      content:
        'Насамперед потрібно визначити чи є причина відмовити Вам у знятті авто з обліку. Можливих приводів небагато, проте інспектор відмовить Вам, якщо в переліку документів відсутні:\n' +
        "- Техпаспорт. Без нього неможливо легально провести жодну процедуру, пов'язану з транспортним засобом\n" +
        '- Підтвердження проходження техогляду. Нюанс у тому, що без нього авто можуть зняти з обліку, але транзитні номери на нього Ви не отримаєте, а значить подальші операції будуть неможливі\n' +
        '- Документ, що підтверджує Ваше право власності. Договір купівлі-продажу, фактура, дарова або чек із салону - для зняття авто з реєстрації необхідно мати щонайменше один з них\n' +
        "- Невідповідності в історії власників авто. При покупці авто з рук минулий власник зобов'язаний надати як мінімум копії договорів про перепродаж авто кожному власнику до моменту Вашої покупки\n" +
        '\n' +
        'Важливо відразу перевірити наявність усіх договорів, відповідність дат, імен, наявність підписів і збіжність даних у договорах з даними з техпаспорта. Будь-яка невідповідність може не тільки перешкодити зняти авто з реєстрації або продати його, але й може призвести до розслідування, що також забере багато часу та сил\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Орієнтовні терміни:',
        content: '1 робочий день для випадків, де не потрібно розслідування'
      },
      price: {
        title: 'Вартість послуги:',
        content: '10 зл - оплата муніципальної установи'
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          'Майже кожен приїжджий, котрий купив автомобіль у Європі, переконався, що ціни на транспорт тут дуже демократичні, і цілком хорошу машину може дозволити собі людина навіть середнього достатку. Звикнувши до конкретного авто, потім складно розлучатися з ним, повертаючись додому, тому більшість розглядають можливість забрати його з собою\n' +
          '\n' +
          'Для здійснення цього нехитрого плану потрібно пройти важливий етап - зняття авто з обліку, тобто видалення даних з місцевих реєстрів щоб в майбутньому зареєструвати його в країні проживання з метою подальшого користування або продажу\n'
      },
      button: {
        title: 'Зняти авто з обліку',
        onClick: () => {}
      }
    }
  }
};
