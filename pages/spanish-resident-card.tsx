import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/spain.png',
    titleID: 'spanishResidentCard.welcome.title',
    button: {
      titleID: 'spanishResidentCard.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'spanishResidentCard.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'spanishResidentCard.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'spanishResidentCard.serviceRegistration.leftSide.price.title',
        contentsIDS: ['spanishResidentCard.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'spanishResidentCard.serviceRegistration.rightSide.description.title',
        contentID: 'spanishResidentCard.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'spanishResidentCard.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    // open: index === 0,
    title: `spanishResidentCard.serviceRegistrationFAQData.${index}.title`,
    content: `spanishResidentCard.serviceRegistrationFAQData.${index}.content`
  }))
};

const ResidentCard = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.purple100} />;

export default ResidentCard;
