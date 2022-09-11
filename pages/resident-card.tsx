import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/resident-card.png',
    titleID: 'residentCard.welcome.title',
    button: {
      titleID: 'residentCard.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'residentCard.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'residentCard.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'residentCard.serviceRegistration.leftSide.price.title',
        contentsIDS: ['residentCard.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'residentCard.serviceRegistration.rightSide.description.title',
        contentID: 'residentCard.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'residentCard.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    open: index === 0,
    title: `residentCard.serviceRegistrationFAQData.${index}.title`,
    content: `residentCard.serviceRegistrationFAQData.${index}.content`
  }))
};

const ResidentCard = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.blue100} />;

export default ResidentCard;
