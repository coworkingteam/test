import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import renewalDrivingLicense from './pages/renewal-driving-license';
import registrationResidencePermit from './pages/registration-residence-permit';
import taxiLicense from './pages/taxi-license-for-pass-trans';

export default {
  [LOCALES.RUSSIAN]: {
    renewalDrivingLicense: { ...renewalDrivingLicense },
    registrationResidencePermit: { ...registrationResidencePermit },
    taxiLicense: { ...taxiLicense }
  }
};
