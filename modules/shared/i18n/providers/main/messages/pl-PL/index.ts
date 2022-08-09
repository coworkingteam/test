import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import residentCard from './pages/resident-card';
import carInsurance from './pages/car-insurance';
import carRegistration from './pages/car-registration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import businessTokenization from './pages/business-tokenization';
import internationalPassport from './pages/international-passport';
import renewalDrivingLicense from './pages/renewal-driving-license';

export default {
  [LOCALES.POLISH]: {
    taxiLicense,
    residentCard,
    carInsurance,
    carRegistration,
    renewalDrivingLicense,
    businessTokenization,
    internationalPassport
  }
};