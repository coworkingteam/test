import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/car-taxi-license-page.png',
    titleID: 'taxiLicense.welcome.title',
    button: {
      titleID: 'taxiLicense.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'taxiLicense.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'taxiLicense.serviceRegistration.leftSide.filingApplication.content'
      },
      registration: {
        titleID: 'taxiLicense.serviceRegistration.leftSide.registration.title',
        contentID: 'taxiLicense.serviceRegistration.leftSide.registration.content'
      },
      price: {
        titleID: 'taxiLicense.serviceRegistration.leftSide.price.title',
        contentsIDS: [
          'taxiLicense.serviceRegistration.leftSide.price.content',
          'taxiLicense.serviceRegistration.leftSide.price.reMaking'
        ]
      }
    },
    rightSide: {
      description: {
        titleID: 'taxiLicense.serviceRegistration.rightSide.description.title',
        contentID: 'taxiLicense.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'taxiLicense.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    title: `taxiLicense.serviceRegistrationFAQData.${index}.title`,
    content: `taxiLicense.serviceRegistrationFAQData.${index}.content`
  }))
};

const TaxiLicenseForPT = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.greenBg} />;

export default TaxiLicenseForPT;
