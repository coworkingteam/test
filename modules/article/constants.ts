import { colors } from '@md-styles/styled/theme';

interface Block {
  title?: string;
  description: string;
  note?: string;
}

export interface Article {
  queryId: string;
  title: string;
  highliteTitleColor?: string;
  img: string;
  content: Block[];
}

export const ARTICLES: Article[] = [
  {
    queryId: 'canadian-visa',
    title: 'canadianResidentCard.serviceRegistrationFAQData.0.title',
    highliteTitleColor: colors.purple100,
    img: '/static/images/canada.png',
    content: [
      {
        title: 'canadianResidentCard.serviceRegistrationFAQData.0.title',
        description: 'canadianResidentCard.serviceRegistrationFAQData.0.content'
      },
      {
        title: 'canadianResidentCard.serviceRegistrationFAQData.1.title',
        description: 'canadianResidentCard.serviceRegistrationFAQData.1.content'
      },
      {
        title: 'canadianResidentCard.serviceRegistrationFAQData.2.title',
        description: 'canadianResidentCard.serviceRegistrationFAQData.2.content'
      }
    ]
  },
  {
    queryId: 'spanish-visa',
    title: 'spanishResidentCard.serviceRegistrationFAQData.0.title',
    highliteTitleColor: colors.purple100,
    img: '/static/images/spain.png',
    content: [
      {
        title: 'spanishResidentCard.serviceRegistrationFAQData.0.title',
        description: 'spanishResidentCard.serviceRegistrationFAQData.0.content'
      },
      {
        title: 'spanishResidentCard.serviceRegistrationFAQData.1.title',
        description: 'spanishResidentCard.serviceRegistrationFAQData.1.content'
      },
      {
        title: 'spanishResidentCard.serviceRegistrationFAQData.2.title',
        description: 'spanishResidentCard.serviceRegistrationFAQData.2.content'
      }
    ]
  }
];
