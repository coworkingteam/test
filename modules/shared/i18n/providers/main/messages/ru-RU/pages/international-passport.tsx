export default {
  baseURL: '/international-passport',
  tabs: [
    {
      welcome: {
        title: 'Получение и продление срока действия загранпаспорта Украины без выезда из Польши',
        button: {
          title: 'Получить загранпаспорт',
          onClick: () => {}
        }
      },
      title: 'Получение',
      serviceRegistrationFAQData: [
        {
          title: 'Где можно сделать загранпаспорт и зачем он нужен ?',
          content:
            'Законное право оформлять иностранные документы на территории страны могут только консульства, и для получения загранпаспорта Украины следует обратиться в Украинское консульство в Варшаве, Кракове, Люблине или Гданьске. Актуальную информацию об очередях, часах работы и актуальных сроках получения можно найти на официальных сайтах этих консульств\n' +
            '\n' +
            'Паспорт является не только документом но и удостоверением личности, которое необходимо предоставлять в банках, госучреждениях, полиции, при устройстве на работу а также аренде жилья, поэтому истечение его срока действия может привести к трудностям.\n'
        },
        {
          title: 'Как получить загранпаспорт Украины в Польше ?',
          content:
            'В сущности, процедура выглядит точно также как и в Украине, минимальный пакет документов для заявления на получение загранпаспорта включает:\n' +
            '- Внутренний паспорт (ID-карта)\n' +
            '* Или свидетельство о рождении ля лиц возрастом до 14 лет\n' +
            '- Справка о присвоении идентификационного номера налогоплательщика (РНОКПП или ИНН) Если документы были утеряны или или вне досягаемости стоит сообщить об этом в консульстве для получения помощи в восстановлении. Усредненный срок ожидания составляет три месяца, но это значение зависит от актуальной загруженности консульства\n' +
            '\n' +
            'Важно помнить что оформление загранпаспорта в консульстве возможно только в следующих случаях:\n' +
            '- Получение гражданином своего первого загранпаспорта\n' +
            '- Утеря или повреждение имеющегося документа\n' +
            '- Обновление информации о владельце\n' +
            '- Отсутствие свободных страниц для виз и штампов\n'
        },
        {
          title: 'Сколько будет стоить оформление загранпаспорта ?',
          content:
            'Как было упомянуто ранее - стоимость процедуры в Польше намного выше чем в Украине, поэтому стоит приготовиться к оплате следующих консульских взносов:\n' +
            '- 81 злотый за подачу Вашего заявления на рассмотрение\n' +
            '- 529 злотых за оформление нового загранпаспорта\n' +
            '* 733 злотых за переоформление утерянного или испорченного загранпаспорта. В таком случае к пакету документов нужно прибавить копию выданного полицией протокола об утере или похищении Вашего документа (с присяжным переводом на украинский язык), или же остатки старого паспорта в случае его повреждения. Если оформляемый в консульстве загранпаспорт - первый, то стоимость процедуры упадет до 285 злотых\n' +
            '\n' +
            'Важно помнить что осуществить оплату сборов следует ещё до посещения консульства (сделать это можно в любом банке), а с собой принести только квитанции об оплате\n'
        }
      ],
      serviceRegistration: {
        leftSide: {
          filingApplication: {
            title: 'Примерные сроки:',
            content: '3-7 рабочих дней на подачу заявления\n' + '\n' + 'От заявки до получения 50-70 рабочих дней\n'
          },
          price: {
            title: 'Стоимость:',
            content: 'Размер взноса - 81 зл',
            reMaking: 'Консульский сбор - от 285 до 733 злотых'
          }
        },
        rightSide: {
          description: {
            title: 'Описание услуги:',
            content:
              'Многие путешественники посещают страны Евросоюза по биометрическому загранпаспорту, или же оформляют туристическую визу для более длительного пребывания или частых поездок, но случаются ситуации когда затянувшаяся поездка или переезд не позволяют выехать в Украину даже для обновления паспорта с истекающим сроком действия или оформления такового для члена семьи у которого его нет. Что же делать в такой ситуации?\n' +
              '\n' +
              'Как Вы наверняка уже знаете, даже при наличии вида на жительство предъявление паспорта обязательно для множества учреждений, поэтому украинские консульства предоставляют услугу выдачи биометрических паспортов. Стоимость такой процедуры будет выше, как и время ожидания, тем не менее всё больше людей обращаются в консульства с такой целью.\n'
          },
          button: {
            title: 'Получить загранпаспорт',
            onClick: () => {}
          }
        }
      }
    },
    {
      welcome: {
        title: 'Получение и продление срока действия загранпаспорта Украины без выезда из Польши',
        button: {
          title: 'Продлить загранпаспорт',
          onClick: () => {}
        }
      },
      title: 'Продление',

      serviceRegistrationFAQData: [
        {
          title: 'Как и зачем продлевать срок действия загранпаспорта?',
          content:
            'Паспорт является не только документом но и удостоверением личности, которое необходимо предоставлять в банках, госучреждениях, полиции, при устройстве на работу а также аренде жилья, поэтому истечение его срока действия может привести к трудностям.\n' +
            '\n' +
            'К счастью услугу продления срока действия загранпаспорта предоставляют Украинские консульства (в электронном заявлении выберите ближайшее к Вашему месту жительства)\n' +
            'После заполнения и отправки формы Вам назначат дату когда нужно будет явиться в консульство с загранпаспортом и заполненным бланком заявления, его можно найти здесь\n' +
            'Если всё заполнено верно, то в день обращения ваш паспорт будет продлён на срок до 5 лет. Решение о сроке продления выносит консульство, но статистически большинство получает максимальный\n'
        },
        {
          title: 'Можно ли вписать ребёнка в паспорт родителя?',
          content:
            'Если у Вашего ребёнка загранпаспорт отсутствует его данные можно внести в Ваш, и процедура для этого аналогична с продлением срока годности за исключением нескольких дополнительных документов:\n' +
            '- Оригинал, перевод и копия свидетельства о рождении ребёнка (в случае отсутствия оной, можно предоставить выписку из ЗАГСа)\n' +
            '- Загранпаспорт родителя и его полную копию\n' +
            '- Две цветных фотографии Вашего ребёнка размерами 35х45\n' +
            'Чаще всего такое заявление одобряют в течении недели, после чего Вам назначат дату получения готового документа\n'
        },
        {
          title: 'Могут граждане ₚоссии и Беларуси воспользоваться этой услугой?',
          content:
            'Если речь идет о гражданах третьих стран юридически связанных с гражданами Украины то ответ скорее да чем нет. Разница в том что обращаться надо будет в консульства своих стран, а соответственно сборы за услугу и сроки её реализации индивидуальны.\n' +
            'Вы можете продлить свой загранпаспорт безвыездно если Вы:\n' +
            '- Состоите в браке или родстве с гражданином Украины\n' +
            '- Обладатель карты поляка с соответствующей родословной\n' +
            '- Имеете или имели вид на жительство в Украине\n' +
            '\n' +
            'Также следует помнить об исключениях в случае некоторых стран, например:\n' +
            '- Граждане Беларуси могут одноразово продлить срок загранпаспорта на два года, после чего обязаны получить новый\n' +
            '- Граждане России не могут продлевать сроки своих удостоверений поэтому необходимо будет получать полностью новый загранпаспорт\n' +
            '\n' +
            'В остальном процедуры крайне похожи и занимают примерно 60-90 рабочих дней, поэтому обратитесь в ближайшее консульство Вашей страны чтобы узнать детали, сроки и размеры сборов\n'
        }
      ],
      serviceRegistration: {
        leftSide: {
          filingApplication: {
            title: 'Примерные сроки:',
            content: 'до 7 рабочих дней\n' + 'Готовый документ можно получить в день подачи заявления\n'
          },
          price: {
            title: 'Стоимость:',
            content: 'Зависит от конкретного консульства'
          }
        },
        rightSide: {
          description: {
            title: 'Описание услуги:',
            content:
              'Большинство иностранцев живущих в Польше на постоянной основе ожидают или уже получили вид на жительство, чтобы больше не переживать из-за своей легализации в стране. В такой ситуации неприятной неожиданностью может стать истечение срока действия загранпаспорта, ведь не смотря на то что сейчас поправки в законодательстве и позволяют пользоваться просроченным документом - различные банки, фирмы, работодатели и учреждения продолжают требовать актуальный загранпаспорт для своих внутренних протоколов.\n' +
              '\n' +
              'К счастью для столкнувшихся с такой проблемой, загранпаспорт Украины можно переоформить не покидая Евросоюз. Процесс подачи заявления на такую услугу несложный но cтоит иметь в виду, что продлению подлежат только паспорта истекающие не менее чем через 3 месяца.\n'
          },
          button: {
            title: 'Продлить загранпаспорт',
            onClick: () => {}
          }
        }
      }
    }
  ]
};
