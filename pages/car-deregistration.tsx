import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/resident-card.png',
    titleID: 'carDeregistration.welcome.title',
    button: {
      titleID: 'carDeregistration.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'carDeregistration.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'carDeregistration.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'carDeregistration.serviceRegistration.leftSide.price.title',
        contentsIDS: ['carDeregistration.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'carDeregistration.serviceRegistration.rightSide.description.title',
        contentID: 'carDeregistration.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'carDeregistration.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    title: `carDeregistration.serviceRegistrationFAQData.${index}.title`,
    content: `carDeregistration.serviceRegistrationFAQData.${index}.content`
  }))
};

const Customs = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.green150} />;

export default Customs;
