export default {
  welcome: {
    title: 'Лицензия такси на пассажирские перевозки ',
    button: {
      title: 'Заменить права',
      onClick: () => {}
    }
  },
  serviceRegistrationFAQData: [
    {
      title: 'Jakie dokumenty są potrzebne do uzyskania licencji?',
      content:
        'Aby uzyskać licencję na przewóz osób taksówką, należy złożyć pakiet dokumentów w Wydziale Komunikacji i Transportu Starostwa Powiatowego. Pakiet ten musi zawierać:\n' +
        '- Bezpośrednio samą ankietę aplikacyjną w której muszą być podane:\n' +
        '* Dane osobowe przedsiębiorcy, na którego nazwisko wydawana jest licencja\n' +
        '* Potwierdzenie rejestracji w CEIDG (Centralna Ewidencja Informacji o Działalności Gospodarczej) lub KRS (Krajowy Rejestr Sądowy)\n' +
        '* NIP (Numer Identyfikacji Podatkowej) Twojej firmy\n' +
        '* Dane o tym, na jakich warunkach i w jakim obszarze samochody będą używane\n' +
        '* Okres, na jaki chciałbyś uzyskać licencję (od 2 do 50 lat)\n' +
        '* Lista pojazdów, których dotyczyć będzie licencja (trzeba również podać potwierdzenie własności, pełnomocnictwa do prowadzenia pojazdu lub zaświadczenie o leasingu/wynajmie dla każdego auta)\n' +
        '- Certyfikat Dobrej Reputacji, dostępny tutaj (wymaga dołączenia do wniosku oficjalnych oświadczeń, że Ty lub Twoi kierowcy nie zostaliście skazani za przestępstwa uniemożliwiające prowadzenie działalności handlowej związanej z transportem)\n' +
        '- Umowy o zatrudnieniu wszystkich kierowców oraz zaświadczenia o nieskazaniu za wymienione wyżej przestępstwa\n' +
        '* Zaświadczenia o nieskazaniu muszą być datowane nie wcześniej niż miesiąc przed złożeniem wniosku, w przeciwnym razie stają się prawnie nieistotne w momencie złożenia aplikacji\n' +
        '- Lista pojazdów do licencjonowania oraz dane o nich\n' +
        '* Chodzi o takich informacjach jak typ i marka samochodu, jego przeznaczenie, numer rejestracyjny, kod VIN oraz dokument potwierdzający własność pojazdu - dowód zakupu lub potwierdzenie wynajmu/leasingu\n' +
        '- Potwierdzenie wpłaty wszystkich opłat i podatków\n' +
        '- Pełnomocnictwo do czynności administracyjnych (jeżeli firma jest zarejestrowana na osobę trzecią) i potwierdzenie zapłaty za jego wystawienie\n'
    },
    {
      title: 'Na jak długo wydawana jest licencja i ile kosztuje?',
      content:
        'Już na etapie wypełniania wniosku można wybrać termin udzielenia licencji – od 2 do 50 lat. Wysokość opłaty i podatku (10%) za każdy pojazd będzie również zależeć od tego okresu:\n' +
        '- 320 zł - od 2 do 15 lat + 35,20 zł za samochód + wypis 3,20 zł\n' +
        '- 380 zł - od 15 do 30 lat + 41,80 zł za samochód + wypis 3,80 zł\n' +
        '- 450 zł - od 30 do 50 lat + 49,50 zł za samochód + wypis 4,50 zł\n\n' +
        'Z każdego samochodu objętego licencją należy sporządzić wypis, którego koszt wynosi 1% kosztu licencji\n' +
        'Za wydanie licencji na dowolny pojazd nie wymieniony we wniosku o licencję zostanie naliczona opłata w wysokości 11% kosztu licencji\n' +
        'W przypadku wniosku o wydanie licencji na więcej niż jeden samochód sama opłata, podatki za każdy samochód oraz koszt odpowiedniej liczby oświadczeń są sumowane i opłacane łącznie\n' +
        'Za dokonanie późniejszych zmian w treści licencji pobiera się opłatę w wysokości 10% opłaty za wydanie koncesji, a za wydanie wypisu po dokonywaniu zmian cena wynosi 5% opłaty za wydanie licencji'
    },
    {
      title: 'Co może się nie udać i jak tego uniknąć?',
      content:
        'Najwięcej trudności pojawia się na etapie składania pakietu dokumentów, gdyż w razie błędów, niezgodności lub braku jakiegokolwiek zaświadczenia urząd daje tylko 7 dni na rozwiązanie problemu, po czym wniosek traci ważność i pieniądze nie zostaną zwrócone\n' +
        '- Aby tego uniknąć, musisz sprawdzać pocztę w pierwszych dniach po złożeniu wniosku i działać szybko lub skonsultować się z naszymi ekspertami, aby uniknąć wszelkich niespójności\n\n' +
        'Samochód lub samochody, jeśli rejestrujesz więcej niż jeden, muszą spełniać wszystkie wymagania dotyczące uzyskania licencji na przewóz osób, a mianowicie:\n' +
        '- Mieć taksometr i elektroniczną kasę fiskalną\n' +
        '- Apteczka w kabinie\n' +
        '- Koło zapasowe i narzędzia do jego zmiany\n' +
        '- szachownica z napisem "TAXI" na dachu\n' +
        '- Odblaskowy znak lub stożek w przypadku zatrzymania awaryjnego\n' +
        '- Zaświadczenie o zakończonej konserwacji i ważna polisa ubezpieczeniowa\n' +
        '*Możesz dowiedzieć się, jak i gdzie złożyć wniosek tutaj (link wewnętrzny)\n'
    }
  ],
  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Подача заявки:',
        content: 'до 3 рабочих дней'
      },
      registration: {
        title: 'Регистрация:',
        content: 'От заявки до перевыпуска 30 до 50 рабочих дней'
      },
      price: {
        title: 'Cтоимость:',
        content: 'Сбор составляет 105 зл Для категорий: C1, C, D1, D, C1+E, C+E, D1+E, D+E',
        reMaking: 'За перевыпуск карты 50 зл'
      }
    },
    rightSide: {
      description: {
        title: 'Описание услуги:',
        content:
          'Имея действующее водительское удостоверение Вашей страны у вас есть право переоформить его на европейское, позволяющее не только свободно перемещаться по странам Евросоюза и Шенгена также официально трудоустраиваться в сфере транспорта. Что не менее важно, такой документ занесён в международную базу, а значит нет необходимости держать его под рукой во время поездок, что для многих будет весомым плюсом!'
      },
      button: {
        title: 'MORE INFORMATION',
        onClick: () => {}
      }
    }
  }
};
