export default {
  services: {
    title: 'Usługi',
    itemList: [
      ['Ponaglenie karty pobytu', '/resident-card'],
      ['Przedłużenie ważności paszportu', '/international-passport?type=EXTENSION'],
      ['Otrzymanie paszportu zagranicznego', '/international-passport?type=OBTAINING'],
      ['Otrzymanie karty stałego pobytu', '/long-term-residence-permit'],
      ['Rekrutacja na studia w polsce', '/admission-to-university'],
      ['Zapis dziecka do szkoły', '/school-and-kindergarten?type=SCHOOL'],
      ['Zapis dziecka do przedszkola', '/school-and-kindergarten?type=KINDERGARTEN'],
      ['Otrzymanie wizy hiszpańskiej', '/spanish-resident-card'],
      ['Otrzymanie wizy kanadyjskiej', '/canadian-resident-card']
    ],
    categories: {
      forBusiness: {
        title: 'Dla biznesu',
        itemList: [['Tokenizacja biznesu', '/business-tokenization']]
      },
      servicesForDrivers: {
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
