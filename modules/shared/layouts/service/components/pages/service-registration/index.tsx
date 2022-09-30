import React from 'react';
// components
import Accordion from '@md-ui/accordion';
import ServiceRegistrationCard, {
  ServiceRegistrationData
} from '@md-modules/shared/layouts/service/components/pages/service-registration/components/service-registration-card';
// constants
import { IAccordionItem } from '@md-modules/shared/types/accordion';
// views
import { Wrapper } from '@md-modules/shared/layouts/service/components/pages/service-registration/views';

interface Props {
  hasTabs: boolean;
  toggleModal: () => void;
  serviceRegistrationFAQData: IAccordionItem[];
  serviceRegistrationData: ServiceRegistrationData;
}

const ServiceRegistration: React.FC<Props> = ({
  serviceRegistrationData,
  toggleModal,
  hasTabs,
  serviceRegistrationFAQData
}) => {
  return (
    <Wrapper hasTabs={hasTabs}>
      <ServiceRegistrationCard
        linkID='hero'
        toggleModal={toggleModal}
        leftSide={serviceRegistrationData.leftSide}
        rightSide={serviceRegistrationData.rightSide}
      />

      <Accordion blackTheme data={serviceRegistrationFAQData} />
    </Wrapper>
  );
};

export default ServiceRegistration;
