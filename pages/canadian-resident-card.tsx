import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/canada.svg',
    titleID: 'canadianResidentCard.welcome.title',
    button: {
      titleID: 'canadianResidentCard.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'canadianResidentCard.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'canadianResidentCard.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'canadianResidentCard.serviceRegistration.leftSide.price.title',
        contentsIDS: ['canadianResidentCard.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'canadianResidentCard.serviceRegistration.rightSide.description.title',
        contentID: 'canadianResidentCard.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'canadianResidentCard.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    // open: index === 0,
    title: `canadianResidentCard.serviceRegistrationFAQData.${index}.title`,
    content: `canadianResidentCard.serviceRegistrationFAQData.${index}.content`
  }))
};

const ResidentCard = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.blue100} />;

export default ResidentCard;
