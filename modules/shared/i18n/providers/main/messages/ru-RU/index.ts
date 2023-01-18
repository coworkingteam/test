import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import menu from './menu/main';
import home from './pages/home';
import blog from './pages/blog';
import buttons from './ui/buttons';
import breadcrumb from './ui/breadcrumb';
// import code95 from './pages/code-95';
// import customs from './pages/customs';
// import residentCard from './pages/resident-card';
// import carInsurance from './pages/car-insurance';
// import carRegistration from './pages/car-registration';
// import carDeregistration from './pages/car-deregistration';
// import taxiLicense from './pages/taxi-license-for-pass-trans';
// import businessTokenization from './pages/business-tokenization';
// import spanishResidentCard from './pages/spanish-resident-card';
// import canadianResidentCard from './pages/canadian-resident-card';
// import internationalPassport from './pages/international-passport';
// import schoolAndKindergarten from './pages/school-and-kindergarten';
// import admissionToUniversity from './pages/admission-to-university';
// import renewalDrivingLicense from './pages/renewal-driving-license';
// import longTermResidencePermit from './pages/long-term-residence-permit';

export default {
  [LOCALES.RUSSIAN]: {
    home,
    blog,
    menu,
    buttons,
    breadcrumb
  }
};
