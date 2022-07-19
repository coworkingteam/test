import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';

export default {
  [LOCALES.ENGLISH]: {
    renewalDrivingLicense: {
      welcome: {
        title: 'Driver license reissuing according to European standards',
        button: {
          title: 'APPLY NOW',
          onClick: () => {}
        }
      },
      serviceRegistration: {
        leftSide: {
          filingApplication: 'under 3 workdays',
          registration: '30 to 50 working days from application stage till completion',
          price: 'price is 105 pln for categories C1, C, D1,D, C1+E, C+E, D1+E, D+E',
          reMaking: 'Card re-making cost: 50 zloty'
        },
        rightSide: {
          description:
            "Having your country's valid driver's license, you have the right to reissue it to a European one, which allows you not only to freely move around the EU and Schengen countries, but also to officially apply for a job as a driver in a variety of transporting structures. No less important, such a document will be added to a Polish unified database, which means that there is no need to care it on you during trips, which will be a significant benefit!",
          button: {
            title: 'MORE INFORMATION',
            onClick: () => {}
          }
        }
      }
    }
  }
};
