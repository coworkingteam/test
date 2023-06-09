export default {
  baseURL: '/canadian-resident-card',
  welcome: {
    title: 'Канадська віза за програмою CUAET',
    button: {
      title: 'Отримати СUAET',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Що таке CUAET і чим він відрізняється від звичайної візи ?',
      content:
        'Абревіатура CUAET означає "Canada-Ukraine Authorization for Emergency Travel", або дослівно "Канадо-Український Дозвіл для Подорожей у Надзвичайних ситуаціях", але в цілому для оформлення такого документа ситуація не повинна бути надзвичайною, оскільки подати заяву може будь-який власник українського паспорта або член сім\'ї, який перебуває у шлюбі або споріднений з громадянином України\n' +
        '\n' +
        "Також власники візи за програмою CUAET можуть у процесі подання заяви безкоштовно отримати дозвіл на роботу та отримати допомогу в її пошуку майже відразу після прибуття. Також вони не зобов'язані надавати сертифікат про вакцинацію від COVID-19 та довідку про повне медичне обстеження, натомість усі необхідні документи пов'язані з охороною здоров'я можна буде оформити на місці, якщо буде така потреба\n" +
        '\n' +
        "Зважаючи на специфіку програми та потреб людей, яким вона покликана допомогти, заяви на отримання CUAET обробляються швидше, ніж звичайні візові анкети, що дозволяє отримати дозвіл на в'їзд набагато швидше, ніж при поданні заяви на звичайну візу.\n"
    },
    {
      title: 'Як проходить процес отримання візи за програмою CUAET ?',
      content:
        'Першим кроком для подання заявки буде створення облікового запису на офіційному сайті уряду Канади. Для цього потрібно отримати запрошення з кодом, яке буде надіслано на вказану електронну адресу. Важливо, щоб це була саме Ваша особиста пошта, тому що в майбутньому доведеться отримати на неї ще кілька важливих листів\n' +
        '\n' +
        "Код дасть Вам доступ до сайту, на якому потрібно буде створити обліковий запис для виконання наступних кроків (логін і пароль найкраще записати, оскільки доступ до облікового запису необхідний для відстеження статусу та подання інших заяв). Далі на сайті потрібно буде заповнити візову анкету, попередньо обравши зі списку саме анкету на CUAET, а також вказавши, що Ви заповнюєте анкету від свого імені, або ж вибрати відповідну опцію, якщо це анкета Вашого родича або члена сім'ї\n" +
        '\n' +
        "Для заповнення анкети з документів потрібен лише паспорт, але є опція додавання медичних довідок, сертифікатів, дипломів та інших документів. На процес отримання візи їх наявність ніяк не вплине, але, внісши їх в анкету, вони також прикріпляться до дозволу на роботу, профілю школяра або студента. Візова анкета буде англійською мовою (з можливістю перекладу в браузері) і важливо пам'ятати, що в разі закриття сторінки весь прогрес буде втрачено, тому варто спочатку виділити кілька годин, щоб заповнити її від початку і до кінця\n" +
        '\n' +
        'Після надсилання анкети протягом найближчих кількох днів на вказану адресу електронної пошти Ви отримаєте інформацію про те, куди і коли потрібно буде прийти для здачі біометричних даних, що є останнім кроком. На момент написання цього матеріалу працює тільки пункт у Варшаві, але найактуальнішу інформацію Ви отримаєте на електронну пошту\n'
    },
    {
      title: 'Що ще потрібно знати про програму CUAET і переїзд до Канади ?',
      content:
        'Насамперед варто згадати про те, що, як сказано на офіційному сайті програми, - це не програма для біженців, а скоріше дозвіл на тимчасове проживання, тому тим, хто залишив будинок з рюкзаком краще задуматися про менш вимогливі опції, як, наприклад, <a href="/spanish-resident-card">посвідка на проживання в Іспанії</a>\n' +
        '\n' +
        'Програма CUAET також передбачає допомогу для прибулих до Канади - йдеться не лише про дозвіл на роботу, а й про фінансову допомогу у вигляді одноразової виплати 3000 канадських доларів, щоб швидше вирішити питання житла та працевлаштування. Останнє стосується тих, хто приїде до Канади до березня 2023 року, після чого про продовження дозволу на роботу потрібно буде подбати самостійно\n' +
        '\n' +
        "Після схвалення візи Ви матимете дві опції її реалізації, і варто знати їх відмінності заздалегідь. Ви можете роздрукувати лист про схвалення візи і відразу використовувати його як в'їзний документ, але діятиме він лише 3 роки, і передбачає лише одноразове відвідування Канади. Другий варіант передбачає відправку свого закордонного паспорта в канадський консульський центр, де віза буде вклеєна безпосередньо до нього - в такому випадку кількість відвідувань буде необмежена, а віза буде дійсна до передостаннього дня терміну дії паспорта (отже, є сенс попередньо <a href='/international-passport?type=EXTENSION'>продовжити термін дії закордонного паспорта</a>). За відправку паспорта із вклеєною візою назад потрібно буде оплатити кур'єрську доставку на адресу (до 20 злотих), а час очікування становить від 2 до 4 тижнів"
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Орієнтовні терміни:',
        content:
          '14-30 днів від заявки до здачі біометричних даних\n' + '30-60 днів час очікування рішення про видачу візи\n'
      },
      price: {
        title: 'Вартість послуги:',
        content: "До 20 зл за доставку паспорта кур'єрською службою"
      }
    },
    rightSide: {
      description: {
        title: 'Опис послуги:',
        content:
          "Як більшість вже знає, в рамках міжнародної допомоги постраждалим від вторгнення російської федерації українцям багато країн спростили процедуру отримання віз та посвідок на проживання. Осторонь не залишилася і Канада, де навіть до початку війни українська діаспора була п'ятою за чисельністю етнічною групою\n" +
          '\n' +
          'Майже з початку війни уряд Канади запустив програму спрощеного отримання віз для українців - CUAET, в рамках якої кожен охочий українець може отримати довгострокову візу з можливістю працевлаштування. Канадський клімат, культурний колорит та рівень життя роблять цю пропозицію ще більш привабливою, а наша команда готова підтримати та допомогти розібратися у всіх нюансах\n'
      },
      button: {
        title: 'Отримати СUAET',
        onClick: () => {}
      }
    }
  }
};
