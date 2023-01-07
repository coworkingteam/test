export default {
  questionsAndAnswers: {
    title: 'Questions and answers'
  },
  services: {
    menuItemTitle: 'Services',

    title: 'Не знаешь с чего начать? Начни с aksis',
    categories: {
      root: {
        title: 'Menu'
      },

      residencePermit: {
        title: 'Residence permit'
      },

      individuals: {
        title: 'Individuals',
        itemList: [
          ['Residence permit assistance', '/resident-card'],
          ['Passport expiration date extension', '/international-passport?type=EXTENSION'],
          ['Obtaining ukrainian passport', '/international-passport?type=OBTAINING'],
          ['Polish residence permit', '/long-term-residence-permit'],
          ['Obtaining a spanish visa', '/spanish-resident-card'],
          ['Obtaining a canadian visa', '/canadian-resident-card']
        ]
      },
      popular: {
        title: 'Popular',
        itemList: [
          ['Obtaining a spanish visa', '/spanish-resident-card'],
          ['Obtaining a canadian visa', '/canadian-resident-card']
        ]
      },
      admission: {
        title: 'Admission',
        itemList: [
          ['Admission to polish high school', '/admission-to-university'],
          ['Enrolling a child in school', '/school-and-kindergarten?type=SCHOOL'],
          ['Enrolling a child in kindergarten', '/school-and-kindergarten?type=KINDERGARTEN']
        ]
      },
      forBusiness: {
        title: 'For business',
        itemList: [
          ['Business tokenization', '/business-tokenization'],
          ['IP opening - JDG', '/ip-opening-jdg'],
          ['SP opening. ZO.O.', '/sp-opening-zoo']
        ]
      },
      transport: {
        title: 'Services for drivers',
        itemList: [
          ['Driver license re-issuing', '/renewal-driving-license'],
          ['Vehicle insurance', '/car-insurance'],
          ['Taxi license for drivers', '/taxi-license-for-pass-trans'],
          ['Vehicle registration', '/car-registration'],
          ['Code 95 certificate', '/code-95'],
          ['Vehicle border clearance', '/customs'],
          ['Vehicle deregistration', '/car-deregistration']
        ]
      }
    }
  }
};
