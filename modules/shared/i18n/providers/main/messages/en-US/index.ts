import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import customs from './pages/customs';
import carInsurance from './pages/car-insurance';
import residentCard from './pages/resident-card';
import carRegistration from './pages/car-registration';
import carDeregistration from './pages/car-deregistration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import businessTokenization from './pages/business-tokenization';
import internationalPassport from './pages/international-passport';
import renewalDrivingLicense from './pages/renewal-driving-license';
import admissionToUniversity from './pages/admission-to-university';
import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  [LOCALES.ENGLISH]: {
    customs,
    taxiLicense,
    carInsurance,
    residentCard,
    carRegistration,
    carDeregistration,
    businessTokenization,
    internationalPassport,
    renewalDrivingLicense,
    admissionToUniversity,
    longTermResidencePermit
  }
};
