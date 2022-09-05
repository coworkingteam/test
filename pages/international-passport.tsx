import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: { type: string; titleID: string; data: IServiceData }[] = [
  {
    type: 'RECEIPT',
    titleID: 'internationalPassport.tabs.0.title',
    data: {
      welcome: {
        img: '/static/images/international-passport.png',
        titleID: 'internationalPassport.tabs.0.welcome.title',
        button: {
          titleID: 'internationalPassport.tabs.0.welcome.button.title',
          onClick: () => {}
        }
      },
      serviceRegistrationData: {
        leftSide: {
          filingApplication: {
            titleID: 'internationalPassport.tabs.0.serviceRegistration.leftSide.filingApplication.title',
            contentID: 'internationalPassport.tabs.0.serviceRegistration.leftSide.filingApplication.content'
          },
          price: {
            titleID: 'internationalPassport.tabs.0.serviceRegistration.leftSide.price.title',
            contentsIDS: [
              'internationalPassport.tabs.0.serviceRegistration.leftSide.price.content',
              'internationalPassport.tabs.0.serviceRegistration.leftSide.price.reMaking'
            ]
          }
        },
        rightSide: {
          description: {
            titleID: 'internationalPassport.tabs.0.serviceRegistration.rightSide.description.title',
            contentID: 'internationalPassport.tabs.0.serviceRegistration.rightSide.description.content'
          },
          button: {
            titleID: 'internationalPassport.tabs.0.serviceRegistration.rightSide.button.title',
            onClick: () => {}
          }
        }
      },
      serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
        id: `${index}`,
        title: `internationalPassport.tabs.0.serviceRegistrationFAQData.${index}.title`,
        content: `internationalPassport.tabs.0.serviceRegistrationFAQData.${index}.content`
      }))
    }
  },
  {
    type: 'EXTENSION',
    titleID: 'internationalPassport.tabs.1.title',
    data: {
      welcome: {
        img: '/static/images/international-passport.png',
        titleID: 'internationalPassport.tabs.1.welcome.title',
        button: {
          titleID: 'internationalPassport.tabs.1.welcome.button.title',
          onClick: () => {}
        }
      },
      serviceRegistrationData: {
        leftSide: {
          filingApplication: {
            titleID: 'internationalPassport.tabs.1.serviceRegistration.leftSide.filingApplication.title',
            contentID: 'internationalPassport.tabs.1.serviceRegistration.leftSide.filingApplication.content'
          },
          price: {
            titleID: 'internationalPassport.tabs.1.serviceRegistration.leftSide.price.title',
            contentsIDS: ['internationalPassport.tabs.1.serviceRegistration.leftSide.price.content']
          }
        },
        rightSide: {
          description: {
            titleID: 'internationalPassport.tabs.1.serviceRegistration.rightSide.description.title',
            contentID: 'internationalPassport.tabs.1.serviceRegistration.rightSide.description.content'
          },
          button: {
            titleID: 'internationalPassport.tabs.1.serviceRegistration.rightSide.button.title',
            onClick: () => {}
          }
        }
      },
      serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
        id: `${index}`,
        title: `internationalPassport.tabs.1.serviceRegistrationFAQData.${index}.title`,
        content: `internationalPassport.tabs.1.serviceRegistrationFAQData.${index}.content`
      }))
    }
  }
];

const InternationalPassport = () => <ServiceLayout type='WITH_TABS' data={DATA} themeColor={theme.colors.blue100} />;

export default InternationalPassport;
