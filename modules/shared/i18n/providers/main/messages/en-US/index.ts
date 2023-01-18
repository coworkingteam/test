import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import pages from './pages';
import menu from './menu/main';
import buttons from './ui/buttons';
import breadcrumb from './ui/breadcrumb';

export default {
  [LOCALES.ENGLISH]: {
    ...pages,
    menu,
    buttons,
    breadcrumb
  }
};
