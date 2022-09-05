export default {
  welcome: {
    title: 'Zmiana prawa jazdy na polskie dla obcokrajowców',
    button: {
      title: 'Zamienić prawko',
      onClick: () => {}
    }
  },

  serviceRegistrationFAQData: [
    {
      title: 'Jak złożyć podanie o przerobieniu prawa jazdy na polskie ?',
      content:
        '- Wypełnij formularz wniosku o zmianę prawa jazdy. Można go otrzymać w urzędzie odpowiednim do adresu zameldowania lub pobrać z jego oficjalnej strony internetowej\n' +
        '- Podaj pakiet dokumentów wraz z formularzem i wszystkimi opłatami do swojego inspektora okręgowego. Zamiast swojego prawa jazdy otrzymasz tymczasowe, ważne do momentu otrzymania przerobionego\n' +
        '* Spotkanie z inspektorem może odbywać się zarówno po wcześniejszej rejestracji na konkretną datę, jak i według kolejki do okienka\n' +
        '- Wkrótce Twoje prawo jazdy zostanie wysłane do kraju jego wystawienia w celu weryfikacji autentyczności\n' +
        '* Należy pamiętać, że wygasłe prawo jazdy nie podlega przerobieniu!\n'
    },
    {
      title: 'Lista dokumentów wymagana dla przerobienia prawa jazdy:',
      content:
        '- Twój aktualny paszport zagraniczny i jego pełna kopia\n' +
        '- Aktualne prawo jazdy i jego tłumaczenie przysięgłe\n' +
        '- Dwie kolorowe fotografie pełnotwarzowe o wymiarach 35 x 45 mm na białym tle\n' +
        '- Dokument potwierdzający legalność pobytu w Polsce (karta polaka, karta pobytu, wiza itp.)\n' +
        '- Oryginał zaświadczenia o zdrowiu psychicznym, które się dostaje po zdaniu testów na prawo jazdy w Polsce\n' +
        '- Potwierdzenie meldunku na terenie Polski lub umowa o najmu mieszkania tymczasowego\n'
    },
    {
      title: 'Opłaty oraz terminy:',
      content:
        '- Opłata za przerobienie prawa jazdy wynosi od 90 do 120 zł w zależności od regionu zamieszkania\n' +
        '- Uzyskanie zaświadczenia o zdaniu testu psychologicznego będzie kosztować 100-150 zł w zależności od instytucji która go wydaje i kategorii prawa jazdy\n' +
        '- Wyprodukowanie karty plastikowej będzie kosztować 50 zł, ta kwota stałe dla całej Polski (Czasami instytucje zagraniczne weryfikujące oryginalność dokumentów pobierają dodatkowe opłaty w zależności od kraju/regionu wydania sprawdzanego prawa jazdy)\n' +
        '* Na tym etapie opóźnienia pojawiają się najczęściej, ponieważ tę instytucję mogą być przytłoczeni ogromem wchodzących podań lub kadra odpowiedzialna za proces nie zbyt rzetelnie wykonuje swoje obowiązki\n'
    }
  ],

  serviceRegistration: {
    leftSide: {
      filingApplication: {
        title: 'Przybliżone terminy:',
        content:
          'Złożenie podania do 3 dni roboczych\n' +
          'Od 30 do 50 dni roboczych od momentu złożenia do momentu otrzymania'
      },
      price: {
        title: 'Cena usługi:',
        content: '105 zł dla kategorji C1, C, D1, D, C1+E, C+E, D1+E, D+E',
        reMaking: 'Przerobienie karty 50 złotych'
      }
    },
    rightSide: {
      description: {
        title: 'Opis usługi:',
        content:
          'Posiadając ważne prawo jazdy swojego kraju masz prawo do przerobienia go na europejskie, co pozwala nie tylko na swobodne poruszanie się po krajach Unii Europejskiej oraz krajów Schengen, ale także na oficjalne zatrudnienie w branży transportowej . Co nie mniej ważne, taki dokument znajduje się w polskiej ujednoliconej bazie danych, więc nie ma potrzeby trzymania go pod ręką podczas wyjazdów, co dla wielu będzie znaczącym plusem!'
      },
      button: {
        title: 'Zamienić prawko',
        onClick: () => {}
      }
    }
  }
};
