import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/carpl.png',
    titleID: 'carRegistration.welcome.title',
    button: {
      titleID: 'carRegistration.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'carRegistration.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'carRegistration.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'carRegistration.serviceRegistration.leftSide.price.title',
        contentsIDS: [
          'carRegistration.serviceRegistration.leftSide.price.content',
          'carRegistration.serviceRegistration.leftSide.price.reMaking'
        ]
      }
    },
    rightSide: {
      description: {
        titleID: 'carRegistration.serviceRegistration.rightSide.description.title',
        contentID: 'carRegistration.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'carRegistration.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    open: index === 0,
    title: `carRegistration.serviceRegistrationFAQData.${index}.title`,
    content: `carRegistration.serviceRegistrationFAQData.${index}.content`
  }))
};

const CarRegistration = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.green150} />;

export default CarRegistration;
