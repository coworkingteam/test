export default {
  baseURL: '/renewal-driving-license',
  welcome: {
    title: 'Переоформлення водійського посвідчення на польськ',
    button: {
      title: 'Замінити посвідчення',
      onClick: () => {}
    }
  },
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Приблизні терміни:',
        content: 'Подача заявки до 3 робочих днів\n' + 'Від заявки до перевипуска 30-50 робочих днів'
      },
      price: {
        title: 'Вартість послуги:',
        content: 'Збір складає 105 зл для категорій C1, C, D1, D, C1+E, C+E, D1+E, D+E',
        reMaking: 'Ціна перевипуска карти - 50 злотих'
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          'Маючи дійсне водійське посвідчення своєї країни Ви маєте право переоформити його на європейське, що дозволяє не тільки вільно пересуватися країнами Євросоюзу та Шенгену, а також офіційно працевлаштовуватися у сфері транспорту. Що не менш важливо, такий документ занесений до Польської уніфікованої бази даних, а отже немає необхідності тримати його під рукою під час поїздок, що для багатьох буде вагомим плюсом!'
      },
      button: {
        title: 'Замінити посвідчення',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Як проходить процес подачі документів ?',
      content:
        '- Заповніть бланк-заяву на переоформлення водійського посвідчення. Отримати його можна в муніципальному закладі за місцем прописки або завантажити на офіційному сайті\n' +
        '- Подайте пакет документів разом із бланком та квитанціями за оплату зборів своєму районному інспектору. Замість старих прав Ви отримаєте тимчасові, дійсні до моменту отримання перевипущених\n' +
        '* Подача може проходити як за записом так і в порядку живої черги\n' +
        '- Незабаром Ваше посвідчення буде відправлено до країни його видачі з метою підтвердження оригінальності\n' +
        "* Важливо пам'ятати що прострочені водійські права переоформленню не підлягають !\n"
    },
    {
      title: 'Документи необхідні для переоформлення водійського посвідчення:',
      content:
        '- Ваш актуальний закордонний паспорт та повна його копія\n' +
        '- Актуальне водійське посвідчення та його присяжний переклад\n' +
        '- Дві кольорові фотографії в анфас розміром 35 х 45 мм на білому тлі\n' +
        '- Документ, що підтверджує легальність Вашого перебування в Польщі (карта поляка, карта побуту, віза тощо)\n' +
        "- Оригінал довідки про психічне здоров'я, що отримується після проходження водійської комісії у Польщі\n" +
        '- Підтвердження вашої Польської прописки або договір про оренду тимчасового житла\n'
    },
    {
      title: 'Вартість послуги та терміни її реалізації:',
      content:
        '- Державний збір за переоформлення водійського посвідчення складає від 90 до 120 злотих, залежно від регіону проживання\n' +
        "- Отримання довідки про проходження психічне здоров'я обійдеться у 100-150 злотих залежно від установи в якій Ви її отримуєте та категорії прав\n" +
        '- Виготовлення пластикової картки коштуватиме 50 злотих, ця сума фіксована для всієї Польщі (Іноді установи, що перевіряють посвідчення на оригінальність стягують додаткові збори, залежно від країни/регіону їхнього випуску)\n' +
        "* Затримки найчастіше виникають саме на цьому етапі, оскільки установи відповідальні за перевірку можуть бути переповнені заявками або виконавчі особи можуть не добросовісно виконувати свої обов'язки"
    }
  ]
};
