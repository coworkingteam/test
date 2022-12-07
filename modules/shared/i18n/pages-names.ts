import messages from '@md-modules/shared/i18n/providers/main/messages';
import { Locales } from '@md-modules/shared/i18n/providers/main/locales';

export type PageData =
  | {
      [index in Locales]?: { name: string; url: string }[];
    };

export const PAGES_NAMES: PageData = Object.entries(messages)
  .map((item) => [
    item[0],
    Object.values(item[1])
      .filter((item) => item.baseURL && item.baseURL !== '/')
      .map((item) => (item.welcome ? [item.welcome.title, item.baseURL] : [item.tabs[0].welcome.title, item.baseURL]))
      .map((item) => ({
        url: item[1],
        name: item[0]
      }))
  ])
  .reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue[0] as string]: currentValue[1] }), {});
