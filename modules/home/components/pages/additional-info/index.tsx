import React from 'react';
// components
import Accordion from '@md-ui/accordion';
// constants
import { ACCORDION_DATA } from '@md-modules/home/components/pages/additional-info/constants';
// views
import { Wrapper, InnerWrapper } from '@md-modules/home/components/pages/additional-info/views';

const AdditionalInfo = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Accordion data={ACCORDION_DATA} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default AdditionalInfo;
