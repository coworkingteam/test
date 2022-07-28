import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import renewalDrivingLicense from './pages/renewal-driving-license';
import taxiLicense from './pages/taxi-license-for-pass-trans';

export default {
  [LOCALES.POLISH]: {
    renewalDrivingLicense: { ...renewalDrivingLicense },
    taxiLicense: { ...taxiLicense }
  }
};
