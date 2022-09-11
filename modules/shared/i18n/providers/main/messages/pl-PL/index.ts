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
import admissionToUniversity from './pages/admission-to-university';
import schoolAndKindergarten from './pages/school-and-kindergarten';
import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  [LOCALES.POLISH]: {
    menu: {
      services: {
        title: 'Usługi',
        itemList: [
          ['Ponaglenie karty pobytu', '/resident-card'],
          ['Przedłużenie ważności paszportu', '/international-passport?type=EXTENSION'],
          ['Otrzymanie paszportu zagranicznego', '/international-passport?type=OBTAINING'],
          ['Otrzymanie karty stałego pobytu', '/long-term-residence-permit'],
          ['Rekrutacja na studia w polsce', '/admission-to-university'],
          ['Zapis dziecka do szkoły', '/school-and-kindergarten?type=SCHOOL'],
          ['Zapis dziecka do przedszkola', '/school-and-kindergarten?type=KINDERGARTEN']
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
    internationalPassport,
    renewalDrivingLicense,
    admissionToUniversity,
    schoolAndKindergarten,
    longTermResidencePermit
  }
};
