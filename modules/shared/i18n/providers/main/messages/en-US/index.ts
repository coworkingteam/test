import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import code95 from './pages/code-95';
import customs from './pages/customs';
import carInsurance from './pages/car-insurance';
import residentCard from './pages/resident-card';
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
  [LOCALES.ENGLISH]: {
    menu: {
      services: {
        title: 'Services',
        categories: {
          forBusiness: {
            title: 'For business'
          },
          servicesForDrivers: {
            title: 'Services for drivers'
          }
        }
      }
    },
    code95,
    customs,
    taxiLicense,
    carInsurance,
    residentCard,
    carRegistration,
    carDeregistration,
    spanishResidentCard,
    businessTokenization,
    internationalPassport,
    schoolAndKindergarten,
    renewalDrivingLicense,
    admissionToUniversity,
    longTermResidencePermit
  }
};
