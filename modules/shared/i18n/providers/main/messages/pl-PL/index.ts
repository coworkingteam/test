import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import renewalDrivingLicense from './pages/renewal-driving-license';
import registrationResidencePermit from './pages/registration-residence-permit';

export default {
  [LOCALES.POLISH]: {
    renewalDrivingLicense: { ...renewalDrivingLicense },
    registrationResidencePermit: { ...registrationResidencePermit }
  }
};
