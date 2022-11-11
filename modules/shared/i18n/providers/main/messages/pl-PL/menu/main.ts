export default {
  services: {
    menuItemTitle: 'Usługi',
    title: 'Не знаешь с чего начать? Начнис aksis',

    categories: {
      residencePermit: {
        title: 'Usługi w zakresie pozwoleń na pobyt'
      },

      individuals: {
        title: 'osoby fizyczne',
        itemList: [
          ['Ponaglenie karty pobytu', '/resident-card'],
          ['Przedłużenie ważności paszportu', '/international-passport?type=EXTENSION'],
          ['Otrzymanie paszportu zagranicznego', '/international-passport?type=OBTAINING'],
          ['Otrzymanie karty stałego pobytu', '/long-term-residence-permit'],
          ['Otrzymanie wizy hiszpańskiej', '/spanish-resident-card'],
          ['Otrzymanie wizy kanadyjskiej', '/canadian-resident-card']
        ]
      },
      popular: {
        title: 'Popularny',
        itemList: [
          ['Otrzymanie wizy hiszpańskiej', '/spanish-resident-card'],
          ['Otrzymanie wizy kanadyjskiej', '/canadian-resident-card']
        ]
      },
      admission: {
        title: 'Wstęp',
        itemList: [
          ['Rekrutacja na studia w polsce', '/admission-to-university'],
          ['Zapis dziecka do szkoły', '/school-and-kindergarten?type=SCHOOL'],
          ['Zapis dziecka do przedszkola', '/school-and-kindergarten?type=KINDERGARTEN']
        ]
      },
      forBusiness: {
        title: 'Dla biznesu',
        itemList: [
          ['Tokenizacja biznesu', '/business-tokenization'],
          ['Otwarcie IP - JDG', '/ip-opening-jdg'],
          ['Otwarcie SP. OGRÓD ZOOLOGICZNY', '/sp-opening-zoo']
        ]
      },
      transport: {
        title: 'Usługi samochodowe',
        itemList: [
          ['Wymiana prawa jazdy na polskie', '/renewal-driving-license'],
          ['Ubezpieczenia samochodowe', '/car-insurance'],
          ['Otrzymanie licencji taxi', '/taxi-license-for-pass-trans'],
          ['Rejestracja samochodu', '/car-registration'],
          ['Otrzymanie Kodu 95', '/code-95'],
          ['Odprawa celna auta', '/customs'],
          ['Wyrejestrowanie samochodu', '/car-deregistration']
        ]
      }
    }
  }
};
