import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/resident-card.png',
    titleID: 'admissionToUniversity.welcome.title',
    button: {
      titleID: 'admissionToUniversity.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'admissionToUniversity.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'admissionToUniversity.serviceRegistration.leftSide.filingApplication.content'
      },
      price: {
        titleID: 'admissionToUniversity.serviceRegistration.leftSide.price.title',
        contentsIDS: ['admissionToUniversity.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'admissionToUniversity.serviceRegistration.rightSide.description.title',
        contentID: 'admissionToUniversity.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'admissionToUniversity.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    title: `admissionToUniversity.serviceRegistrationFAQData.${index}.title`,
    content: `admissionToUniversity.serviceRegistrationFAQData.${index}.content`
  }))
};

const AdmissionToUniversity = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.blue100} />;

export default AdmissionToUniversity;
