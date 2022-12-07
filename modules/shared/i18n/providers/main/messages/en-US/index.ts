import { LOCALES } from '@md-modules/shared/i18n/providers/main/locales';
// pages
import pages from './pages';
import menu from './menu/main';
import buttons from '@md-modules/shared/i18n/providers/main/messages/en-US/ui/buttons';

export default {
  [LOCALES.ENGLISH]: {
    ...pages,
    menu,
    buttons
  }
};
