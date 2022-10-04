import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/rastamojka.svg',
    titleID: 'customs.welcome.title',
    button: {
      titleID: 'customs.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'customs.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'customs.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'customs.serviceRegistration.leftSide.price.title',
        contentsIDS: ['customs.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'customs.serviceRegistration.rightSide.description.title',
        contentID: 'customs.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'customs.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    // open: index === 0,
    title: `customs.serviceRegistrationFAQData.${index}.title`,
    content: `customs.serviceRegistrationFAQData.${index}.content`
  }))
};

const Customs = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.green150} />;

export default Customs;
