import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/kod95.png',
    titleID: 'code95.welcome.title',
    button: {
      titleID: 'code95.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'code95.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'code95.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'code95.serviceRegistration.leftSide.price.title',
        contentsIDS: ['code95.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'code95.serviceRegistration.rightSide.description.title',
        contentID: 'code95.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'code95.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    // open: index === 0,
    title: `code95.serviceRegistrationFAQData.${index}.title`,
    content: `code95.serviceRegistrationFAQData.${index}.content`
  }))
};

const Code95 = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.green150} />;

export default Code95;
