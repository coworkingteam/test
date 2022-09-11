import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/crypto2.png',
    titleID: 'businessTokenization.welcome.title',
    button: {
      titleID: 'businessTokenization.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'businessTokenization.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'businessTokenization.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'businessTokenization.serviceRegistration.leftSide.price.title',
        contentsIDS: ['businessTokenization.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'businessTokenization.serviceRegistration.rightSide.description.title',
        contentID: 'businessTokenization.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'businessTokenization.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    open: index === 0,
    title: `businessTokenization.serviceRegistrationFAQData.${index}.title`,
    content: `businessTokenization.serviceRegistrationFAQData.${index}.content`
  }))
};

const BusinessTokenization = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.blue100} />;

export default BusinessTokenization;
