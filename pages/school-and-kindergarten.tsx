import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: { type: string; titleID: string; data: IServiceData }[] = [
  {
    type: 'SCHOOL',
    titleID: 'schoolAndKindergarten.tabs.0.title',
    data: {
      welcome: {
        img: '/static/images/school.png',
        titleID: 'schoolAndKindergarten.tabs.0.welcome.title',
        tabTitleID: 'schoolAndKindergarten.tabs.0.title',
        button: {
          titleID: 'schoolAndKindergarten.tabs.0.welcome.button.title',
          onClick: () => {}
        }
      },
      serviceRegistrationData: {
        leftSide: {
          filingApplication: {
            titleID: 'schoolAndKindergarten.tabs.0.serviceRegistration.leftSide.filingApplication.title',
            contentID: 'schoolAndKindergarten.tabs.0.serviceRegistration.leftSide.filingApplication.content'
          },
          price: {
            titleID: 'schoolAndKindergarten.tabs.0.serviceRegistration.leftSide.price.title',
            contentsIDS: ['schoolAndKindergarten.tabs.0.serviceRegistration.leftSide.price.content']
          }
        },
        rightSide: {
          description: {
            titleID: 'schoolAndKindergarten.tabs.0.serviceRegistration.rightSide.description.title',
            contentID: 'schoolAndKindergarten.tabs.0.serviceRegistration.rightSide.description.content'
          },
          button: {
            titleID: 'schoolAndKindergarten.tabs.0.serviceRegistration.rightSide.button.title',
            onClick: () => {}
          }
        }
      },
      serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
        id: `${index}`,
        // open: index === 0,
        title: `schoolAndKindergarten.tabs.0.serviceRegistrationFAQData.${index}.title`,
        content: `schoolAndKindergarten.tabs.0.serviceRegistrationFAQData.${index}.content`
      }))
    }
  },
  {
    type: 'KINDERGARTEN',
    titleID: 'schoolAndKindergarten.tabs.1.title',
    data: {
      welcome: {
        img: '/static/images/kindergarten.png',
        titleID: 'schoolAndKindergarten.tabs.1.welcome.title',
        tabTitleID: 'schoolAndKindergarten.tabs.1.title',
        button: {
          titleID: 'schoolAndKindergarten.tabs.1.welcome.button.title',
          onClick: () => {}
        }
      },
      serviceRegistrationData: {
        leftSide: {
          filingApplication: {
            titleID: 'schoolAndKindergarten.tabs.1.serviceRegistration.leftSide.filingApplication.title',
            contentID: 'schoolAndKindergarten.tabs.1.serviceRegistration.leftSide.filingApplication.content'
          },
          price: {
            titleID: 'schoolAndKindergarten.tabs.1.serviceRegistration.leftSide.price.title',
            contentsIDS: ['schoolAndKindergarten.tabs.1.serviceRegistration.leftSide.price.content']
          }
        },
        rightSide: {
          description: {
            titleID: 'schoolAndKindergarten.tabs.1.serviceRegistration.rightSide.description.title',
            contentID: 'schoolAndKindergarten.tabs.1.serviceRegistration.rightSide.description.content'
          },
          button: {
            titleID: 'schoolAndKindergarten.tabs.1.serviceRegistration.rightSide.button.title',
            onClick: () => {}
          }
        }
      },
      serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
        id: `${index}`,
        // open: index === 0,
        title: `schoolAndKindergarten.tabs.1.serviceRegistrationFAQData.${index}.title`,
        content: `schoolAndKindergarten.tabs.1.serviceRegistrationFAQData.${index}.content`
      }))
    }
  }
];

const SchoolAndKindergarten = () => <ServiceLayout type='WITH_TABS' data={DATA} themeColor={theme.colors.yellow300} />;

export default SchoolAndKindergarten;
