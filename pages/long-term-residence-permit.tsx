import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/resident-card.png',
    titleID: 'longTermResidencePermit.welcome.title',
    button: {
      titleID: 'longTermResidencePermit.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'longTermResidencePermit.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'longTermResidencePermit.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'longTermResidencePermit.serviceRegistration.leftSide.price.title',
        contentsIDS: ['longTermResidencePermit.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'longTermResidencePermit.serviceRegistration.rightSide.description.title',
        contentID: 'longTermResidencePermit.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'longTermResidencePermit.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    title: `longTermResidencePermit.serviceRegistrationFAQData.${index}.title`,
    content: `longTermResidencePermit.serviceRegistrationFAQData.${index}.content`
  }))
};

const LongTermResidencePermit = () => (
  <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.blue100} />
);

export default LongTermResidencePermit;
