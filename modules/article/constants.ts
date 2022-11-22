import { colors } from '@md-styles/styled/theme';

export interface Article {
  queryId: string;
  title: string;
  highliteTitleColor?: string;
  img?: string;
  desc: string;
}

export const ARTICLES: Article[] = [
  {
    queryId: '1',
    title: 'canadianResidentCard.serviceRegistrationFAQData.0.title',
    highliteTitleColor: colors.purple100,
    img: '/static/images/canada.png',
    desc: 'canadianResidentCard.serviceRegistrationFAQData.0.content'
  }
];
