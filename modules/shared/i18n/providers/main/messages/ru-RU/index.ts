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
        categories: {
          forBusiness: {
            title: 'Для бизнеса'
          },
          servicesForDrivers: {
            title: 'Авто услуги'
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
    schoolAndKindergarten,
    internationalPassport,
    admissionToUniversity,
    longTermResidencePermit
  }
};
