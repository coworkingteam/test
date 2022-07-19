import React from 'react';
// components
import Accordion from '@md-ui/accordion';
import ServiceRegistrationCard from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card';
// views
import { Wrapper } from '@md-modules/shared/layouts/service/components/pages/service-registration/views';

import { ACCORDION_DATA } from '@md-modules/home/components/pages/additional-info/constants';

const ServiceRegistration = () => {
  return (
    <Wrapper>
      <ServiceRegistrationCard />
      <Accordion blackTheme data={ACCORDION_DATA} />
    </Wrapper>
  );
};

export default ServiceRegistration;
