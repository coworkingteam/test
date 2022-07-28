import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/renewal-driver-license.png',
    titleID: 'renewalDrivingLicense.welcome.title',
    button: {
      titleID: 'renewalDrivingLicense.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'renewalDrivingLicense.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'renewalDrivingLicense.serviceRegistration.leftSide.filingApplication.content'
      },
      registration: {
        titleID: 'renewalDrivingLicense.serviceRegistration.leftSide.registration.title',
        contentID: 'renewalDrivingLicense.serviceRegistration.leftSide.registration.content'
      },
      price: {
        titleID: 'renewalDrivingLicense.serviceRegistration.leftSide.price.title',
        contentsIDS: [
          'renewalDrivingLicense.serviceRegistration.leftSide.price.content',
          'renewalDrivingLicense.serviceRegistration.leftSide.price.reMaking'
        ]
      }
    },
    rightSide: {
      description: {
        titleID: 'renewalDrivingLicense.serviceRegistration.rightSide.description.title',
        contentID: 'renewalDrivingLicense.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'renewalDrivingLicense.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    title: `renewalDrivingLicense.serviceRegistrationFAQData.${index}.title`,
    content: `renewalDrivingLicense.serviceRegistrationFAQData.${index}.content`
  }))
};

const RenewalDrivingLicense = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor='#787A91' />;

export default RenewalDrivingLicense;
