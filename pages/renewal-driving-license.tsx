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
  serviceRegistrationFAQData: [
    {
      id: '1',
      title: 'Варианты оформления польского оформления',
      content:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
    }
  ]
};

const RenewalDrivingLicense = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor='#787A91' />;

export default RenewalDrivingLicense;
