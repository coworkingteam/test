import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import code95 from './pages/code-95';
import customs from './pages/customs';
import residentCard from './pages/resident-card';
import carInsurance from './pages/car-insurance';
import carRegistration from './pages/car-registration';
import carDeregistration from './pages/car-deregistration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import businessTokenization from './pages/business-tokenization';
import spanishResidentCard from './pages/spanish-resident-card';
import canadianResidentCard from './pages/canadian-resident-card';
import internationalPassport from './pages/international-passport';
import schoolAndKindergarten from './pages/school-and-kindergarten';
import admissionToUniversity from './pages/admission-to-university';
import renewalDrivingLicense from './pages/renewal-driving-license';
import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  [LOCALES.RUSSIAN]: {
    menu: {
      services: {
        title: 'Услуги',
        itemList: [
          ['Помощь с картой побыту', '/resident-card'],
          ['Продление загранпаспорта', '/international-passport?type=EXTENSION'],
          ['Получение загранпаспорта', '/international-passport?type=OBTAINING'],
          ['Польский вид на жительство', '/long-term-residence-permit'],
          ['Поступление в польский ВУЗ', '/admission-to-university'],
          ['Запись ребёнка в школу', '/school-and-kindergarten?type=SCHOOL'],
          ['Запись ребёнка в детсад', '/school-and-kindergarten?type=KINDERGARTEN'],
          ['Получение испанской визы', '/spanish-resident-card'],
          ['Получение канадской визы', '/canadian-resident-card']
        ],
        categories: {
          forBusiness: {
            title: 'Для бизнеса',
            itemList: [['Токенизация бизнеса', '/business-tokenization']]
          },
          servicesForDrivers: {
            title: 'Авто услуги',
            itemList: [
              ['Замена прав на польские', '/renewal-driving-license'],
              ['Страхование автомобиля', '/car-insurance'],
              ['Оформление лицензии такси', '/taxi-license-for-pass-trans'],
              ['Регистрация авто', '/car-registration'],
              ['Получение Кода 95', '/code-95'],
              ['Растаможка авто', '/customs'],
              ['Снятие авто с учёта', '/car-deregistration']
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
    canadianResidentCard,
    renewalDrivingLicense,
    schoolAndKindergarten,
    internationalPassport,
    admissionToUniversity,
    longTermResidencePermit
  }
};
