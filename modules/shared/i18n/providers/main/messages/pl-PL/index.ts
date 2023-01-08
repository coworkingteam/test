import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import menu from './menu/main';
import buttons from './ui/buttons';
import code95 from './pages/code-95';
import customs from './pages/customs';
import residentCard from './pages/resident-card';
import carInsurance from './pages/car-insurance';
import carRegistration from './pages/car-registration';
import carDeregistration from './pages/car-deregistration';
import taxiLicense from './pages/taxi-license-for-pass-trans';
import spanishResidentCard from './pages/spanish-resident-card';
import businessTokenization from './pages/business-tokenization';
import canadianResidentCard from './pages/canadian-resident-card';
import internationalPassport from './pages/international-passport';
import renewalDrivingLicense from './pages/renewal-driving-license';
import admissionToUniversity from './pages/admission-to-university';
import schoolAndKindergarten from './pages/school-and-kindergarten';
import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  // TODO FIX POLISH
  [LOCALES.RUSSIAN]: {
    menu,
    code95,
    customs,
    buttons,
    taxiLicense,
    residentCard,
    carInsurance,
    carRegistration,
    carDeregistration,
    spanishResidentCard,
    businessTokenization,
    internationalPassport,
    renewalDrivingLicense,
    canadianResidentCard,
    admissionToUniversity,
    schoolAndKindergarten,
    longTermResidencePermit
  }
};
