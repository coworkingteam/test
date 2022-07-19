import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/car.png',
    titleID: 'renewalDrivingLicense.welcome.title',
    button: {
      titleID: 'renewalDrivingLicense.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplicationID: 'renewalDrivingLicense.serviceRegistration.leftSide.filingApplication',
      registrationID: 'renewalDrivingLicense.serviceRegistration.leftSide.registration',
      priceIDS: [
        'renewalDrivingLicense.serviceRegistration.leftSide.price',
        'renewalDrivingLicense.serviceRegistration.leftSide.reMaking'
      ]
    },
    rightSide: {
      descriptionID: 'renewalDrivingLicense.serviceRegistration.rightSide.description',
      button: {
        titleID: 'renewalDrivingLicense.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  }
};

const RenewalDrivingLicense = () => <ServiceLayout data={DATA} themeColor='#787A91' />;

export default RenewalDrivingLicense;
