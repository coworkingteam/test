import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import code95 from './pages/code-95';
import customs from './pages/customs';
import residentCard from './pages/resident-card';
import carInsurance from './pages/car-insurance';
import carRegistration from './pages/car-registration';
import carDeregistration from './pages/car-deregistration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import spanishResidentCard from './pages/spanish-resident-card';
import businessTokenization from './pages/business-tokenization';
import internationalPassport from './pages/international-passport';
import renewalDrivingLicense from './pages/renewal-driving-license';
import schoolAndKindergarten from './pages/school-and-kindergarten';
import admissionToUniversity from './pages/admission-to-university';
import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  [LOCALES.UKRAINIAN]: {
    menu: {
      services: {
        title: 'Послуги',
        itemList: [
          ['Допомога з картою побуту', '/resident-card'],
          ['Продовження терміну дії паспорта', '/international-passport?type=EXTENSION'],
          ['Отримання закордонного паспорта', '/international-passport?type=OBTAINING'],
          ['Польська посвідка на проживання', '/long-term-residence-permit'],
          ['Вступ до польського ВИШу', '/admission-to-university'],
          ['Запис дитини до школи', '/school-and-kindergarten?type=SCHOOL'],
          ['Запис дитини до дитсадка', '/school-and-kindergarten?type=KINDERGARTEN']
        ],
        categories: {
          forBusiness: {
            title: 'Для бізнесу',
            itemList: [['Токенізація бізнесу', '/business-tokenization']]
          },
          servicesForDrivers: {
            title: 'Послуги для авто',
            itemList: [
              ['Заміна водійських прав на польські', '/renewal-driving-license'],
              ['Страхування автомобіля', '/car-insurance'],
              ['Оформлення ліцензії таксі', '/taxi-license-for-pass-trans'],
              ['Реєстрація авто', '/car-registration'],
              ['Отримання Коду 95', '/code-95'],
              ['Розмитнення авто', '/customs'],
              ['Зняття авто з обліку', '/car-deregistration']
            ]
          }
        }
      }
    },
    code95,
    customs,
    taxiLicense,
    residentCard,
    carInsurance,
    carRegistration,
    carDeregistration,
    spanishResidentCard,
    businessTokenization,
    renewalDrivingLicense,
    internationalPassport,
    schoolAndKindergarten,
    admissionToUniversity,
    longTermResidencePermit
  }
};
