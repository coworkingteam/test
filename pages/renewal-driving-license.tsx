import React from 'react';
import { IServiceData, ServiceLayout } from '@md-modules/shared/layouts/service';

const DATA: IServiceData = {
  welcome: {
    img: '/static/images/car.png',
    title: 'welcome.title',
    button: {
      title: 'welcome.button.title',
      onClick: () => {}
    }
  }
};

const RenewalDrivingLicense = () => <ServiceLayout data={DATA} themeColor='#787A91' />;

export default RenewalDrivingLicense;
