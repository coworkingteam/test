import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';
import { theme } from '@md-modules/shared/styles/styled/theme';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/car-insurance.png',
    titleID: 'carInsurance.welcome.title',
    button: {
      titleID: 'carInsurance.welcome.button.title',
      onClick: () => {}
    }
  },
  serviceRegistrationData: {
    leftSide: {
      filingApplication: {
        titleID: 'carInsurance.serviceRegistration.leftSide.filingApplication.title',
        contentID: 'carInsurance.serviceRegistration.leftSide.filingApplication.content'
      },
      registration: {
        titleID: 'carInsurance.serviceRegistration.leftSide.registration.title',
        contentID: 'carInsurance.serviceRegistration.leftSide.registration.content'
      },
      price: {
        titleID: 'carInsurance.serviceRegistration.leftSide.price.title',
        contentsIDS: ['carInsurance.serviceRegistration.leftSide.price.content']
      }
    },
    rightSide: {
      description: {
        titleID: 'carInsurance.serviceRegistration.rightSide.description.title',
        contentID: 'carInsurance.serviceRegistration.rightSide.description.content'
      },
      button: {
        titleID: 'carInsurance.serviceRegistration.rightSide.button.title',
        onClick: () => {}
      }
    }
  },
  serviceRegistrationFAQData: Array.from({ length: 3 }, (_, index) => ({
    id: `${index}`,
    title: `carInsurance.serviceRegistrationFAQData.${index}.title`,
    content: `carInsurance.serviceRegistrationFAQData.${index}.content`
  }))
};

const CarInsurance = () => <ServiceLayout type='WITHOUT_TABS' data={DATA} themeColor={theme.colors.green150} />;

export default CarInsurance;
