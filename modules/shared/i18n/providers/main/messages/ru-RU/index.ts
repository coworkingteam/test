import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import customs from './pages/customs';
import residentCard from './pages/resident-card';
import carInsurance from './pages/car-insurance';
import carRegistration from './pages/car-registration';
import carDeregistration from './pages/car-deregistration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import businessTokenization from './pages/business-tokenization';
import internationalPassport from './pages/international-passport';
import admissionToUniversity from './pages/admission-to-university';
import renewalDrivingLicense from './pages/renewal-driving-license';
import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  [LOCALES.RUSSIAN]: {
    customs,
    taxiLicense,
    residentCard,
    carInsurance,
    carRegistration,
    carDeregistration,
    businessTokenization,
    renewalDrivingLicense,
    internationalPassport,
    admissionToUniversity,
    longTermResidencePermit
  }
};
