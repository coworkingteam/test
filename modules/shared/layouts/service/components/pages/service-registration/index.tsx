import React from 'react';
// components
import Accordion from '@md-ui/accordions/accordion-contentful';
import ServiceRegistrationCard, {
  ServiceRegistrationData
} from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card';
// constants
import { IContentfulAccordionItem } from '@md-modules/shared/types/accordion';
// views
import { Wrapper } from '@md-modules/shared/layouts/service/components/pages/service-registration/views';

interface Props {
  hasTabs: boolean;
  toggleModal: () => void;
  serviceRegistrationFAQData: IContentfulAccordionItem[];
  serviceRegistrationData: ServiceRegistrationData;
}

const ServiceRegistration: React.FC<Props> = ({
  serviceRegistrationData,
  toggleModal,
  hasTabs,
  serviceRegistrationFAQData
}) => (
  <Wrapper hasTabs={hasTabs}>
    <ServiceRegistrationCard
      link='hero'
      toggleModal={toggleModal}
      leftSide={serviceRegistrationData.leftSide}
      rightSide={serviceRegistrationData.rightSide}
    />

    <Accordion blackTheme data={serviceRegistrationFAQData} />
  </Wrapper>
);

export default ServiceRegistration;
