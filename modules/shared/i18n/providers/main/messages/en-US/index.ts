import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import carInsurance from './pages/car-insurance';
import carRegistration from './pages/car-registration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import businessTokenization from './pages/business-tokenization';
import renewalDrivingLicense from './pages/renewal-driving-license';

export default {
  [LOCALES.ENGLISH]: {
    taxiLicense,
    carInsurance,
    carRegistration,
    businessTokenization,
    renewalDrivingLicense
  }
};
